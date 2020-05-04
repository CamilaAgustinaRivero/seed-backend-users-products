module.exports = {
    '/api/products': {
        get: {
            security: [],
            summary: 'Productos',
            parameters: [
                {
                    in: 'query',
                    name: 'code',
                    schema: {type: 'string'},
                    description: 'Codigo de producto solicitado'
                }
            ],
            responses: {
                200: {
                    description: 'Lista de productos',
                    content: {
                        'application/json': {
                            schema: {
                                type: 'array',
                                items: {
                                    type: 'object',
                                    properties: {
                                        id: {type: 'string'},
                                        name: {type: 'string'},
                                        price: {type: 'string'},
                                        stock: {type: 'string'}
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