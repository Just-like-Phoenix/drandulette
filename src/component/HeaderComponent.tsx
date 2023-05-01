import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Stack from "react-bootstrap/esm/Stack";
import "./Header.scss";

import fulllogo from "./assets/img/fulllogo.svg";
import { Outlet } from "react-router-dom";

export interface IHeaderProps {}
const HeaderComponent: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <>
      <Navbar className="upernavbar" bg="light">
        <Navbar.Brand className="logo" href="/">
          <img src={fulllogo} alt="" width={241} height={60} />
        </Navbar.Brand>
        <Stack className="buttons" direction="horizontal" gap={3}>
          <Button variant="primary" href="/signin">
            Войти
          </Button>
          <Button variant="primary" href="/signup">
            Зарегистрироваться
          </Button>
        </Stack>
      </Navbar>
      <Navbar className="lowernavbar" bg="primary"></Navbar>
      <Outlet />
      <div>
        <Navbar className="footer" bg="primary"></Navbar>
      </div>
    </>
  );
};

export default HeaderComponent;
