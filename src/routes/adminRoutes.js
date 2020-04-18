const { Router } = require('express');

const AdminController = require('../controllers/AdminController');

const adminRoutes = new Router();

adminRoutes.get('/admin', AdminController.index);

module.exports = adminRoutes;