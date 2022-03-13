const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 5000;

require('dotenv').config();

// Setting static content
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// End

// Setting templating enging
app.use(expressLayouts)
app.set('layout', './layouts/main-layout')
app.set('views', './src/views')
app.set('view engine', 'ejs')
// End

// Making Db connection 
require('./src/database/database.js')

// Routes
const allRouters = require('./src/routers/routes.js');
app.use('/', allRouters);

app.listen(port, () => console.log(`Listening to por ${port}`));


