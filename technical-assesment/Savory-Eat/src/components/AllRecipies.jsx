import React from "react";
import "../index.scss";
import Onerecepie from "./OneRecipie";
const AllRecepies = ({data,updateRec,deleteRec}) => {

  return (
    <>
    {data.map((e,i)=>(
    <Onerecepie e={e} key={i} updateRec={updateRec} deleteRec={deleteRec} />
    ))}
  </>
    
  );
};

export default AllRecepies;
