class AdminController {
  index(req, res) {
    return res.status(200).json({ ok: 'bem vindo admin' });
  }
}

module.exports = new AdminController();
