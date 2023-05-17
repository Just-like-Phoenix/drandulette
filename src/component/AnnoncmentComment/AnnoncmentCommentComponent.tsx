import React from "react";

import verificated from "../assets/img/done.svg";
import "./AnnoncmentComment.scss";
import Card from "react-bootstrap/esm/Card";
import Stack from "react-bootstrap/esm/Stack";
import { DropdownAnnoncmentCommentAction } from "../ButtonComponent";

export interface IAnnoncmentCommentProps {
  mailLogin: string;
  name: string;
  message: string;
  time: string;
  img: string;
  commentID: string;
  verificated: number;
}
const AnnoncmentCommentComponent: React.FunctionComponent<
  IAnnoncmentCommentProps
> = (props) => {
  const DropdownSelector = () => {
    if (localStorage.getItem("user_moderator") === "0") {
      if (localStorage.getItem("user_mailLogin") === props.mailLogin) {
        return <DropdownAnnoncmentCommentAction commentID={props.commentID} />;
      }
    } else {
      return <DropdownAnnoncmentCommentAction commentID={props.commentID} />;
    }
    return <></>;
  };

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
        <DropdownSelector />
      </Stack>
      <Card.Text className="commentText">{props.message}</Card.Text>
    </Card>
  );
};

export default AnnoncmentCommentComponent;
