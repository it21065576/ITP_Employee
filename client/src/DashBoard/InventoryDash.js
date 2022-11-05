import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
import '../index.css';
import NavBar3 from '../components/NavBar3';


export default class InventoryDash extends Component {
  render() {
    return (
    <div>
      {/* <NavBar3/> */}


        <div className="DashBG" style={{ zIndex: 98 }}>
            <div style={{marginBlockStart:'7%'}}>
            <center>
            <h1><span class="badge bg-warning text-dark opacity-90 fs-1">Inventory Management Dashboard</span></h1>
            </center>
            </div>
                
            <div style={{marginBlockStart:'4%', marginLeft:'15%'}}>   
        <MDBCard style={{ maxWidth: '22rem' }}>
        <MDBCardImage src='/OwnerDa.jpg' position='top' alt='...' />
        <MDBCardBody>
            <MDBCardTitle>Add New Product</MDBCardTitle>
            <MDBCardText>
             Creating new product details.
        </MDBCardText>
            <center>
            <MDBBtn href='/EMD' className="btn btn-warning text-dark">Add Product</MDBBtn>
            </center>
        </MDBCardBody>
        </MDBCard>
           
           
            </div>

            <div style={{marginBlockStart:'-26%', marginLeft:'60%'}}>   
        <MDBCard style={{ maxWidth: '22rem' }}>
        <MDBCardImage src='/report.jpg' position='top' alt='...' />
        <MDBCardBody>
            <MDBCardTitle>Inventory Report</MDBCardTitle>
            <MDBCardText>
             Get data about Products as PDF.
            </MDBCardText>
            <center>
            <MDBBtn href='/ORG' className="btn btn-warning text-dark">Report</MDBBtn>
            </center>
        </MDBCardBody>
        </MDBCard>
            </div>

    

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            </div>
        
        </div>
    )
  }
}
