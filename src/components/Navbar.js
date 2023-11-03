
// import logo from '../logo.svg';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';// Import Link component

import '../Theme.css';

const Navbar= (props)=> {
  
  return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        
        <li className="nav-item">
        <a className="nav-link" href="/about">
                About
              </a>
        </li>
      </ul>

  <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    change theme
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><div className="form-check form-switch">
          
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={props.toggleTheme}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.theme}</label>
     </div></li>
    <li><div className="form-check form-switch">
          
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={props.toggleTheme}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.theme}</label>
     </div></li>
    <li><div className="form-check form-switch">
          
          <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={props.toggleTheme}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.theme}</label>
     </div></li>
  </ul>
</div>
      <div className="form-check form-switch">
          
         <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={props.toggleTheme}/>
         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.theme}</label>
    </div>
    </div>
  </div>
</nav>
    </>
  )
}
Navbar.propTypes={
  title: PropTypes.string.isRequired,
}
Navbar.defaultProps={
  title:"set title here",
}


export default Navbar
