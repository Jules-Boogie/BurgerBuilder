import React from 'react';
import Classes from "./blt.css"
import BLTIngred from "./BLTIngredient" 

const blt = (props) => {
    let newIngred = Object.keys(props.ingredient).map(igkeys =>{
        
        return [...Array(props.ingredient[igkeys])].map((_,i) =>{
            return <BLTIngred key={igkeys + i} item={igkeys}/>
            
        });
        
    })
    .reduce((total, current) => {
        console.log(current)
        return total.concat(current)
    },[]);

    if(newIngred.length === 0){
        newIngred = <p> Please start adding ingredients</p>
    }
    
    // extract the keys of a given object and gives you an array. 
    return (
<div className={Classes.BLT}>
<BLTIngred item="breadTop"/>
    {newIngred}
<BLTIngred item="breadEnd"/>
</div>
)
}

export default blt;