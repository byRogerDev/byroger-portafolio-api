import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const getEntries = async () => {
    console.log("getEntries");
    let tec = await prisma.technologies.findMany();
    console.log(tec);
    return tec;
};

export const addEntry = () => null;

export const findById = async (id: number) => {
    console.log("findById: " + id);
    let tec = await prisma.technologies.findFirst({ where: { id: id } })
    return tec;
};