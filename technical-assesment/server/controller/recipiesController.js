const { getAll,getOne ,add,update,deleteRecepie}=require("../model/recipiesModel")
const getrecepie = (req, res) => {
  const cb=(err,rslt)=>{
    if(err) console.log(err)
    else res.send(rslt)
  }
  getAll(cb)
};
const getOnerecepie = (req, res) => {
  const cb=(err,rslt)=>{
    if(err) console.log(err)
    else res.send(rslt)
  }
  getOne(cb,req.params.name)
};
const addRecepie=(req,res)=>{
  const cb=(err,rslt)=>{
    if(err) console.log(err)
    else res.send(rslt)
  }
  add(cb,req.body)
}
const updateRecepie=(req,res)=>{
  const cb=(err,rslt)=>{
    if(err) console.log(err)
    else res.send(rslt)
  }
  update(cb,req.params.id,req.body)
}
const deleteRes=(req,res)=>{
  console.log(req.params.id,"from controller")
  const cb=(err,rslt)=>{
    if(err) console.log(err)
    else res.send(rslt)
  }
  deleteRecepie(cb,req.params.id)
}


module.exports = {
  getrecepie,
  getOnerecepie ,
  addRecepie,
  updateRecepie,
  deleteRes
};
