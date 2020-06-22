import React from 'react'
import Classes from "./BLTingredient.css"
import Proptype from "prop-types"

function BLTIngred (props){
    let ingredient = null;

 if(props.item === "breadTop"){
     ingredient =  <div className={Classes.BreadTop}> </div>
 } else if(props.item === "breadEnd"){
   ingredient = <div className={Classes.BreadBottom}> </div>
 } else if(props.item === "Bacon"){
    ingredient = <div className={Classes.Meat}> </div>
 } else if(props.item === "Avocado"){
   ingredient = <div className={Classes.Avocado}> </div>
 } else if(props.item === "Egg"){
   ingredient = <div className={Classes.Egg}> </div>
 } else if(props.item === "Tomato"){
   ingredient = <div className={Classes.Campari}> </div>
 } else {
     ingredient = null;
 }
 return ingredient;


}

BLTIngred.Proptype = {
    item:Proptype.string.isRequired
}

export default BLTIngred;