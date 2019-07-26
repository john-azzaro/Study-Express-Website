'use strict';
                                                                        /* First, load modules you want to use in your application:*/
const express = require('express');                                         /* load the express module and store as express */          
const path = require('path');                                               /* load the path module (note: since this is a root module, you dont need to list in dependencies) */
const bodyParser = require('body-parser');                                  /* load body-parser module is middleware that parses incoming request bodies in a middleware before handlers (available under req.body property)*/
const nodemailer = require('nodemailer');                                   /* load nodemailer to allow easy email sending */
                                                                        /* Second, initialize the express app */
const app = express();                                                      /* initialize app by calling express and storing as "app" */

                                                                        /* Fourth, setup your view engine to view static templates.  This will set your app views folder to something like "/users/project/myApp/views" */
// app.set('views', path.join(__dirname, 'views'));                           /* This tells pug where the template files will be. and we pass 'views' as the first param and second param use path.join (normalize al args into a path string) is the location (directory name is "views") */       
// app.set('view engine', 'pug')                                           /* IF you would like to use the pug templating engine, set this and in app.get, use 'index'*/

app.use(express.static(path.join(__dirname + '/public')));              /* IF you would like to use static HTML files, you only need to set this and in app.get, use index.html*/
                                                                        /* Third, set up your middleware with app.use.  app.use applies the specified middleware to the main app stack in the order they are listed A->B->C */
app.use(bodyParser.json())                                                  /* bodyparser middleware that can parse json*/
app.use(bodyParser.urlencoded({extended: false}));                          /* bodyparser middleware that can parse url */



// app.get('/', function(req, res) {                                       /* GET request that sends back a response for the main page */
//     res.render('index');                                                   /* NOTE: Use specific routes like this if you are using pug via views folder. However, */
// });                                                                        /* because we are using express.static middleware to server assets from /public, we dont need*/
                                                                              /* to use individual routes like this because the app knows to look INSIDE /public folder./ */

app.listen(process.env.PORT || 3000, function() {
    console.log(`Your app is listening on port ${process.env.PORT || 3000}...`);     /* app.listen commands the server to listen for client requests on port 3000 and log when it begins listening*/
});                                                                                      /* log that the server is listenting on port 3000. */
    