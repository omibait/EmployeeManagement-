const express = require('express');
const path =require('path');

const app=express();
const pool = require("./db");
const { query } = require('./db');
var bodyParser = require('body-parser')


app.use(express.json());

app.use(bodyParser.json()); //body parser which will parser jason type req/res body

//header settings so that cors error will not trigger

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
    });

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });



//listning port
app.listen(5000,() =>{
    console.log("Server Listening NOW");
})


// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'file.html'));

// });


app.get('/',(req,res)=>{
    res.send("API Running on port 5000");

});


// Details required at time of login for user
app.post('/data',async(req,res)=>{
    try {
        
        var email  = req.body.email;    
        var password =req.body.password;

        const todo=await pool.query("SELECT * FROM users where email=$1 and password=$2",[email,password]);
        if (todo.rowCount == 1){ 
            res.json(todo.rows);
        }
        else{
            res.json("Error while getting login credentials");
        }
        
    } catch (err) {
        console.error(err.message);
        
    }
});

//Returns the list of employees for admin account
app.get('/list',async(req,res)=>{
    try {
        const alldata=await pool.query("SELECT * FROM userinfo order by id");
        res.json(alldata.rows);

    } catch (err) {
        console.error(err.message);
    }
});


//Return details of employee for admin account

app.post('/details',async(req,res)=>{
    try {
        
        var email  = req.body.email;    
        const todo=await pool.query("SELECT * FROM userinfo where email=$1",[email]);
        console.log(todo.rowCount);
        if (todo.rowCount == 1){ 
            res.json(todo.rows);
            console.log(todo.rows);
        }
        else{
            res.json("Error while getting user deatils");
        }
        
    } catch (err) {
        console.error(err.message);
        
    }
});

//Search data in database

app.post('/search',async(req,res)=>{
    try {
        
        var val  = req.body.val;    
        const todo=await pool.query("SELECT * FROM userinfo where firstname=$1",[val]);
        console.log(todo.rowCount);
        if (todo.rowCount !=0 ){ 
            res.json(todo.rows);
            console.log("search success");
        }
        else{
            res.json("No records found");
        }
        
    } catch (err) {
        console.error(err.message);
        
    }
});


//sorting of list for admin account


app.post('/sort',async(req,res)=>{
    try {
        var val  = req.body.val;
        if(val=='id'){
            const alldata=await pool.query("SELECT * FROM userinfo order by id");
            res.json(alldata.rows);    
        }
        if(val=='-id'){
            const alldata=await pool.query("SELECT * FROM userinfo order by id DESC");
            res.json(alldata.rows);    
        }
        if(val=='firstname'){
            const alldata=await pool.query("SELECT * FROM userinfo order by firstname");
            res.json(alldata.rows);    
        }
        if(val=='-firstname'){
            const alldata=await pool.query("SELECT * FROM userinfo order by firstname DESC");
            res.json(alldata.rows);    
        }
        if(val=='department'){
            const alldata=await pool.query("SELECT * FROM userinfo order by department");
            res.json(alldata.rows);    
        }
        
    } catch (err) {
        console.error(err.message);
        
    }
});



//set data

// app.put("/data/:id",async(req,res)=>{
// try {
//     const{id}  = req.params;
//     var name= req.body.name;
//     const update = await pool.query("UPDATE data SET name=$1 where id=$2",[name,id]);
//     res.json("data is updated")
// } catch (err) {
//     console.error(err.message);
// }
// });

//del data

// app.delete("/data/:id",async(req,res)=>{
//     try {
//         const { id } = req.params;
//         const del=await pool.query("DELETE FROM data WHERE id=$1",[id]);
//         res.json("data is deleted");
        
//     } catch (err) {
//         console.error(err.message);
        
//     }
// });