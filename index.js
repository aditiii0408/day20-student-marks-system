const express = require("express");
const cors = require("cors");
const mysql2 = require("mysql2");
require("dotenv").config();


const app = express();
app.use(cors());
app.use(express.json());

const con = mysql2.createConnection({
  host:process.env.HOST,
  user: process.env.USER,
  password:process.env.PASSWORD,
  database:process.env.DATABASE

});

app.post("/ss", (req,res) => {
 
 let sql = "insert into Students values(?,?,?)";
 let data = [req.body.rno, req.body.name, req.body.marks];
 con.query(sql,data,(error,result) => {
   
  if(error)
    res.send(error);
  else
    res.send(result);

});

});

app.get("/gs", (req,res) => {
 
 let sql = "select * from Students";
 con.query(sql,(error,result) => {
   
  if(error)
    res.send(error);
  else
    res.send(result);

});

});

app.put("/us", (req,res) => {
 let sql = "update Students set Name=?, Marks=? where Rollno=?";
 let data = [req.body.name,req.body.marks,req.body.rno];
 con.query(sql,data,(error,result) => {
   
  if(error)
    res.send(error);
  else
    res.send(result);

});

});



app.delete("/ds", (req,res) => {
 
 let sql = "delete from Students where Rollno=?";
 let data = [req.body.rno];
 con.query(sql,data,(error,result) => {
   
  if(error)
    res.send(error);
  else
    res.send(result);

});

});

app.listen(9000, () => {console.log("ready to serve @9000");});