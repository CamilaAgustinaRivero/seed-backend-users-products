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
}

//Exporto el controlador
module.exports = UsersController;