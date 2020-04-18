class UserController {
  index(req, res) {
    return res.status(200).json({ ok: 'bem vindo user' });
  }
}

module.exports = new UserController();
