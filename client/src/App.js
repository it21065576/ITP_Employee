import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import NavBar1 from './components/NavBar1';
import NavBar3 from './components/NavBar3';


import OwnerDash from './DashBoard/OwnerDash';
// import registerCusDash from './DashBoard/registerCusDash';



import EmployeeDash from './components/OwnerManagement/EmployeeDash';
import AddEmployee from './components/OwnerManagement/AddEmployee';
import EditEmployee from './components/OwnerManagement/EditEmployee';
import EmployeeDetails from './components/OwnerManagement/EmployeeDetails';

import OwnerReport from './components/OwnerManagement/OwnerReport';

// Inventory
import InventoryDash from './DashBoard/InventoryDash';
import InventoryDetails from './components/InventoryManagement/InventoryDetails';

export default class App extends Component {
  render() {
    return (


      <BrowserRouter>
        {/*...................................................NavBar............................................... */}
        <div style={{ top: 0, position: 'sticky', zIndex: 99 }}>
          <NavBar3 />
         

        
        </div>
        {/*...................................................NavBarEnd............................................... */}

        {/*...................................................Home............................................... */}
        <div style={{ marginBlockStart: '-100px' }} >
   
           <Route path="/" exact component={OwnerDash}></Route>
          {/* <Route path="/registerCusDash" exact component={registerCusDash}></Route> */}

          <Route path="/" exact component={InventoryDash}></Route>
          <div style={{marginBlockStart:'-8%'}}>
          
          </div>
          
        </div>
        {/*...................................................HomeEnd............................................... */}




        <div>







          {/*...........................................OwnerManagment............................................... */}
          <Route path="/EMD" exact component={EmployeeDash}></Route>
        <Route path="/addEmployee" exact component={AddEmployee}></Route>
        <Route path="/editEmployee/:id" exact component={EditEmployee}></Route>
        <Route path="/employeeDet/:id" exact component={EmployeeDetails}></Route>
        <Route path="/ORG" exact component={OwnerReport}></Route>
          {/*...........................................OwnerManagmentEnd............................................... */}




        {/*...........................................InventoryManagement............................................... */}
        <Route path="/INVENTORY" exact component={InventoryDash}></Route>
        <Route path="/inventoryDetails" exact component={InventoryDetails}></Route>
        {/*...........................................InventoryManagement............................................... */}

        </div>







        {/*...................................................Footer............................................... */}
        {/* <div>
          <Footer />
        </div> */}
        {/*...................................................FooterEnd............................................... */}



      </BrowserRouter>

    )
  }


}