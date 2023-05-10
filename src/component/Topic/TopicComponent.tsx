//For topic page with info and link

import React from "react";

import "./Topic.scss";
import Card from "react-bootstrap/esm/Card";
import Stack from "react-bootstrap/esm/Stack";
import Nav from "react-bootstrap/esm/Nav";

export interface ITopicProps {
  topicID: string;
  topicName: string;
  topicTheme: string;
  topicText: string;
  topicTime: string;
  topicPic: string;
}
const TopicComponent: React.FunctionComponent<ITopicProps> = (props) => {
  return (
    <Card className="topicCard">
      <Nav.Link
        href={"/topics/" + props.topicID}
        className="topicTitle"
        style={{ color: "black", fontWeight: "bold", fontSize: 30 }}
      >
        {props.topicTheme}
      </Nav.Link>
      <Stack gap={0} direction="horizontal" className="topicProfile">
        <Card.Img className="topicProfilePic" src={props.topicPic}></Card.Img>
        <Stack gap={0} direction="vertical">
          <Card.Text className="topicProfileName">{props.topicName}</Card.Text>
          <Card.Text className="topicProfileTimeStamp">
            {props.topicTime}
          </Card.Text>
        </Stack>
      </Stack>
      <Card.Text className="topicTitle">
        {props.topicText.length < 100
          ? props.topicText
          : props.topicText.slice(0, 100) + "..."}
      </Card.Text>
    </Card>
  );
};

export default TopicComponent;
