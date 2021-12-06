import React from "react";
import {
  Nav,
  Navbar,
  Container,
  DropdownButton,
  Dropdown,
  Row,
  Col,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import logo from "../img/logo_react.png";

export default class TopMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Navbar fixed="top" id="Navbar" bg="dark" variant="dark">
        <Container>
          {/*<img className="logo" src={logo} />*/}
          <img
            className="logo"
            src="https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png"
          />
          <Navbar.Brand href="#home">
            Grupo 14 MisionTic<span id="usuario-sub-branm"></span>
          </Navbar.Brand>
          <NavbarCollapse id="basic-navbar-navbar">
            <Nav className="me-auto">
              {/*<Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>*/}
            </Nav>

            <DropdownButton id="dropdown-basic-button" title="Usuario">
              <Dropdown.Header id="dropdown-header">
                <Row>
                  <FontAwesomeIcon icon={faUserCircle} />
                </Row>
                <Row>USUARIO</Row>
                <Dropdown.Divider />
              </Dropdown.Header>
              <Dropdown.Item href="#/action-1">Cerrar Sesión</Dropdown.Item>
              {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
            </DropdownButton>
          </NavbarCollapse>
        </Container>
      </Navbar>
    );
  }
}
