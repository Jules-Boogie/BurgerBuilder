import React, { useState, useEffect } from 'react';
import OneOrder from './OneOrderComponent'
import API from "../../Utils/APIFirebase"
import {Row} from 'react-bootstrap'

function Orders() {
    const [order, setOrder] = useState([])




    const getOrders = () => {
        API.fetchOrders('/checkout.json')
            .then(res => {
                console.log(res.data)
                const data = res.data
                const order = []
                for (var key in data) {
                    order.push({ ...data[key], id: key })

                }
                setOrder(order)

                // setOrder(test)
                console.log(order)





            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getOrders()

    }, [])



    return (

        <div>
            <h3 className="text-center" > Past orders </h3>
            <Row>
                {order.map(data => {
                    return (
                        <OneOrder
                            ingredients={data.ingredients}
                            key={data.id}
                            orderID={data.id}
                            price={data.totalPrice}

                        />
                    )
                }

                )}

            </Row>
        </div>

    )
}


export default Orders