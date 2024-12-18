import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import { useContext } from "react";
import { Context } from "../Wraper";
import { FormattedMessage } from "react-intl";

const NavbarApp = ({ type, walletConnection }) => {
  const context = useContext(Context);

  const signOut = () => {
    try {
      walletConnection.signOut();
    } catch (e) {
      console.log(e);
    }
    window.location.reload();
  };

  if (type === "login") {
    return (
      <Navbar className="color-nav" variant="dark">
        <Container>
          <Navbar.Brand>
            <FormattedMessage id="app.barWelcome" defaultMessage="Welcome" />
          </Navbar.Brand>
          <Nav>
            <Form.Select
              className="me-2"
              id="lang-select"
              value={context.locale}
              onChange={(e) => {
                context.selectLanguage(e);
              }}
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </Form.Select>
          </Nav>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar className="color-nav" variant="dark">
        <Container>
          <Navbar.Brand>
            <FormattedMessage id="app.barWelcome" defaultMessage="Welcome" />
          </Navbar.Brand>
          <Nav>
            <Form.Select
              className="me-2"
              id="lang-select"
              value={context.locale}
              onChange={(e) => {
                context.selectLanguage(e);
              }}
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </Form.Select>

            <Form.Select className="me-2">
              <option>
                <FormattedMessage
                  id="app.registrySelect"
                  defaultMessage="Registro"
                />
              </option>
              <option>Registros</option>
            </Form.Select>

            <Button variant="danger" onClick={() => signOut()}>
              <FormattedMessage id="app.exitBtn" defaultMessage="Cancel" />
            </Button>
          </Nav>
        </Container>
      </Navbar>
    );
  }
};

export default NavbarApp;
