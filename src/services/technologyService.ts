import { Technologies } from '../type';
import techData from './technologies.json';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();
const techs: Array<Technologies> = techData;

export const getEntries = async () => {
    console.log("getEntries");
    let tec = await prisma.technologies.findMany();
    console.log(tec);
    return tec;
};

export const addEntry = () => null;

export const findById = (id: number) => {
    const tec = techs.find(c=> c.id === id)
    return tec;
};