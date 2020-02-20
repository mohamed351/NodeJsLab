const express = require('express');
const path = require('path');
const EmployeesRouters = require('./routes/employee');
const pug = require("pug");
const app = express();
app.set("view engine","ejs")
app.use(EmployeesRouters);
app.listen(3000,()=> console.log("Now I am listening for port 3000"));



