import React from 'react'
import propTypes from 'prop-types'





export default function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode == 'light' ? 'whitesmoke' : 'black'} bg-${props.mode== 'light' ? 'whitesmoke' : 'black'}`} >
        <div className="container-fluid">
          <a className="navbar-brand" style={{color : props.mode === 'light'?'black':'white'}} href="#">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" >
                <a className="nav-link active" style={{color : props.mode === 'light'?'black':'white'}} aria-current="page" href="/">{props.home} </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" style={{color : props.mode === 'light'?'black':'white'}} href="#">{props.about}</a>
              </li>
            </ul>
            
            <div className="form-check form-switch">
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" style={{color : props.mode === 'light'?'black':'white'}} htmlforfor="flexSwitchCheckDefault">{props.btn}</label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}


Navbar.propTypes = {

  title : propTypes.string.isRequired,
  home : propTypes.string.isRequired,
  about : propTypes.string.isRequired,
  search : propTypes.string.isRequired

}

Navbar.defaultProps = {

  title : 'Set Here',
  home : 'Set Home',
  about : 'Set About',
  search : 'Set Search'

}
