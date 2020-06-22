import React from 'react';
import FoodControl from "../Components/UserControls/UserControlsComponent"

const controlsArr = [
    {itemName:"Avocado"},
    {itemName:"Bacon"},
    {itemName:"Egg"}
]

function allControls(props){

return (
    <div>
        {controlsArr.map((item,id) => {
           return(

            <FoodControl
             key={item.id}
              itemName={item.itemName}
              add={() => props.addIngredient(item.itemName)}
              remove={() =>props.removeIngredient(item.itemName)}
              disabled={props.disabled[item.itemName]}
              />
           )
        })
    }
    </div>
)


}

export default allControls;