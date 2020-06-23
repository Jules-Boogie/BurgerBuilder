import React, {useState} from 'react';
import Aux from "../../hoc/_ux"
import BLT from "../../Components/BLTComponent/BLT"
import { Button } from 'react-bootstrap'
function checkout(props){

  const  [ingredient, setIngredients] = useState({

    })
    return (

        <div>
            <Aux>
            <h3 className="text-center" > Check out Page </h3>
            <BLT ingredient={ingredient}/>
            <div className="text-center">
            <Button variant="success"> Continue </Button>
            <Button variant="warning"> Go Back </Button>
            </div>
            </Aux>



        </div>
    )









}

export default checkout;