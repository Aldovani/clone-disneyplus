const express = require('express')
const UserControles = require('./src/controllers/UsersControllers')


const routes = express.Router()



routes.post('/sing-up', UserControles.registerUser)
routes.post('/login', UserControles.loginUser)
routes.post('/user', UserControles.checkUser)


module.exports = routes