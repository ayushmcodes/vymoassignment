const mysql=require('mysql')
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
});

con.connect((err)=>{
    if(err){
        console.log("Cant connect")
    }else{
        console.log("Connected")
    }
})

module.exports=con;