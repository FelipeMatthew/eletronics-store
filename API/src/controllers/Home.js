class HomeController {
  index(req, res) {
    res.json({
      message: 'Welcome to the homepage!',
    });
  }
}

export default new HomeController();
