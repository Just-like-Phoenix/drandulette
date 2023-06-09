import React from "react";

import verificated from "../assets/img/done.svg";
import "./SpecificTopicComment.scss";
import Card from "react-bootstrap/esm/Card";
import Stack from "react-bootstrap/esm/Stack";
import { DropdownTopicCommentAction } from "../ButtonComponent";

export interface ISpecificTopicCommentProps {
  name: string;
  message: string;
  time: string;
  img: string;
  topicCommentID: string;
  mailLogin: string;
  verificated: number;
}
const SpecificTopicCommentComponent: React.FunctionComponent<
  ISpecificTopicCommentProps
> = (props) => {
  return (
    <Card className="commentCard">
      <Stack className="commentProfile" gap={0} direction="horizontal">
        <Card.Img className="commentProfilePic" src={props.img}></Card.Img>

        <Stack gap={0} direction="vertical">
          <Stack direction="horizontal">
            <Card.Text className="commentProfileName">{props.name}</Card.Text>
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
          <Card.Text className="specTopicProfileTimeStamp">
            {props.time}
          </Card.Text>
        </Stack>
        {localStorage.getItem("user_moderator") === "0" ? (
          localStorage.getItem("user_mailLogin") === props.mailLogin ? (
            <DropdownTopicCommentAction
              login={props.mailLogin}
              topicCommentID={props.topicCommentID}
            />
          ) : (
            <></>
          )
        ) : (
          <DropdownTopicCommentAction
            login={props.mailLogin}
            topicCommentID={props.topicCommentID}
          />
        )}
      </Stack>
      <Card.Text className="commentText">{props.message}</Card.Text>
    </Card>
  );
};

export default SpecificTopicCommentComponent;
