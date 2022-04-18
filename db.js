// var mysql = require('mysql');
// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "Shivi@123",

// });

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//   });
  




// con.query("CREATE DATABASE regis_table", function (err, result) {
//     if (err){
//     console.log("Database not created");
//     }else{
//       console.log("Database created")
//     }
//   });




const knex=require("knex")({

    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'Shivi@123',
        database: 'regis_table'
    }
  })
    



knex.schema.createTable('knex_table', function (table) {
  table.increments("id");
  table.string('FirstName',255);
  table.string("LastName",255);
  table.string("Email",255).unique()
  // table.integer("Phone",10).unique()
  table.string("Password",255);
  table.string("ConfirmPassword",255);
  table.integer("EnterYourAge",255);
}).then(() => console.log("table created"))
.catch((err) => { console.log("alredy created ")})




  
  const data = [
    { FirstName: 'Audi', LastName:"singh",Email:"shivi@gmail.com",Password:"shivi@123",ConfirmPassword:"shivi@123",EnterYourAge:18 },
  ]
  

knex('knex_table').insert(data).then(() => console.log("data inserted"))
  .catch((err) => { console.log(err); throw err })




  
    
        
  
  
