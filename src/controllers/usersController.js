//Requiero el modelo de usuario
const {User} = include('models');

class UsersController {
    static async fetch (req, res, next) {
        try {
            const users = await User.find(req.query);
            res.send(users);
        }
        catch (error) {
            next(error);
        }
    }

    static async fetchOne (req, res, next) {
        try {
            const users = await User.findOne({id: req.params.id});
            res.send(users);
        }
        catch (error) {
            next(error);
        }
    }

    static async create(req, res, next) {
        try {
            const result = await Users.insertOne(req.body);
            res.send(result);
        }
        catch (error) {
            next(error);
        }
    }

    static async save(req, res, next) {
        try {
            const result = await Users.updateOne({id: req.params.id}, req.body);
            res.send(result);
        }
        catch (error) {
            next(error);
        }
    }

    static async delete(req, res, next) {
        try {
            const result = await Users.deleteOne(req.params.id);
            res.send(result);
        }
        catch (error) {
            next(error);
        }
    }
}

//Exporto el controlador
module.exports = UsersController;