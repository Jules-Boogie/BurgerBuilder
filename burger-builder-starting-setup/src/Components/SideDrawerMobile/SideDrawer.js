import React from 'react';
import Classes from "./SideDrawer.css"
import { Navbar, Nav } from 'react-bootstrap'


function sideDrawer(){
    return (
        <div className={Classes.sideDrawer}>
              
                 <ul>
                      <li>
                <Navbar.Brand href="#home">
                    <img src="https://cdn1.vectorstock.com/i/1000x1000/02/20/breakfast-with-egg-and-toast-vector-21370220.jpg" width="30" height="30"></img>
                    Juliet's BLT</Navbar.Brand>
                    </li>
                    <Nav className="ml-auto">
                    <li>
                    <Nav.Link  href="#home">Menu</Nav.Link>
                    </li>
                    </Nav>
                    <Nav className="ml-auto">
                     <li>
                    <Nav.Link  href="#home">Burger Builder</Nav.Link>
                    </li>
                    </Nav>
                    <Nav className="ml-auto">
                   <li>
                    <Nav.Link  href="#home">Checkout</Nav.Link>
                    </li>
                    </Nav>
                    </ul>
               
           
        
        </div>
    )
}

export default sideDrawer;