import React from 'react'
import PropTypes from 'prop-types'
import { Link} from 'react-router-dom'


export default function Navbar(props) {


    
    
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/about">{props.aboutText}</Link>
                    </li>
                </ul>
                <div className={`form-check form-switch mx-3 text-${props.mode==="dark"?'light':'dark'}`}>
                    <input className="form-check-input" onChange={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={props.toggle}/>
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                </div>
                <div>
                    <button style={{backgroundColor:"#042743", border:"2px solid #484d51", borderRadius:"100px",height:"1 rem",width:"1 rem", color:"#042743", marginRight:"3px"}} onClick={props.bg_blue}>O</button>
                    <button style={{backgroundColor:"#580000", border:"2px solid #484d51", borderRadius:"100px",height:"1 rem",width:"1 rem", color:"#580000", marginRight:"3px"}} onClick={props.bg_red}>O</button>
                    <button style={{backgroundColor:"#003603", border:"2px solid #484d51", borderRadius:"100px",height:"1 rem",width:"1 rem", color:"#003603", marginRight:"3px"}} onClick={props.bg_green}>O</button>
                </div>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-primary" type="submit">Search</button>
                </form> */}
            </div>
      </div>
    </nav>
    </>  )
}

Navbar.propTypes= {
    title: PropTypes.string.isRequired, 
    aboutText: PropTypes.string.isRequired
}

Navbar.defaultProps={
    title: "Set title",
    aboutText: "Set about"
}