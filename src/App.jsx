import { useState } from "react"
import About from "./About.jsx"
import "./App.css"
import Navbar from "./Navbar.jsx"
import TextForm from "./TextForm.jsx"
import Alert from "./Alert.jsx"




function App() {

  
  const [mode, setMode] = useState("light"); //Wether dark mode is enabled or not

  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{setAlert(null)},1500)
    
  }

  

  const toggleMode = ()=>{
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "Success");
      document.title = "TextUtils - Dark Mode"

    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success");
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
    <>
      {/* <Navbar title = "TextUtlis" aboutText = "About TextUtils"/>*/}
      {/*<Navbar/>*/}
      
      <Navbar title = "TextUtils" aboutText = "About" mode = {mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>
      <div className = "container my-3">
        
          <TextForm  showAlert={showAlert} heading = "Enter the Text to Analyze Below" mode = {mode}/>
        
       
        {/*<About/>*/}
      </div>
      
      
    </>
  );
}

export default App;
