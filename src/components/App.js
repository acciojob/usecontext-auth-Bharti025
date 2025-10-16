
import React,{useState,useContext,createContext} from "react";
import './../styles/App.css';

const AuthContext = createContext();

const App = () => {
  const [user,setUser]=useState("You are not authenticated");
  const handleClick=()=>{
    setUser("You are now authenticated, you can proceed")
  }
  return (
   <AuthContext.Provider value={user}>
     <h1>Click on checkbox to get authenticated</h1>
     <p>{user}</p>
     <input type="checkbox" id="authCheckbox" onClick={handleClick}/>
     <label htmlFor="authCheckbox">I'm not a robot</label>
   </AuthContext.Provider>
  )
}

export default App
