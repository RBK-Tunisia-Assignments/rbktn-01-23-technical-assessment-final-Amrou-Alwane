const express = require("express");
const router = express.Router();
const {getrecepie,addRecepie,updateRecepie,deleteRes}=require("../controller/recipiesController.js")
router.get("/",getrecepie);
router.post("/",addRecepie)
router.put('/:id',updateRecepie)
router.delete('/:id',deleteRes)
module.exports = router;
