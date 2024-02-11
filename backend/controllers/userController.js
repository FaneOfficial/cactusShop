const ApiError = require('../error/ApiError')

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {
        
    }

    async auth(req, res, next) {
        const param = req.query
        if (!id) {
            next(ApiError.badRequest('Не задан ID товара'));
        }
        res.json(param.id)
    }
}

module.exports = new UserController();