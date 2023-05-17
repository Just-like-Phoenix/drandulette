import React, { useEffect, useState } from "react";

import "./Topics.scss";
import { Button, Form, InputGroup, Stack } from "react-bootstrap";
import { getTopicByProbableName } from "../../api/topic.service";
import { Topic } from "../../types/Topic.type";
import TopicComponent from "../../component/Topic/TopicComponent";

export interface IMainProps {}
const MainPage: React.FunctionComponent<IMainProps> = (props) => {
  const [text, setText] = useState("");
  const [page, setPage] = useState(0);
  const [topics, setTopics] = useState<Topic[]>([]);

  const getData = async (text: string) => {
    const promise = getTopicByProbableName(text, page);
    const status: String = (await promise).status.toString();
    setTopics((await promise).data);
    if (status === "204") {
      console.log(status);
    }
  };

  useEffect(() => {
    console.log(text);
    getData(text);
  }, [page, text]);

  return (
    <div className="topicMainDiv">
      <Stack style={{ padding: 30 }}>
        <Stack direction="horizontal" className="searchBar" gap={1}>
          <InputGroup>
            <Form.Control
              placeholder="Тема"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </InputGroup>

          {localStorage.getItem("user_moderator") === "0" ? (
            localStorage.getItem("user_banned") === "0" ? (
              <>
                <div className="vr" />
                <Button
                  href="/topicadding"
                  variant="primary"
                  style={{ height: 38, width: "10%" }}
                >
                  Создать
                </Button>
              </>
            ) : null
          ) : (
            <></>
          )}
        </Stack>
        <Stack>
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
                verificated={e.user.verificated}
              />
            );
          })}
          <Stack style={{ margin: "auto" }} direction="horizontal" gap={2}>
            {page === 0 ? null : (
              <Button
                className="moreTopicsButton"
                onClick={(e) => setPage(page - 1)}
              >
                {"<"}
              </Button>
            )}
            {topics.length < 6 ? null : (
              <Button
                className="moreTopicsButton"
                onClick={(e) => setPage(page + 1)}
              >
                {">"}
              </Button>
            )}
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default MainPage;
