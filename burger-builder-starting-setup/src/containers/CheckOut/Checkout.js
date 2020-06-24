import React, {useState, useEffect} from 'react';
import { withRouter, useHistory, useParams, Redirect } from 'react-router-dom'
import Aux from "../../hoc/_ux"
import BLT from "../../Components/BLTComponent/BLT"
import { Button } from 'react-bootstrap'
import UserInfoModal from '../../Components/UserInfo/UserInfoModal'
import API from '../../Utils/APIFirebase'
function Checkout(props){

    // this was an empty option before I added withRouter hook
    // important to note
    console.log(props)
    const [show, setShow] = useState(false)
    const [userInfo, setUserInfo] = useState({
        firstname:"",
        lastname:"",
        email:"",
        address:{
            street:"",
            state:"",
            postalCode:""
        }
    })


   
  const  [ingredient, setIngredients] = useState({
      

    })
 const [prices, setPrice] = useState({

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

      for (var i in object){
          if( i === "price")
          setPrice(object[i])
          console.log(object[i])
      }
       
     

    },[])

    const handleInputChange =(event) => {
        const {name, value} = event.target;
        
       const newInfo =  {
           ...userInfo,
           [name]:value
       }
       setUserInfo(newInfo)


    }
   
        
      const closeModal =() =>{
          setShow(false)
      }

      const openModal =()=>{
          setShow(true)
      }
   


   
    const history = useHistory()
  
    const handlebackButton =()=>{
     
        history.goBack()
       
    }

    const handleOrderBtn = (event)=>{
        event.preventDefault()

           const checkoutData = {
            ingredients: ingredient,
            totalPrice: prices,
            userInfo: {
                name: "Juliet George",
                address: " The white house",
                paymentMethod: {
                    method: "visa",
                    number: 4546484947474844,
                    expiration: new Date(),
                    email: "julietfake@gmail.com"
                }

            }
        }

        API.instance()
        API.add("/checkout.json", checkoutData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        history.goBack('/')
    }

    
    return (

        <div>
            <Aux>
            <h3 className="text-center" > Check out Page </h3>
            <BLT ingredient={ingredient}/>
            <div className="text-center">
            <Button variant="success" onClick={openModal}> Continue </Button>
            <UserInfoModal
            onHide={closeModal}
            addUserInfo={handleOrderBtn}
            show={show}
            changed={handleInputChange}
            totalPrice={prices}
            />




            <Button onClick={handlebackButton} variant="warning"> Go Back </Button>
            </div>
            </Aux>



        </div>
    )









}

export default withRouter(Checkout);