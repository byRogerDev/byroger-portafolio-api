import { personalprojects, ProfesionalProject, Technology } from "@prisma/client"

export type ProfesionalProjectFront = Pick<ProfesionalProject, 'id','name', 'img', 'description', { technologies: ProfesionalProjectsTechnologyFront[] }  >

export type ProfesionalProjectsTechnologyFront = Pick<ProfesionalProjectsTechnology, 'id','idProfesional', 'idTechnology',{ technology: Technology[] }  >

export type PersonalProjectFront = Pick<PersonalProject, 'id','name', 'img', 'description',{ technology: Technology[] }  >

export type PersonalProjectsTechnologyFront = Pick<PersonalProjectsTechnology, 'id','idProfesional', 'idTechnology',{ technology: Technology[] }  >

export type HobbyProjectFront = Pick<HobbyProject, 'id','name', 'img', 'description', { technologies: HobbyProjectsTechnologyFront[] }  >

export type HobbyProjectsTechnologyFront = Pick<HobbyProjectsTechnology, 'id','idHobby', 'idTechnology',{ technology: Technology[] }  >
