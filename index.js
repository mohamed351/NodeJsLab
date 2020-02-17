const express = require('express');
const EmployeesRouters = require('./routes/employee');
const app = express();

app.use(EmployeesRouters);
app.listen(3000,()=> console.log("Now I am listening for port 3000"));



