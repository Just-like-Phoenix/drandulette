import Card from "react-bootstrap/esm/Card";

import "./Main.scss";
import React, { useEffect, useState } from "react";
import { Topic } from "../../types/Topic.type";
import { Announcement } from "../../types/Announcement.type";
import { getAnnouncmentByAll } from "../../api/announcment.service";
import { getTopicByProbableName } from "../../api/topic.service";
import Stack from "react-bootstrap/esm/Stack";
import TopicComponent from "../../component/Topic/TopicComponent";
import AnnouncmentComponent from "../../component/AnnouncmentCard/AnnouncmentCardComponent";
import { Nav } from "react-bootstrap";

export interface IMainProps {}
const MainPage: React.FunctionComponent<IMainProps> = (props) => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [announcments, setAnnouncments] = useState<Announcement[]>([]);

  const getData = async () => {
    const promiseAnnouncment = getAnnouncmentByAll("", "", "", 1, 0);
    const promiseTopic = getTopicByProbableName("", 0);
    setAnnouncments((await promiseAnnouncment).data);
    setTopics((await promiseTopic).data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="mainPageDiv">
      <Card className="mainCard">
        <Card className="mainCard">
          <Nav.Link
            href={"/announcments"}
            className="topicTitle"
            style={{ color: "black", fontWeight: "bold", fontSize: 30 }}
          >
            Обявления
          </Nav.Link>
        </Card>

        <Stack>
          {announcments.map((e) => {
            return (
              <AnnouncmentComponent
                key={e.announcementID}
                announcementID={e.announcementID}
                price={e.price}
                brand={e.brand}
                model={e.model}
                year={e.year}
                mileage={e.mileage}
                text={e.sellersComment}
                pic={e.pics[0]}
              />
            );
          })}

          <Card className="mainCard">
            <Nav.Link
              href={"/topics"}
              className="topicTitle"
              style={{ color: "black", fontWeight: "bold", fontSize: 30 }}
            >
              Топики
            </Nav.Link>
          </Card>

          {topics.map((e) => {
            return (
              <TopicComponent
                key={e.topicID}
                topicName={e.user.name}
                topicPic={e.user.profilePic}
                topicTime={e.time}
                topicID={e.topicID}
                topicTheme={e.topic_theme}
                topicText={e.topic_text}
              />
            );
          })}
        </Stack>
      </Card>
    </div>
  );
};

export default MainPage;
