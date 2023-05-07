import React, { useEffect, useState } from "react";

import "./Topics.scss";
import Card from "react-bootstrap/esm/Card";
import { Button, Form, InputGroup, Stack } from "react-bootstrap";
import { getAllTopics } from "../../api/topic.service";
import { Topic } from "../../types/Topic.type";
import TopicComponent from "../../component/TopicComponent";

export interface IMainProps {}
const MainPage: React.FunctionComponent<IMainProps> = (props) => {
  const [topics, setTopics] = useState<Topic[]>([]);

  const getData = async () => {
    const promise = getAllTopics();
    const status: String = (await promise).status.toString();
    setTopics((await promise).data);
    if (status === "204") {
      console.log(status);
    }
    console.log(topics);
  };

  useEffect(() => {
    getData();
  }, []);
  console.log(topics);
  return (
    <div className="topicMainDiv">
      <Stack style={{ padding: 30 }}>
        <Stack direction="horizontal" className="searchBar" gap={1}>
          <InputGroup style={{ width: "80%" }}>
            <Form.Control placeholder="Тема" />
          </InputGroup>
          <Button variant="primary" style={{ height: 38, width: "10%" }}>
            Найти
          </Button>
          <div className="vr" />
          <Button
            href="/topicadding"
            variant="primary"
            style={{ height: 38, width: "10%" }}
          >
            Создать
          </Button>
        </Stack>
        <Stack>
          {}
          {topics.map((e) => {
            return (
              <TopicComponent
                key={e.topicID}
                topicName={e.user.name}
                topicTime={e.time}
                topicID={e.topicID}
                topicTheme={e.topic_theme}
                topicText={e.topic_text}
              />
            );
          })}
        </Stack>
      </Stack>
    </div>
  );
};

export default MainPage;
