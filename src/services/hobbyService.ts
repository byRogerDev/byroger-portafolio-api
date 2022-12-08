import { PrismaClient, Technology } from '@prisma/client';
import { HobbyProjectFront, HobbyProjectsTechnologyFront } from '../type';

const prisma = new PrismaClient();

export const getEntries = async () => {
    console.log("getEntries");
    const profesionals: HobbyProjectFront []  = await prisma.hobbyProject.findMany({
        orderBy: {
            order: 'asc'
        },
        include: { gallery: true, technologies: { include: { technology: { select: { id: true, name: true, img: true, order: true}}} } } 
    }) as HobbyProjectFront[];
    //const prof: ProfesionalProjectFront[] = profesionals.map(x=> {id: 'id'} );
    console.log(profesionals);
    return [ ...profesionals.map(profesional => { return { ...profesional, description: profesional.description?.split("\\n") , technologies: profesional.technologies.map((technology: HobbyProjectsTechnologyFront) => technology.technology).sort((a: { order: any; }, b: { order: number; }) => Number(a.order) - Number(b.order))} } ) ]
    /*const result = profesionals.map((profesional) => {
        return { ...profesional, technologies: profesional.technologies.map((technology) => technology.technology) }
    });*/
};

export const addEntry = () => null;

export const findById = async (id: number) => {
    console.log("findById: " + id);
    const profesionalProject: HobbyProjectFront | null = await prisma.hobbyProject.findFirst({ 
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