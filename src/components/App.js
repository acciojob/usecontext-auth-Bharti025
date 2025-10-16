
import React,{useState,useContext,createContext} from "react";
import './../styles/App.css';

const AuthContext = createContext();

const App = () => {
  const [authText,setAuthText]=useState("you are not authenticated");
  const handleClick=()=>{
    setAuthText("You are now authenticated, you can proceed")
  }
  return (
   <AuthContext.Provider value={authText}>
     <h1>Click on checkbox to get authenticated</h1>
     <p>{authText}</p>
     <input type="checkbox" id="authCheckbox" onClick={handleClick}/>
     <label htmlFor="authCheckbox">I'm not a robot</label>
   </AuthContext.Provider>
  )
}

export default App
