

import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'




function App() {

  const [mode, setDarkMode] = useState('light');
  const [btn, setBtn] = useState('Enable Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) => {

    setAlert({
      
      msg : message,
      type : type

    });

    setTimeout(() => {

      setAlert(null);
      
    }, 2000);

  }

  const toggleMode = () => {

    if(mode === 'light'){

      setDarkMode('dark');
      document.body.style.backgroundColor = '#042743';
      setBtn("Enable Light Mode");
      showAlert("Dark Mode is been Enabled" , "success");
      document.title = "Words Tool 🛠️ - Dark Mode";

      // setInterval(() => {

      //   document.title = "TextUtils is Amazing";
        
      // }, 2000);

    //   setInterval(() => {

    //     document.title = "Install TextUtils";
        
    // }, 1500);
      
    }
    else{
      
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      setBtn("Enable Dark Mode")
      showAlert("Light Mode is been Enabled" , "success");
      document.title = "Words Tool 🛠️ - Light Mode"

    }
    
  }
 
  return (
    <>


   
      <Navbar title="Words Tools 🛠️" search="Search" home="Home" about="About" mode={mode} toggleMode={toggleMode} btn={btn} />
      <Alert alert={alert} />



      <TextForm showAlert={showAlert} heading="Words Tool 🛠️" mode={mode}  />


          

    </>
  );
}

export default App
