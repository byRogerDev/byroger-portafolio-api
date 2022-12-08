import { PrismaClient, Technology } from '@prisma/client'

const prisma = new PrismaClient();

export const getEntries = async () => {
    console.log("getEntries");
    const techs: Technology[] = await prisma.technology.findMany();
    console.log(techs);
    return techs;
};

export const addEntry = () => null;

export const findById = async (id: number) => {
    console.log("findById: " + id);
    const tech: Technology | null = await prisma.technology.findFirst({ where: { id: id } })
    return tech;
};