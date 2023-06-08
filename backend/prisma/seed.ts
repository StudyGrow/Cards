import fs from 'fs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@example.com' },
    update: {},
    create: {
      email: 'alice@example.com',
      firebaseId: 'zQClTFVV8POcZa6PpVCZtH2RFGZ2',
      username: 'alice',
      status: 'ACTIVE',
      confirmed: true,
    },
  });
  const rawData = fs.readFileSync('production.lectures.json');
  const jsonData = JSON.parse(rawData.toString());

  // Insert each lecture into the database
  for (const item of jsonData) {
    const lecture = await prisma.lecture.upsert({
      where: { id: item._id.$oid },
      update: {},
      create: {
        id: item._id.$oid,
        createdAt: new Date(),
        updatedAt: new Date(),
        name: item.name,
        abrv: item.abrv,
        tagList: item.tagList,
        totalCards: item.totalCards,
        User: {
          connect: {
            id: alice.id,
          },
        },
      },
    });
  }

  // Read Card data from file
  const rawCardData = fs.readFileSync('production.cards.json');
  const cardData = JSON.parse(rawCardData.toString());

  // Insert each card into the database
  for (const item of cardData) {
    // Find lecture with matching abrv
    const lecture = await prisma.lecture.findUnique({
      where: {
        abrv: item.vorlesung,
      },
    });

    // If no matching lecture was found, continue to next iteration
    if (!lecture) {
      console.log(
        `No lecture found with abrv ${item.vorlesung}. Skipping card ${item._id.$oid}.`,
      );
      continue;
    }

    const card = await prisma.card.upsert({
      where: { id: item._id.$oid },
      update: {},
      create: {
        id: item._id.$oid,
        createdAt: new Date(),
        updatedAt: new Date(),
        thema: item.thema,
        content: item.content,
        tags: item.tags,
        author: {
          connect: {
            id: alice.id,
          },
        },
        latex: item.latex,
        lecture: {
          connect: {
            id: lecture.id,
          },
        },
      },
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
