// const routes = require('./routes');
const http = require("http");
const express = require('express');
const bodyParser = require("body-parser");
const path = require('path');

const app = express();

app.set('view engine','pug');
app.set('views','views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public'))); //to access (read) the files in public directory (css)
// app.use((req, res, next)=> {
//     console.log('In the mddleware!');
//     next(); //Allows the request to continue to the next middleware in line
// });

app.use('/admin',adminData.routes); //only routes starting with /admin will go into the adminRoutes file
app.use(shopRoutes);


app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404',{pageTitle: 'Page Not Found'})
});

// const server = http.createServer(app);

//console.log(routes.someText);
// const server = http.createServer(routes.handler);

app.listen(3001);
