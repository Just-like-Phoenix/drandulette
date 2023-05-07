import React, { useEffect, useState } from "react";

import "./SpecificTopic.scss";
import Card from "react-bootstrap/esm/Card";
import { Button, FloatingLabel, Form, Stack } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Topic } from "../../types/Topic.type";
import { TopicComment } from "../../types/Topic_comment.type";
import { getAllTopics } from "../../api/topic.service";
import { useParams } from "react-router-dom";

interface FormData {
  text: string;
}

export interface IMainProps {}
const MainPage: React.FunctionComponent<IMainProps> = (props) => {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [coments, setComents] = useState<TopicComment[]>([]);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();

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

  return (
    <div className="specTopicMainDiv">
      <Stack style={{ padding: 30, paddingTop: 0 }}>
        <Card className="specTopic">
          <Stack
            gap={0}
            direction="horizontal"
            style={{ marginBottom: 30, width: "100%" }}
          >
            <Card.Title className="specTopicTitle">{}</Card.Title>
            <Stack gap={0} direction="horizontal" className="specTopicProfile">
              <Card.Img className="specTopicProfilePic"></Card.Img>
              <Stack gap={0} direction="vertical">
                <Card.Text className="specTopicProfileName">Никита</Card.Text>
                <Card.Text className="specTopicProfileTimeStamp">
                  01.05.2023 20:38
                </Card.Text>
              </Stack>
            </Stack>
          </Stack>
          <Card.Text className="specTopicText">{}</Card.Text>
        </Card>
        <Card className="specTopic">
          <Form>
            <Form.Label>Введите сообщение</Form.Label>
            <Form.Control
              style={{ height: 120 }}
              placeholder="Текст"
              as="textarea"
              maxLength={1000}
              {...register("text", { required: true })}
            />
            {errors.text && (
              <Form.Text style={{ color: "#ff0000" }}>
                Поле не может быть пустым!
              </Form.Text>
            )}

            <Button
              variant="primary"
              type="submit"
              style={{ width: 110, marginTop: 5 }}
            >
              Ответить
            </Button>
          </Form>
        </Card>
      </Stack>
    </div>
  );
};

export default MainPage;
