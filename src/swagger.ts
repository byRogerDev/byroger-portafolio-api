import { findByIdTechnnologies, getTechnnologies } from "./openApi/technologies.swagger";

export const swaggerDocument = {
    openapi: '3.0.1',
    info: {
        version: '1.0.0',
        title: 'ByRoger APIs Document',
        description: 'Documentación swagger de la API',
        termsOfService: '',
        contact: {
            name: 'Roger Orellana Castells',
            email: 'roy.ore@gmail.com',
            url: 'https://byroger.es/'
        },
        license: {
            name: 'Apache 2.0',
            url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
        }
    },
    
    servers: [
        {
            "url": "{env}{port}",
            "description": "The production API server",
            "variables": {
                "env": {
                    "enum": [
                        "http://localhost",
                        "https://byroger.es"
                    ],
                    "default": "http://localhost",
                    "description": "DEV Environment"
                },
                "port": {
                    "enum": [
                        ":3001",
                        ""
                    ],
                    "default": ":3001"
                }
            }
        }
    ],
    components: {
        schemas: {
            
                Technology: {
                    type: "object",
                    description: "Objeto tecnologia",
                    properties: {
                        id: {
                            type: 'number',
                            description: 'Id Tech'
                        },
                        name: {
                            type: 'string',
                            description: 'Name Tech'
                        },
                        img: {
                            type: 'string',
                            description: 'Img Tech'
                        },
                        url: {
                            type: 'string',
                            description: 'Url Tech'
                        },
                        primaryColor: {
                            type: 'string',
                            description: 'primaryColor Tech'
                        },
                        secundaryColor: {
                            type: 'string',
                            description: 'secundaryColor Tech'
                        },
                        description: {
                            type: 'string',
                            description: 'description Tech'
                        },
                        order: {
                            type: 'integer',
                            description: 'Order Tech'
                        }
                    }
                }                
            }
        
    },
    tags: [
        {
            name: 'techonologies'
        }
    ],
    paths: {
        "/technologies": {
            summary: "Devuelve listado de tecnologias",
            "get": getTechnnologies
        },
        "/technologies/{id}": {
            summary: "Devuelve una tecnologia",
            "get": findByIdTechnnologies,
            "parameters": [{
                in: "path",
                name: "id",
                schema: {
                    type: "integer"
                },
                required: true,
                description: "Id tecnologia a devolver",
                example: 14
            }]
        }
    }
}