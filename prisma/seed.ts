import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const Carlos = await prisma.user.upsert({
    where: { email: 'carlos@luluapi.co' },
    update: {},
    create: {
      email: 'carlos@luluapi.co',
      name: 'Carlos Andres',
      password: '1234',
      habits: {
        create: {
          name: 'Wake up 6:00',
          description: '',
          frequency: 5,
          startDate: new Date(),
          endDate: new Date(),
          constancy: 90,
        },
      },
    },
  });

  const Olga = await prisma.user.upsert({
    where: { email: 'olgalu@luluapi.co' },
    update: {},
    create: {
      email: 'olgalu@luluapi.co',
      name: 'Olga Lucia',
      password: '1234',
      habits: {
        create: {
          name: 'Sleep max 9:45 pm',
          description: '',
          frequency: 6,
          startDate: new Date(),
          endDate: new Date(),
          constancy: 70,
        },
      },
    },
  });
  console.log({ Carlos, Olga });
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
