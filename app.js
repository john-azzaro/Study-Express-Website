'use strict';
                                                                        /* First, load modules you want to use in your application:*/
const express = require('express');                                         /* load the express module and store as express */          
const path = require('path');                                               /* load the path module (note: since this is a root module, you dont need to list in dependencies) */
const bodyParser = require('body-parser');                                  /* load body-parser module is middleware that parses incoming request bodies in a middleware before handlers (available under req.body property)*/
const nodemailer = require('nodemailer');                                   /* load nodemailer to allow easy email sending */
                                                                        /* Second, initialize the express app */
const app = express();                                                      /* initialize app by calling express and storing as "app" */
                                                                        /* Third, set up your middleware */
app.use(bodyParser.json())                                                  /* bodyparser middleware that can parse json*/
app.use(bodyParser.urlencoded({extended: false}));                          /* bodyparser middleware that can parse url */

app.get('/', function(req, res) {                                       /* GET request that sends back a response of "Hello there friend!" when the client makes a request to the root address */
    res.send('Hello there friend!');
});

app.listen(3000, function() {                                           /* listen on port 3000 */
    console.log('listening on port 3000...');                               /* log that the server is listenting on port 3000. */
});



// https://github.com/expressjs/body-parser#bodyparserurlencodedoptions -- body parser documentation