import React, {useState, useEffect} from 'react';
import { withRouter, useHistory, useParams, Redirect } from 'react-router-dom'
import Aux from "../../hoc/_ux"
import BLT from "../../Components/BLTComponent/BLT"
import { Button } from 'react-bootstrap'
function Checkout(props){

    // this was an empty option before I added withRouter hook
    // important to note
    console.log(props)
   
  const  [ingredient, setIngredients] = useState({
      

    })

    useEffect(() => {

        // my url = http://localhost:3000/checkout?Avocado=1&Bacon=0&Egg=0
        // props.location.search = ?Avocado=1&Bacon=0&Egg=0
        const search = (props.location.search).slice(1)
        console.log(search)
        const searchs = search.split("&")
        const object = {}
        for (var i in searchs){
        const test = searchs[i].split("=")
        object[test[0]] = test[1]
        console.log(test)
        }
        console.log(object)
        
      setIngredients(object)
       
     

    },[])

   
        
      
   


   
    const history = useHistory()
  
    const handlebackButton =()=>{
     
        history.goBack()
       
    }

    const handleContinueButton = () =>{
        
    }
    return (

        <div>
            <Aux>
            <h3 className="text-center" > Check out Page </h3>
            <BLT ingredient={ingredient}/>
            <div className="text-center">
            <Button variant="success"> Continue </Button>
            <Button onClick={handlebackButton} variant="warning"> Go Back </Button>
            </div>
            </Aux>



        </div>
    )









}

export default withRouter(Checkout);