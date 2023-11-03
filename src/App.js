import React, {useState,useEffect} from 'react'
import './App.css';
import './Theme.css';
import Alert from './components/Alert'
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Import React Router components
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



import About from './components/About'
import TextForm from './components/TextForm';



function App() {
  const[theme,setTheme]=useState('dark');
  const[alert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
        }
      )
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const toggleTheme=()=>{
    if(theme==='light'){
      setTheme('dark');
      showAlert('Dark mode is activated','success')
    }
    else{
      setTheme('light')
      showAlert('Light mode is activated','success')
    }
  }
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return(
    // <Router>
    <>
    <Navbar  title="textUtils" theme={theme} toggleTheme={toggleTheme}/>
    <Alert alert={alert}/>
    <div className="container">
    {/* <Routes> */}
            {/* <Route path="/" element={/>}*/
            <TextForm headingLine="Enter a text to analyze" theme={theme} toggleTheme={toggleTheme} showAlert={showAlert}/>}  
            {/* <Route path="/about" element={/> */}
            <About  theme={theme} toggleTheme={toggleTheme}/>
          {/* </Routes> */}
    </div>
    
    
    <Footer/>
    </>
    // {/* </Router> */}
  )
}

export default App;
