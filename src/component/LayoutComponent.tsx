import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Stack from "react-bootstrap/esm/Stack";
import "./Layout.scss";

import fulllogo from "./assets/img/fulllogo.svg";
import { Outlet } from "react-router-dom";
import {
  AddAnnouncementButton,
  LogOutButton,
  SignInButton,
  SignUpButton,
} from "./ButtonComponent";

export type LayoutProps = {
  user: any;
  moderator: any;
};

export const LayoutButtons = (props: LayoutProps) => {
  return (
    <>
      <Stack className="buttons" direction="horizontal" gap={3}>
        {props.user == null ? <SignInButton /> : <AddAnnouncementButton />}
        {props.user == null ? (
          <SignUpButton />
        ) : props.moderator === "0" ? (
          <LogOutButton />
        ) : (
          <></>
        )}
      </Stack>
    </>
  );
};

function LayoutComponent() {
  const user = localStorage.getItem("user_mailLogin");
  const moderator = localStorage.getItem("user_moderator");
  return (
    <>
      <Navbar className="upernavbar" bg="light">
        <Navbar.Brand className="logo" href="/">
          <img src={fulllogo} alt="" width={241} height={60} />
        </Navbar.Brand>
        <LayoutButtons user={user} moderator={moderator} />
      </Navbar>
      <Navbar className="lowernavbar" bg="primary">
        <Stack direction="horizontal" gap={1}>
          <Nav.Link href="/">Обявления</Nav.Link>
          <Nav.Link href="/topics">Форум</Nav.Link>
        </Stack>
      </Navbar>
      <Outlet />
    </>
  );
}

export default LayoutComponent;
