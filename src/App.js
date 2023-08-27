import React, {useState} from 'react'
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import{Routes, Route}from "react-router-dom";



function App() {



  const [mode, setMode]=useState("light");
  const [alert, setAlert]=useState(null);

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },800);
  }
  const toggleMode= ()=>{
        if(mode==="light"){
            setMode("dark");
            document.body.style.backgroundColor="#042743";
            showAlert("Dark mode enabled","success");
            setToggle("checked");
            setColour("#042743");
        }
        else{
            setMode("light");
            document.body.style.backgroundColor="white";
            showAlert("Light mode enabled","success");
            setToggle("");
        }
    }

  const [colour,setColour]= useState();

  const [toggle, setToggle]= useState("");


  const bg_blue=()=>{
    setColour("#042743");
    document.body.style.backgroundColor="#042743";
    setMode("dark");
    setToggle("checked");
    showAlert("Dark mode enabled","success");

  }

const bg_red=()=>{
    setColour("#580000");
    document.body.style.backgroundColor="#580000";
    setMode("dark");
    setToggle("checked");
    showAlert("Dark mode enabled","success");

}

const bg_green=()=>{
    setColour("#003603");
    document.body.style.backgroundColor="#003603";
    setMode("dark");
    setToggle("checked");
    showAlert("Dark mode enabled","success");

}

  return (
    <>
    <Navbar title="Textutils" aboutText="About" mode={mode} toggleMode={toggleMode} bg_blue={bg_blue} bg_green={bg_green} bg_red={bg_red} toggle={toggle} />
    <Alert alert ={alert}/>
    <Routes>
      <Route path='/' element={<TextForm showAlert={showAlert} heading= "Enter the text to analyse" mode={mode} colour={colour}/>}/>
      <Route path='/about' element={<About mode={mode}/>}/>
    </Routes>
    </>

  );
}

export default App; 



