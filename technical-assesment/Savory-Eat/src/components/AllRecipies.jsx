import React from "react";
import "../index.scss";
import Onerecepie from "./OneRecipie";
const AllRecepies = ({data,updateRec,deleteRec,search,searchedData,setSearch}) => {
  var respies=data
  if(search){
    respies=searchedData
  }
  return (
    <>
    {respies.map((e,i)=>(
    <Onerecepie e={e} key={i} updateRec={updateRec} deleteRec={deleteRec} />
    ))}
  </>
    
  );
};

export default AllRecepies;
