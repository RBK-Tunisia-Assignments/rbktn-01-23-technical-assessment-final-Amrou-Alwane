import React, { useState } from "react";
import "../App.css"
import "../index.scss";

const Onerecepie = ({e,updateRec,deleteRec}) => {
  const [show,setShow]=useState(false)
  
  const [name,setName]=useState(e.recepie_Name)
  const [cook,setCook]=useState(e.Cook_Time)
  const [prep,setPrep]=useState(e.Prep_Time)
  const [serves,setServes]=useState(e.Serves)
  const [category,setCategory]=useState(e.categorie)
  const [description,setDescription]=useState(e.recepie_Description)
  const[ingredients,setIngredients]=useState(e.recepie_Ingredients)
  const[img,setImg]=useState(e.recepie_Image)
  const rec={
    Cook_Time: cook,
    Prep_Time:prep,
    recepie_Name: name,
    Serves: serves,
    categorie: category,
    recepie_Image:img,
    recepie_Description: description,
    recepie_Ingredients:ingredients,
    users_user_Id: e.users_user_Id
    }
    const handleShow=()=>{
      setShow(!show)
    }
  const handleDelete=()=>{
    deleteRec(e.recepie_Id)
    console.log('deleted')
  }
  const handleUpdate=()=>{
    updateRec(e.recepie_Id,rec)
    setShow(!show)
    console.log('updated')
  }

  return (
    <div className="card-container" >

    <div className="card">
      <button className="delete" onClick={handleDelete}>delete</button>
      <button className="update" onClick={handleShow}>update </button>
      {show ?   <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name"defaultValue={e.recepie_Name} onChange={(e)=>setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" defaultValue={e.Cook_Time} onChange={(e)=>setCook(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time" defaultValue={e.Prep_Time} onChange={(e)=>setPrep(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves" defaultValue={e.Serves}  onChange={(e)=>setServes(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" defaultValue={e.categorie} onChange={(e)=>setCategory(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" defaultValue={e.recepie_Description} onChange={(e)=>setDescription(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" defaultValue={e.recepie_Ingredients} onChange={(e)=>setIngredients(e.target.value)}/>
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL"  defaultValue={e.recepie_Image}onChange={(e)=>setImg(e.target.value)} />
      </div>
      <button className="create-recipe-btn" onClick={handleUpdate} >Submit</button>
    </div>:<></>}

      <>
        <div className="header">
          <img
            className="img"
            src={e.recepie_Image}
            alt="food"
          />
        </div>
        <div className="text">
          <h1 className="food">{e.recepie_Name}</h1>
          <i> {e.Prep_Time}</i> <br />
          <i>{e.serves}</i>
        </div>
      </>
    </div>
  </div>
  );
};

export default Onerecepie;
