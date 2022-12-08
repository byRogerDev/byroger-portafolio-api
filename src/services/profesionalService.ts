import { PrismaClient, Technology } from '@prisma/client';
import { ProfesionalProjectFront, ProfesionalProjectsTechnologyFront } from '../type';

const prisma = new PrismaClient();

export const getEntries = async () => {
    console.log("getEntries");
    const profesionals: ProfesionalProjectFront []  = await prisma.profesionalProject.findMany({
        orderBy: {
            order: 'asc'
        },
        include: { gallery: true, technologies: { include: { technology: { select: { id: true, name: true, img: true, order: true}}} } } 
    }) as ProfesionalProjectFront[];
    //const prof: ProfesionalProjectFront[] = profesionals.map(x=> {id: 'id'} );
    console.log(profesionals);
    return [ ...profesionals.map(profesional => { return { ...profesional, description: profesional.description?.split("\\n") , technologies: profesional.technologies.map((technology: ProfesionalProjectsTechnologyFront) => technology.technology).sort((a: { order: any; }, b: { order: number; }) => Number(a.order) - Number(b.order))} } ) ]
    /*const result = profesionals.map((profesional) => {
        return { ...profesional, technologies: profesional.technologies.map((technology) => technology.technology) }
    });*/
};

export const addEntry = () => null;

export const findById = async (id: number) => {
    console.log("findById: " + id);
    const profesionalProject: ProfesionalProjectFront | null = await prisma.profesionalProject.findFirst({ 
        where: { 
            id: id,             
        },
        include: {
            technologies: {
                include: {
                    technology: true,
                    
                }
            },
            gallery: true
        },
        orderBy: {
            order: 'asc'
        }
        
    });

    if(profesionalProject){
        //const tech : Technology[] = profesionalProject.technologies();
        //return profesionalProject;
        const orderTech: Technology[] = profesionalProject.technologies.map((technology: { technology: any; })  => technology.technology);

        return { ...profesionalProject, description: profesionalProject.description?.split("\\n") , technologies: orderTech.sort((a, b) => Number(a.order) - Number(b.order)) };
    }
    return null;
};