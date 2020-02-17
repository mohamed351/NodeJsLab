const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

router.use(bodyParser.json());




var element =[
    {id:1,name:"Mohamed",salary:3000},
    {id:2,name:"Sayed",salary:5000},
    {id:3,name:"Ahmed Magdy",salary:9000},
    {id:4,name:"Khalid",salary:7000},
    {id:5,name:"Ali",salary:3200}
];

router.get("/api/employees",(request, response)=>{
    response.send(element);
});

router.get("/api/employees/:id",(request, response)=>{
    var emp = element.find(a=>a.id == request.params.id);
    if(emp)
    {
        response.send(emp);
    }
    else
    {
        response.status(404).send("The Employees is not found");
    }


});

router.post("/api/employees/",(req,res)=>{
   if(req.body.id && req.body.name && req.body.salary){
       
     let emp = {
        id: req.body.id,
        name:req.body.name,
        salary:req.body.salary

    };
    element.push(emp);
    res.send(emp);

   }
   res.status(402).send("Bad Request...");
    
});

router.put("/api/employees/",(req,res)=>{

  if(req.body.id && req.body.name && req.body.salary)
  {
      let empIndex =   element.findIndex(a=>a.id == req.body.id);
      if(empIndex ==-1)
      {
          res.status(404).send("Not Found 404");
      }
      element[empIndex].id = req.body.id;
      element[empIndex].name = req.body.name;
      element[empIndex].salary = req.body.salary;
       
      res.status(200).send(element[empIndex]);
     
  }
  else
  {
       res.status(402).send("Bad Request");
  }





});

router.delete("/api/employees/",(req,res)=>{
    if(req.body.id && req.body.name && req.body.salary)
    {
        let empIndex = element.findIndex(a=>a.id == req.id);
        if(empIndex ==-1)
        {
            res.status(404).send("Not found Request");
        }
        var emp = element[empIndex];
        element.splice(empIndex,1);
        res.send(emp);

    }
     res.status(402).send("Bad Request 402");
});

module.exports = router;