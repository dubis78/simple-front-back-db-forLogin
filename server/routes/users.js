const express = require('express');
const router = express.Router();

const mysqlConnection  = require('../db/db');


router.post('/register/',(req,res)=>{
  const {userEmail,password}=req.body;
  //const abreviatura = req.body.mod
  //const correo = req.dody.userEmail
  mysqlConnection.query(`INSERT INTO users (correo, contrasena) VALUES ('${userEmail}', '${password}')`,(err,rows,fields)=>{
    if(!err){
      res.json({message: "Usuario registrado"});
      
    }
    else{
      res.json({message: "Usuario no registrado"});
    }
  });
});

router.post('/login/',(req,res)=>{
  const {userEmail,password}=req.body;
  //const abreviatura = req.body.mod
  console.log(userEmail,password)
  mysqlConnection.query(`SELECT * FROM users WHERE correo='${userEmail}' AND contrasena='${password}'`,(err,rows,fields)=>{
    if (err) {
      res.json({ message:`Error`});
      return console.log(err.message);
    }
    if(rows.length>0){
      res.json({ message:`Bienvenido`});
    }
    else{
      res.json({ message:`Correo/contraseña errada, por favor verifique la info ingresada` });
    }
  });
});



module.exports =router