const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const userToken = require('../config/userToken');

module.exports = async (req, res, next) => {
  try {
    const autHeader = req.headers.authorization;
    if (!autHeader) {
      return res
        .status(401)
        .json({ error: 'Token not found' });
    }

    const [, token] = autHeader.split(' ');

    await promisify(jwt.verify)(token, userToken.secret);

    return next();
  } catch (error) {
    // se for
    return res.status(401).json({ error: error.message });
  }
};