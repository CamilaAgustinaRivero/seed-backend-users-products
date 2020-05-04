module.exports = {
    '/api/users': {
        get: {
            security: [],
            summary: 'Usuarios',
            parameters: [
                {
                    in: 'query',
                    name: 'code',
                    schema: {type: 'string'},
                    description: 'Codigo de usuario solicitado'
                }
            ],
            responses: {
                200: {
                    description: 'Lista de usuarios',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: {$ref: '#/components/schemas/Users'}
                            }
                        }
                    }       
                },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        },
        post: {
            security: [],
            requestBody: {
                description: 'Optional description in *Markdown*',
                required: true,
                content: {'application/json': {schema: {$ref: '#/components/schemas/Users'}}}
            },
            responses: {
                200: {
                    description: 'Lista de usuarios',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}
                            }
                        }
                    }       
                },
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        }
    },
    '/api/users/{id}': {
        get: {
            security: [],
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    required: true,
                    schema: {
                        type: 'string',
                        format: 'uuid'
                    },
                    description: 'ID de usuario solicitado'
                }
            ],
            responses: {
                200: {
                    description: 'Datos de una persona',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Users'}}}
                },       
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        },
        put: {
            security: [],
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    required: true,
                    schema: {
                        type: 'string',
                        format: 'uuid'
                    },
                    description: 'ID de usuario solicitado'
                }
            ],
            requestBody: {
                description: 'Optional description in *Markdown*',
                required: true,
                content: {'application/json': {schema: {$ref: '#/components/schemas/Users'}}}
            },
            responses: {
                200: {
                    description: 'Modifica usuarios',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'object',
                                properties: {}
                            }
                        }
                    }       
                },    
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        },
        delete: {
            security: [],
            parameters: [
                {
                    in: 'path',
                    name: 'id',
                    required: true,
                    schema: {
                        type: 'string',
                        format: 'uuid'
                    },
                    description: 'ID de usuario solicitado'
                }
            ],
            responses: {
                200: {
                    description: 'Borra usuarios',
                    content: {'application/json': {schema: {
                        type: 'object',
                        properties: {}
                    }}}
                },       
                default: {
                    description: 'Error',
                    content: {'application/json': {schema: {$ref: '#/components/schemas/Error'}}}
                }
            }
        }
    }
};