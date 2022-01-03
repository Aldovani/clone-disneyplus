const express = require('express')
const UserControles = require('./src/controllers/UsersControllers')


const routes = express.Router()



routes.post('/sing-up', UserControles.singUp)
routes.post('/login', UserControles.login)


module.exports = routes