import React from "react";
import axios from "axios";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { APIHOST as host } from "../../App.json";
import "./login.css";
import { isNull } from "util";
import Cookies from "universal-cookie";
import { calculaExracionSesion } from "../helper/helper";
import Loading from "../loading/loading";

const cookies = new Cookies();

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario: "",
      pass: "",
    };
  }
  iniciarSesion() {
    this.setState({ loading: true });
    axios
      .post(`${host}/usuarios/login`, {
        usuario: this.state.usuario,
        pass: this.state.pass,
      })
      .then((response) => {
        if (isNull(response.data.token)) {
          alert("usuarios y/o contraseña invalido");
        } else {
          cookies.set("_s", response.data.token, {
            path: "/",
            expires: calculaExracionSesion(),
          });
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
    /*alert(`Usuario: ${this.state.usuario} - password: ${this.state.pass} `);*/
  }

  render() {
    return (
      <Container id="login-container">
        <Loading show={this.state.loading} />
        <Row>
          <Col>
            <Row>
              <h2> Iniciar Sesión </h2>
            </Row>
            <Row>
              <Col
                sm="12"
                xs="12"
                md={{ span: 4, offset: 4 }}
                lg={{ span: 4, offset: 4 }}
                lx={{ span: 4, offset: 4 }}
              >
                <Form>
                  <Form.Group>
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control
                      onChange={(e) =>
                        this.setState({ usuario: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={(e) => this.setState({ pass: e.target.value })}
                    />
                  </Form.Group>
                  <Button
                    variant="warning"
                    onClick={() => {
                      this.iniciarSesion();
                    }}
                  >
                    Iniciar Sesión
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
