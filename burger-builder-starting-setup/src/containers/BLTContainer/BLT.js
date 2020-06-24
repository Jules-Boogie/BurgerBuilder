import React, { Component } from 'react';
import Aux from "../../hoc/_ux"
import BLTParts from "../../Components/BLTComponent/BLT"
import AllControls from "../../containers/foodControls"
import { Container, Button, Row, Col } from 'react-bootstrap'
import CheckoutModal from '../../Components/Modal/SummaryModal'
import API from '../../Utils/APIFirebase'


const ingredientCost = {
    Avocado: 5,
    Bacon: 1,
    Egg: 2

}

class BLT extends Component {

 

    state = {
        ingredient: {},

        //     Avocado: 0,
        //     Bacon: 0,
        //     Egg: 0

        // 

        sandwichPrice: 10,
        canCheckout: false,
        showModal: false


    }
    openModal = () => {
        this.setState({
            showModal: true
        })
    }

    closeModal = () => {
        this.setState({
            showModal: false
        })
    }

    componentDidMount() {
        this.getIngredients()
    }

    getIngredients = () => {
        API.fetchIgredients('/ingredients.json')
            .then(res => this.setState({
                ingredient: res.data
            }))
                .catch(error => console.log(error))


    }




    canCheckout = (ingredient) => {
        const total = Object.keys(ingredient).map(item => {
            return ingredient[item]
        }).reduce((total, current) => {
            return total + current
        }, 0)

        this.setState({
            canCheckout: total > 0
        })


    }

    // orderSummary =(ingredient)=> {
    //   const display =  Object.keys(ingredient)

    //   this.setState({
    //       orderSummary:display
    //   })
    // }




    addIngredient = (item) => {
        let itemQuantity = this.state.ingredient[item];
        let increasedQuantity = itemQuantity + 1
        let newIngred = {
            ...this.state.ingredient
        }
        newIngred[item] = increasedQuantity;
        let itemCost = this.state.sandwichPrice
        let newPrice = itemCost + ingredientCost[item]

        this.setState({
            ingredient: newIngred,
            sandwichPrice: newPrice
        })
        this.canCheckout(newIngred)




    }

    removeIngredient = (item) => {
        let currentCount = this.state.ingredient[item]
        if (currentCount === 0) {

            return;

        }
        let decreasedQuantity = this.state.ingredient[item] - 1
        let updatedQuantity = {
            ...this.state.ingredient
        }
        updatedQuantity[item] = decreasedQuantity;

        let currentPrice = this.state.sandwichPrice;
        let ingredientPrice = ingredientCost[item]
        let updatedPrice = currentPrice - ingredientPrice

        this.setState({
            ingredient: updatedQuantity,
            sandwichPrice: updatedPrice,
        })
        this.canCheckout(updatedQuantity)



    }

    continuetoCheckout = () => {
        // const checkoutData = {
        //     ingredients: this.state.ingredients,
        //     totalPrice: this.state.sandwichPrice,
        //     userInfo: {
        //         name: "Juliet George",
        //         address: " The white house",
        //         paymentMethod: {
        //             method: "visa",
        //             number: 4546484947474844,
        //             expiration: new Date(),
        //             email: "julietfake@gmail.com"
        //         }

        //     }
        // }

        // API.instance()
        // API.add("/checkout.json", checkoutData)
        //     .then(res => console.log(res.data))
        //     .catch(err => console.log(err))
            // window.location.replace("/checkout")
        const data = []

        for (var item in this.state.ingredient){
            data.push(encodeURIComponent(item) + "=" 
            + encodeURIComponent(this.state.ingredient[item]))
        }
        console.log(data)
            data.push("price=" + this.state.sandwichPrice)
            const queryParams = data.join('&')
            
        console.log(queryParams)

            this.props.history.push(
                {
                    pathname:"/checkout",
                    search:'?' + queryParams
                }
            )

    }


    render() {

        const currentCount = {
            ...this.state.ingredient
        }
        for (var item in currentCount) {
            currentCount[item] = currentCount[item] === 0
            console.log(currentCount)

        }

        return (
            <div>

                <Aux>

                    <BLTParts ingredient={this.state.ingredient}></BLTParts>


                </Aux>
                <Container className="text-center bg-dark">
                    <h4 className="text-light"> Current Bill: ${this.state.sandwichPrice.toFixed(2)}</h4>

                    <Col>
                        <AllControls

                            addIngredient={this.addIngredient}
                            removeIngredient={this.removeIngredient}
                            disabled={currentCount}

                        />
                    </Col>

                    <Button onClick={this.openModal} disabled={!this.state.canCheckout} variant="info" size="large"> Order Summary </Button>
                    <CheckoutModal
                        onClick={this.continuetoCheckout}
                        total={this.state.sandwichPrice}
                        sandwich={this.state.ingredient}
                        show={this.state.showModal}
                        onHide={this.closeModal}
                    />


                </Container>

            </div>
        )

    }



}

export default BLT;