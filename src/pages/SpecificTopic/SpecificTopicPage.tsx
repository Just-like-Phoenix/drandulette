import React, { useEffect, useState } from "react";

import "./SpecificTopic.scss";
import { Topic } from "../../types/Topic.type";
import { TopicComment } from "../../types/Topic_comment.type";
import { useParams } from "react-router-dom";
import SpecificTopicCommentAddingComponent from "../../component/SpecificTopicCommentAdding/SpecificTopicCommentAddingComponent";
import SpecificTopicHeaderHeaderComponent from "../../component/SpecificTopicHeader/SpecificTopicHeaderComponent";
import { getTopicComments } from "../../api/topiccomment.service";
import SpecificTopicCommentComponent from "../../component/SpecificTopicComment/SpecificTopicCommentComponent";
import { getTopicByID } from "../../api/topic.service";
import Stack from "react-bootstrap/esm/Stack";
import { Button, Card } from "react-bootstrap";

export interface IMainProps {}
const MainPage: React.FunctionComponent<IMainProps> = (props) => {
  const [topic, setTopic] = useState<Topic>();
  const [coments, setComents] = useState<TopicComment[]>([]);
  const { topicID } = useParams();

  const getTopic = async () => {
    const topicPromise = getTopicByID(topicID as string);
    const topicArr = (await topicPromise).data;
    setTopic(topicArr[0]);
  };

  const getComents = async () => {
    const comentsPromise = getTopicComments(topicID as string);
    console.log((await comentsPromise).data);
    setComents((await comentsPromise).data);
  };

  useEffect(() => {
    getTopic();
  }, []);

  useEffect(() => {
    getComents();
  }, [topic]);

  return (
    <div className="specTopicMainDiv">
      <Stack style={{ padding: 30, paddingTop: 0 }}>
        <SpecificTopicHeaderHeaderComponent
          key={topic?.topicID}
          img={topic?.user.profilePic as string}
          topicName={topic?.user.name as string}
          topicTheme={topic?.topic_theme as string}
          topicText={topic?.topic_text as string}
          topicTime={topic?.time as string}
        />

        {localStorage.getItem("user_mailLogin") === null ? null : (
          <SpecificTopicCommentAddingComponent
            onSubmit={getComents}
            topicID={topicID as string}
          />
        )}

        <Card className="specTopic">
          <Card.Title>Комментарии</Card.Title>
        </Card>

        {coments.map((e) => {
          return (
            <SpecificTopicCommentComponent
              key={e.topic_commentID}
              img={e.user.profilePic}
              name={e.user.name}
              message={e.message}
              time={e.time}
            />
          );
        })}
      </Stack>
    </div>
  );
};

export default MainPage;
