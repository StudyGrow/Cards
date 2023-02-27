import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  // remove all data
  await prisma.$executeRawUnsafe(`DELETE FROM "Card";`);
  await prisma.$executeRawUnsafe(`DELETE FROM "Lecture";`);
  await prisma.$executeRawUnsafe(`DELETE FROM "User";`);

  const alice = await prisma.user.upsert({
    where: { email: 'alice@example.com' },
    update: {},
    create: {
      email: 'alice@example.com',
      firebaseId: '123',
      username: 'alice',
      status: 'ACTIVE',
      confirmed: true,
    },
  });
  const lecture = await prisma.lecture.upsert({
    where: { id: '1' },
    update: {},
    create: {
      name: 'Lecture 1',
      abrv: 'lec1',
      tagList: ['tag1', 'tag2'],
      totalCards: 0,
      User: {
        connect: {
          id: alice.id,
        },
      },
    },
  });
  const card1 = await prisma.card.upsert({
    where: { id: '1' },
    update: {},
    create: {
      lecture: {
        connect: {
          id: lecture.id,
        },
      },
      thema: 'Thema 1',
      content: 'Content 1',
      tags: ['tag1', 'tag2'],
      author: {
        connect: {
          id: alice.id,
        },
      },
    },
  });
  const card2 = await prisma.card.upsert({
    where: { id: '2' },
    update: {},
    create: {
      lecture: {
        connect: {
          id: lecture.id,
        },
      },
      thema: 'Thema 2',
      content: 'Content 2',
      tags: ['tag3'],
      author: {
        connect: {
          id: alice.id,
        },
      },
    },
  });
  // add cards to lecture
  await prisma.lecture.update({
    where: { id: lecture.id },
    data: {
      cards: {
        connect: [{ id: card1.id }, { id: card2.id }],
      },
    },
  });
}
main()
  .then(async () => {
    // check if data is in db
    const users = await prisma.user.findMany();
    const lectures = await prisma.lecture.findMany();
    const cards = await prisma.card.findMany();

    if (users.length !== 1) throw new Error('User count is not 1');
    if (lectures.length !== 1) throw new Error('Lecture count is not 1');
    if (cards.length !== 2) throw new Error('Card count is not 2');

    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
