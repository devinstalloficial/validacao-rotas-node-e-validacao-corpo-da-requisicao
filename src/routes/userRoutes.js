const { Router } = require('express');

const UserController = require('../controllers/UserController');

const userRoutes = new Router();

userRoutes.get('/user', UserController.index);

module.exports = userRoutes;