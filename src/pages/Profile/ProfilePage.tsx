import Card from "react-bootstrap/esm/Card";
import "./Profile.scss";
import React from "react";
import { Stack } from "react-bootstrap";

export interface IProfileProps {}
const ProfilePage: React.FunctionComponent<IProfileProps> = (props) => {
  return (
    <div className="profileDIv">
      <Card className="profileCard">
        <Stack>
          <Stack direction="horizontal">
            <Card.Img className="profileCardImg"></Card.Img>
            <Stack style={{ paddingLeft: 10 }}>
              <Card.Title>NAME</Card.Title>
              <Card.Text>почта</Card.Text>
            </Stack>
          </Stack>
          <hr
            className="horizontalDivLine"
            style={{ marginTop: 5, marginBottom: 5 }}
          />
          <div className="profileOverDiv" style={{ marginBottom: 10 }}></div>
          <div className="profileOverDiv"></div>
        </Stack>
      </Card>
    </div>
  );
};

export default ProfilePage;
