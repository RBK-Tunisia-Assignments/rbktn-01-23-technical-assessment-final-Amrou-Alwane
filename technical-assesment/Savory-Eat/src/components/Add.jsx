import React, { useState } from "react";
import "../App.css";

const Add = ({addRecapies}) => {
 
  const [name,setName]=useState("")
  const [cook,setCook]=useState("")
  const [prep,setPrep]=useState("")
  const [serves,setServes]=useState("")
  const [category,setCategory]=useState("")
  const [description,setDescription]=useState("")
  const[ingredients,setIngredients]=useState("")
  const[img,setImg]=useState("")
  const[id,setId]=useState("")
  const handleAdd=()=>{
    const rec={
    Cook_Time: cook,
    Prep_Time:prep,
    recepie_Name: name,
    Serves: serves,
    categorie: category,
    recepie_Image:img,
    recepie_Description: description,
    recepie_Ingredients:ingredients,
    users_user_Id: id
    }
    addRecapies(rec)
  }
  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" onChange={(e)=>setCook(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time" onChange={(e)=>setPrep(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves" onChange={(e)=>setServes(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" onChange={(e)=>setCategory(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" onChange={(e)=>setDescription(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" onChange={(e)=>setIngredients(e.target.value)}/>
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL" onChange={(e)=>setImg(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Id:</label>
        <input type="text" placeholder="your id" onChange={(e)=>setId(e.target.value)} />
      </div>
      <button className="create-recipe-btn" onClick={handleAdd} >Create Recipe</button>
    </div>
  );
};
export default Add;
