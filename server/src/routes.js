const AuthenticationController = require('./controllers/AuthenticationController')

const AuthenticationControllerPolicy = require('./validacija/AuthenticationControllerPolicy')
module.exports = (app) => {
    app.post('/register',
        //AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    app.post('/login',
        AuthenticationController.login)
}
