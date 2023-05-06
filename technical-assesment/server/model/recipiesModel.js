const connection = require("../database-mysql/index");
//uncomment this line if you want to use promises
// const  connection  = require("../database-mysql/index").promise();

const getAll = (callback) => {
    const sql='SELECT * FROM recepie'
    connection.query(sql,(err,rslt)=>{
      callback(err,rslt)
    })
}
const getOne = (callback,name) => {
  const sql=`SELECT * FROM recepie WHERE recepie_Name="${name}"`
  connection.query(sql,(err,rslt)=>{
    callback(err,rslt)
  })
}

const add=(callback,recepie)=>{
    const sql ="INSERT INTO recepie SET ?"
    connection.query(sql,recepie,(err,rslt)=>{
        callback(err,rslt)
      })
}
const update=(callback,id,recepie)=>{
    const sql =`UPDATE recepie SET ? WHERE recepie_Id=${id} `
    connection.query(sql,recepie,(err,rslt)=>{
        callback(err,rslt)
      })
}
const deleteRecepie =(callback,id)=>{
    const sql =`DELETE FROM recepie where recepie_Id=${id}`
    connection.query(sql,(err,rslt)=>{
        callback(err,rslt)
      })
}


module.exports = { getAll,getOne,add,update,deleteRecepie};
