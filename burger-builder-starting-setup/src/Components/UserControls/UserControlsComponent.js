import React from 'react'
import { Button } from 'react-bootstrap'

function foodControls(props){


  

    return(
        <div>
            <p>{props.itemName}</p>
            <Button  onClick={props.add} variant="success"> Add item</Button>
            <Button disabled={props.disabled} onClick={props.remove} variant="warning"> Remove item</Button> 
        </div>
    )



}

export default foodControls;