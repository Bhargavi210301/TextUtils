import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

const showAlert=(message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setAlert(null);
  }, 1500);
}

const removeBodyClass=()=>{
  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-primary');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-secondary');
}
  const toggleMode=(cls)=>{
    removeBodyClass();
    document.body.classList.add('bg-'+cls);
    if(mode==="light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743";
      showAlert("Dark Mode has been enabled!","success");
      document.title="TextUtils-DarkMode";
      // setInterval(() => {
      //   document.title="TextUtils is Amazing!!";
      // }, 1500);
      // setInterval(() => {
      //   document.title="Install TextUtils Now!!";
      // }, 1000);
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white";
      showAlert("Light Mode has been enabled!","success");
      document.title="TextUtils-LightMode";
    }
    
  }

  return (
    <>
    <Router> 
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> set default props   */}
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}/>
        </Routes>
      </div>
    </Router>  
    </>
  );
}

export default App;

