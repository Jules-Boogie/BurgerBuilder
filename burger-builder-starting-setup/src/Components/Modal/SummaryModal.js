
import React, {Component} from 'react'
import { Modal, Button } from 'react-bootstrap'

class OrdersummaryModal extends Component {

  shouldComponentUpdate = (nextprops) => {
    return nextprops.show != this.props.show

  }


  render(){
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your Order From Juliet's Drive Thru
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>A BLT Sandwich with </h4>
          <p>
            {Object.keys(this.props.sandwich).map(item => {
              return (
                <li> {item}: {this.props.sandwich[item]} </li>
              )
            })}
            
            <h5 className="text-center">Order total: ${this.props.total}</h5>
          </p>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="success" onClick={this.props.Checkout}> Proceed to Checkout </Button>
          <Button variant="warning" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
  export default OrdersummaryModal;