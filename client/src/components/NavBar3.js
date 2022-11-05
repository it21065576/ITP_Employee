import React, { Component } from 'react'

export default class NavBar3 extends Component {
  render() {
    return (

      <nav className="navbar navbar-expand-lg navbar-light opacity-90" style={{ backgroundColor: '#BDBDBD', }} >
        <div className="container-fluid">
        <img src='/Hlogo.png'  alt='Logo' style={{ height: '50px', width: '120px' }}   ></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-dark" aria-current="page" href="/">Inventory</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark" href="/PCR">CoconutStock</a>
              </li>
           
             <li>
                <a href="/login">
                  <button style={{ marginLeft: '900px' }} type="button" class="btn btn-warning text-dark">
                    <i className="fas fa-user-alt"></i>&nbsp; SignOut</button>
                </a>
              </li>
            </ul>


          </div>
        </div>
      </nav>

    )
  }
}