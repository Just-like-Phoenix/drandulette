//Header for specific topic page

import React from "react";

import "./SpecificTopicHeader.scss";
import Card from "react-bootstrap/esm/Card";
import Stack from "react-bootstrap/esm/Stack";
import { DropdownTopicAction } from "../ButtonComponent";
import verificated from "../assets/img/done.svg";

export interface ISpecificTopicHeaderProps {
  img: string;
  topicName: string;
  topicTheme: string;
  topicText: string;
  topicTime: string;
  topoicID: string;
  mailLogin: string;
  verificated: number;
}
const SpecificTopicHeaderHeaderComponent: React.FunctionComponent<
  ISpecificTopicHeaderProps
> = (props) => {
  return (
    <Card className="specTopicHeader">
      <Stack direction="horizontal" style={{ justifyContent: "space-between" }}>
        <Card.Title className="topicHeaderTitle">{props.topicTheme}</Card.Title>
        {localStorage.getItem("user_moderator") === "0" ? (
          localStorage.getItem("user_mailLogin") === props.mailLogin ? (
            <DropdownTopicAction
              moderator={"0"}
              topicID={props.topoicID}
              login={props.mailLogin}
            />
          ) : (
            <></>
          )
        ) : (
          <DropdownTopicAction
            moderator={"1"}
            topicID={props.topoicID}
            login={props.mailLogin}
          />
        )}
      </Stack>
      <Stack gap={0} direction="horizontal" className="topicProfile">
        <Card.Img className="topicProfilePic" src={props.img}></Card.Img>
        <Stack gap={0} direction="vertical">
          <Stack direction="horizontal">
            <Card.Text className="topicProfileName">
              {props.topicName}
            </Card.Text>
            {props.verificated === 1 ? (
              <Card.Img
                src={verificated}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            ) : (
              <></>
            )}
          </Stack>
          <Card.Text className="topicProfileTimeStamp">
            {props.topicTime}
          </Card.Text>
        </Stack>
      </Stack>
      <Card.Text className="topicHeaderText">{props.topicText}</Card.Text>
    </Card>
  );
};

export default SpecificTopicHeaderHeaderComponent;
