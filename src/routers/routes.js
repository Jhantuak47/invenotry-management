const express = require('express')

const routers = express.Router()

/**
 * Include other routes
 */
// const currDirectory = __dirname;
// routes.forEach(route => routers.use(route, require(currDirectory + route)))
// routers.use('/recipe', require(currDirectory + '/recipe'));
/**
 * End
 */

// HOME ROUTE
routers.get('/', (req, res) => {
    console.log('welcome');
    res.send("Web app initialized!!");
})

module.exports = routers