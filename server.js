require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const app =  express()
const routeRefeshToken = require('./app/routes/refresh.route');
const routeAuth = require("./app/routes/auth.route.js");
const routeUsers = require("./app/routes/users.route.js");
const port = process.env.PORT || 3000
app.use(session({
   secret: 'keyboard cat',
  resave: true,
   saveUninitialized: true
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) => {
     res.json({messege:'Wellcome API'});
});

app.use('/api/auth',routeAuth);
app.use('/api/users',routeUsers);
app.use('/api/refresh-token',routeRefeshToken)

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
