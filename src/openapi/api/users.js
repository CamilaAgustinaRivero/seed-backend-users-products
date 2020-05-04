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
                                items: {
                                    type: 'object',
                                    properties: {
                                        id: {type: 'string'},
                                        first_name: {type: 'string'},
                                        last_name: {type: 'string'},
                                        username: {type: 'string'},
                                        email: {type: 'string'},
                                        password: {type: 'string'}
                                    }
                                }
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
    }
};