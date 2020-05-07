const ModelCreate = include('helpers/ModelCreate')
const tableName = 'users';
const name = 'User';

const selectableProps = [
    'id',
    'first_name',
    'last_name',
    'username', 
    'email',
    'password',
    'avatar',
    'code',
    'iso2',
    'deleted'
];

//Creo el modelo de usuario
class User extends ModelCreate {

    constructor(props){
        super({...props, tableName, name, selectableProps});
    }
}

module.exports = (knex) => new User({ knex });