import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
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
  await prisma.card.upsert({
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
  await prisma.card.upsert({
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
