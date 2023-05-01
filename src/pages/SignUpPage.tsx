import React from "react";
import Form from "react-bootstrap/esm/Form";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Stack from "react-bootstrap/esm/Stack";
import fulllogo from "./assets/img/fulllogo.svg";

import "./SignUp.scss";
import Navbar from "react-bootstrap/esm/Navbar";

export interface IMainProps {}
const MainPage: React.FunctionComponent<IMainProps> = (props) => {
  return (
    <div className="signupdiv">
      <Card className="logincard">
        <Form>
          <Stack gap={3}>
            <Navbar.Brand className="logo" href="/">
              <img src={fulllogo} alt="" width={241} height={60} />
            </Navbar.Brand>

            <FloatingLabel controlId="floatingInput" label="Почта">
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Телефон">
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingInput" label="Имя">
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Пароль">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

            <FloatingLabel
              controlId="floatingPassword"
              label="Повторите пароль"
            >
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>

            <Button size="lg" type="submit" variant="primary">
              Зарегистрироваться
            </Button>
          </Stack>
        </Form>
      </Card>
    </div>
  );
};

export default MainPage;
