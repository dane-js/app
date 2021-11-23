const AppController = require("./AppController")

module.exports = class HomeController extends AppController {
    
    async index(req, res) {
        return res.send('Hello World')
    }
}
