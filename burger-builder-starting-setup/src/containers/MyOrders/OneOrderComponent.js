import React from 'react'
import {Card, Button} from 'react-bootstrap'


function oneOrder(props){
    return(

        <div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://cdn1.vectorstock.com/i/1000x1000/02/20/breakfast-with-egg-and-toast-vector-21370220.jpg" />
  <Card.Body>

    <Card.Title> Order Id: {(props.orderID).slice(1)}</Card.Title>
    <Card.Title> Total Price: USD {props.price}</Card.Title>
    <Card.Text className="text-white bg-dark">
    <h5 > Ingredients below: </h5>
        {Object.keys(props.ingredients).map(item =>{
            if(item != "price")
            return(
                <div>
               
               <p> {item}({props.ingredients[item]})</p> 
               </div>
            )
        })}

    </Card.Text>
    <Button variant="success">Reorder</Button>
  </Card.Body>
</Card>




        </div>


    )



}

export default oneOrder;
