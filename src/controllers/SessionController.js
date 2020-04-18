const jwt = require('jsonwebtoken');

const adminToken = require('../config/adminToken');
const userToken = require('../config/userToken');

class SessionController {
  index(req, res) {
    let { tipo } = req.body;

    if (tipo = 'admin') {
      return res.status(200).json({
        token: jwt.sign({ tipo }, adminToken.secret, {
          expiresIn: adminToken.expiresIn,
        }),
      });
    }

    if (tipo = 'user') {
      return res.status(200).json({
        token: jwt.sign({ tipo }, userToken.secret, {
          expiresIn: userToken.expiresIn,
        }),
      });
    }
  }
}

module.exports = new SessionController();
