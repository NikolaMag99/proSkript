const AuthenticationController = require('./controllers/AuthenticationController')
const AuthenticationControllerPolicy = require('./validacija/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
module.exports = (app) => {
    app.post('/register',
        AuthenticationControllerPolicy.register,
        AuthenticationController.register)

    app.post('/login',
        AuthenticationController.login)

    app.get('/songs',
        SongsController.index)

    app.post('/songs',
        SongsController.post)

    app.get('/songs/:songId',
        SongsController.show)

    app.put('/songs/:songId',
        SongsController.put)

    app.delete('/songs/:songId',
        SongsController.delete)
}
