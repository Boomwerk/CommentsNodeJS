
let bdd = require("../config/bdd")

class message{


 static create(content, cb){

        bdd.query("INSERT INTO message SET content = ?, created_at = ?", [content, new Date()], (err, result)=>{
            if(err) throw err;
             
            cb(result)
        });
 }

 static all(cb){
     bdd.query("SELECT * FROM message", (err, rows)=>{
         if (err) throw err;

         cb(rows)
     })
 }

}

module.exports = message;