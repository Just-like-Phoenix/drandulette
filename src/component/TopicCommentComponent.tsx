import React from "react";

import "./Topic.scss";
import Card from "react-bootstrap/esm/Card";
import Stack from "react-bootstrap/esm/Stack";
import Nav from "react-bootstrap/esm/Nav";

export interface ITopicProps {
  topic_commentID: string;
  message: string;
  time: string;
}
const TopicComponent: React.FunctionComponent<ITopicProps> = (props) => {
  return (
    <Card className="commentFrame">
      <Stack gap={0} direction="horizontal">
        <Card.Img className="specTopicProfilePic"></Card.Img>
        <Stack gap={0} direction="vertical">
          <Card.Text className="specTopicProfileName">Никита</Card.Text>
          <Card.Text className="specTopicProfileTimeStamp">
            01.05.2023 20:38
          </Card.Text>
        </Stack>
      </Stack>
      <Card.Text className="specTopicResponse">
        Рандомный ответ на рандомный вопрос. И кста у тебя мать - шлюха XD
      </Card.Text>
    </Card>
  );
};

export default TopicComponent;
