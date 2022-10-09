export const getTechnnologies = {
    tags: ['techonologies'],
    description: "Returns all techonologies",
    operationId: 'getEntries',
    responses: {
        "200": {          
            description: "List Techs.",
            "content": {
                "application/json": {
                    schema: {
                        type: "array",
                        items: {
                            $ref: "#/components/schemas/Technology"                            
                        },
                        example: {   
                            id: 14,
                            name: "TS",
                            img: "icons8-typescript.svg",
                            url: "type-script",
                            primaryColor: "#000",
                            secundaryColor: "#FFF",
                            description: "Description",
                            order: 13
                        }
                        
                    }
                }
            }
        }
    }
} 


export const findByIdTechnnologies = {
    tags: ['techonologies'],
    description: "Returns techonology by id",
    operationId: 'findById',
    responses: {
        "200": {          
            description: "Get Tech.",
            "content": {
                "application/json": {
                    schema: {
                        type: "#/components/schemas/Technology",
                        example: {   
                            id: 14,
                            name: "TS",
                            img: "icons8-typescript.svg",
                            url: "type-script",
                            primaryColor: "#000",
                            secundaryColor: "#FFF",
                            description: "Description",
                            order: 13
                        }
                        
                    }
                }
            }
        }
    }
} 