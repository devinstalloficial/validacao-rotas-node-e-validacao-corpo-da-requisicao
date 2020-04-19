const { Router } = require('express');
const adminAlth = require('../middlewares/adminAlth');
const AdminController = require('../controllers/AdminController');

const adminRoutes = new Router();

adminRoutes.use(adminAlth);
adminRoutes.get('/admin', AdminController.index);

module.exports = adminRoutes;