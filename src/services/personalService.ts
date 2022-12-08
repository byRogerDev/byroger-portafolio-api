import { PrismaClient, Technology } from '@prisma/client';
import { PersonalProjectFront, PersonalProjectsTechnologyFront } from '../type';

const prisma = new PrismaClient();

export const getEntries = async () => {
    console.log("getEntries");
    const personals: PersonalProjectFront []  = await prisma.personalProject.findMany({
        include: {  
            gallery: true, 
            technologies: { 
                include: { 
                    technology: { 
                        
                        select: { id: true, name: true, img: true, order: true}
                    }
                } 
            } 
        } 
    }) as PersonalProjectFront[];
    //const prof: ProfesionalProjectFront[] = profesionals.map(x=> {id: 'id'} );
    console.log(personals);
    return [ ...personals.map(personal => { return { ...personal, description: personal.description?.split("\\n") , technologies: personal.technologies.map((technology: PersonalProjectsTechnologyFront) => technology.technology).sort((a: { order: any; }, b: { order: number; }) => Number(a.order) - Number(b.order))} } ) ]
    /*const result = profesionals.map((profesional) => {
        return { ...profesional, technologies: profesional.technologies.map((technology) => technology.technology) }
    });*/
};

export const addEntry = () => null;

export const findById = async (id: number) => {
    console.log("findById: " + id);
    const personalProject: PersonalProjectFront | null = await prisma.personalProject.findFirst({ 
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
        }        
    });

    if(personalProject){
        //const tech : Technology[] = profesionalProject.technologies();
        //return profesionalProject;
        const orderTech: Technology[] = personalProject.technologies.map((technology: { technology: any; })  => technology.technology);

        return { ...personalProject, description: personalProject.description?.split("\\n")  , technologies: orderTech.sort((a, b) => Number(a.order) - Number(b.order)) };
    }
    return null;
};