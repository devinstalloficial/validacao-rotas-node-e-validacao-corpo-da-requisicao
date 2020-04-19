const { Router } = require('express');
const userAlth = require('../middlewares/userAlth');
const UserController = require('../controllers/UserController');

const userRoutes = new Router();
userRoutes.use(userAlth);

userRoutes.get('/user', UserController.index);

module.exports = userRoutes;