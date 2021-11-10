const Kernel = require('dane.js/Kernel')
const path = require('./config/path')

const app = new Kernel(path)
app.init()