import mysql from "mysql"
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wazar-blog'
  });
  db.connect((err)=>{
    if(err){
        console.log("cannot connect to Database");
    }else{
        console.log("Database Connected");
    }
  })
  export default db