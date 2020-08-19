
import React, { Component } from 'react'
import { Navbar,InputGroup,Form,FormControl,Button,Dropdown,DropdownButton } from 'react-bootstrap'
Navbar




export class Header extends Component {
  render() {

    return (
      <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <InputGroup className="mb-auto w-75" size="md">
    <DropdownButton
      as={InputGroup.Prepend}
      variant="outline-secondary"
      title="All"
      id="input-group-dropdown-1"
    >
      <Dropdown.Item href="#">Action</Dropdown.Item>
      <Dropdown.Item href="#">Another action</Dropdown.Item>
      <Dropdown.Item href="#">Something else here</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#">Separated link</Dropdown.Item>
    </DropdownButton>
    <FormControl aria-describedby="basic-addon1" />
  </InputGroup>
      </Navbar.Collapse>
    </Navbar>
    )
  }
}

export default Header
