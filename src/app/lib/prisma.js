import { PrismaClient } from '@/generated/prisma';

let prisma;

if (!global.prisma) {
  prisma = new PrismaClient();
  global.prisma = prisma;
} else {
  prisma = global.prisma;
}

export { prisma };
