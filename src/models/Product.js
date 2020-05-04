const ModelCreate = include('helpers/ModelCreate')
const tableName = 'products';
const name = 'Product';

const selectableProps = [
    'id',
    'name',
    'price',
    'stock',
    'code',
    'iso2',
    'deleted'
];

//Creo el modelo de producto
class Product extends ModelCreate {

    constructor(props){
        super({...props, tableName, name, selectableProps});
    }
}

module.exports = (knex) => new Product({ knex });

