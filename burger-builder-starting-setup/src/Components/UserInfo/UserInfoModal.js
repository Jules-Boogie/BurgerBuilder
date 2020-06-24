import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import UserInfoForm from "./UserInfoForm"

function UserInfoModal(props) {


    return (


        <Modal
            {...props}

            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            
            
           
            
        >
            <Modal.Header closeButton>
                <Modal.Title  id="contained-modal-title-vcenter">
                    Order total: ${props.totalPrice}
          </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UserInfoForm className="bg-secondary" />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={props.addUserInfo}>
                    Place Order
          </Button>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>

        </Modal>








    )



}

export default UserInfoModal;