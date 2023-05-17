import React from "react";

import "./Profile.scss";
import Card from "react-bootstrap/esm/Card";
import Stack from "react-bootstrap/esm/Stack";
import Image from "react-bootstrap/Image";
import Dropdown from "react-bootstrap/esm/Dropdown";
import { LogOutButton, ProfileButton, VerButton } from "../ButtonComponent";

export interface IProfileProps {}
const ProfileComponent: React.FunctionComponent<IProfileProps> = (props) => {
  return (
    <Dropdown>
      <Dropdown.Toggle
        style={{ color: "black" }}
        className="profileDropdown"
        id="dropdown-autoclose-true"
      >
        <Card.Img
          className="profilePic"
          src={localStorage.getItem("user_profilePic") as string}
        />
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ padding: 8 }} align={{ lg: "end" }}>
        <Stack>
          <ProfileButton />
          {localStorage.getItem("user_moderator") === "0" ? (
            localStorage.getItem("user_verificated") === "0" ? (
              <>
                <div style={{ marginTop: 8 }} />
                <VerButton />
              </>
            ) : (
              <></>
            )
          ) : (
            <></>
          )}
          <div style={{ marginTop: 8 }} />
          <LogOutButton />
        </Stack>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileComponent;
