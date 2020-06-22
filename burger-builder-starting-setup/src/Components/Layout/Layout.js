import React from 'react'

import Aux from "../../hoc/_ux"
import classes from "./Layout.css"
import Navigation from "../../Components/NavBar/NavBar"
import SideDrawer from "../../Components/SideDrawerMobile/SideDrawer"
const layout = (props) => (
    <Aux>
        
       <Navigation/>
        <main className={classes.main}>  {props.children}</main>
    </Aux>
)

export default layout;