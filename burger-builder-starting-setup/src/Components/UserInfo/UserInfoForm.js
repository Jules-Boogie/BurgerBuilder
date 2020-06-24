import React from 'react'
import {Form, Col} from 'react-bootstrap'

function userInfo(props){
    return (
        <div>
<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control onChange={props.Changed} name="firstname" value={props.firstname} placeholder="Enter email" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Last Name</Form.Label>
      <Form.Control onChange={props.Changed} name="lastname" value={props.lastname} placeholder="Enter email" />
    </Form.Group>

  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control onChange={props.Changed} placeholder="1234 Main St" name="address1" value={props.address1}/>
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control onChange={props.Changed} placeholder="Apartment, studio, or floor" name="address2" value={props.address2} />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control onChange={props.Changed} value={props.city} name="city" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>State</Form.Label>
      <Form.Control onChange={props.Changed} as="select" defaultValue="Choose..." name="state" >
        <option>Choose...</option>
        <option value={props.state}>...</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Zip</Form.Label>
      <Form.Control onChange={props.Changed} name="zipcode" value={props.zipcode}/>
    </Form.Group>
  </Form.Row>
</Form>
        </div>
    )
}

export default userInfo;