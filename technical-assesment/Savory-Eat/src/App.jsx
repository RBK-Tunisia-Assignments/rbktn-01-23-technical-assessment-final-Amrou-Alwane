//the default user to update and delete is {user_Id:1,username:'testuser',email:'test@test.com',password:'password}
import React ,{useEffect, useState}from "react";
import "./App.css";
import Home from "./components/Home.jsx";
import AllRecepies from "./components/AllRecipies.jsx"
import Add from "./components/Add.jsx"
import axios from 'axios'
function App() {
const [view,setView]=useState('Home')
const [data,setData]=useState([])
const [tracker,setTracker]=useState(false)
  let changeView = (view) => {
    setView(view);
  };
//Fetch Data from the API
const fetchData=()=>{
  axios.get("http://localhost:4000/api/recepie/")
  .then((res)=>{
    setData(res.data)
  })
  .catch((err)=>{console.log(err)})
}
//post Data to the API
const addRecapies=(recepie)=>{
  axios.post("http://localhost:4000/api/recepie/",recepie)
  .then((res)=>{ res.status(201)
    setTracker(!tracker)
           })
  .catch((err)=>{console.log(err)})
}
const updateRec=(id,rec)=>{
  axios.put(`http://localhost:4000/api/recepie/${id}`,rec)
  .then((res)=>{console.log(res)
    setTracker(!tracker)
    console.log("update ye amrou")
    })
  .catch((err)=>{console.log(err)})
}
const deleteRec=(id)=>{
  axios.delete(`http://localhost:4000/api/recepie/${id}`)
  .then((res)=>{ console.log(res)
    setTracker(!tracker)
    console.log('from parent')
           })
  .catch((err)=>{console.log(err)})
}

useEffect(()=>{
 fetchData()
},[tracker])


  return (
    <div className="App">
      <nav className="nav">
        <div
          className="nav-item is-active"
          active-color="orange"
          onClick={() => setView("Home")}
        >
          Home
        </div>

        <div
          className="nav-item"
          active-color="green"
          onClick={() => setView("Allrecepies")}
        >
          All Recipies
        </div>
        <div
          className="nav-item"
          active-color="red"
          onClick={() => setView("Addrecepie")}
        >
          Addrecepie
        </div>
        <div className="nav-item" active-color="red">
          <input type="text"  />
          <button>search</button>
        </div>
        <span className="nav-indicator"></span>
      </nav>
      {view === "Home" && <Home changeView={changeView}/>}
      {view === "Allrecepies" && <AllRecepies data={data} updateRec={updateRec} deleteRec={deleteRec} />}
      {view === "Addrecepie" && <Add addRecapies={addRecapies} />}
      <div></div>
    </div>
  );
}

export default App;
