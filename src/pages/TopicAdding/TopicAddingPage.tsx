import React from "react";

import "./TopicAdding.scss";
import Card from "react-bootstrap/esm/Card";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { postTopic } from "../../api/topic.service";
import { Stack } from "react-bootstrap";

interface FormData {
  theme: string;
  text: string;
}

export interface IMainProps {}
const MainPage: React.FunctionComponent<IMainProps> = (props) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    const email = localStorage.getItem("user_mailLogin");
    var status: String = "";
    postTopic(email as string, data.theme, data.text).catch(function (error) {
      status = error.response.status.toString();

      if (status !== "400") {
        navigate("/topics");
      } else {
        setError("root.400", {});
      }
    });
  };

  return (
    <div className="topicAddingMainDiv">
      <Card className="mainCard">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="block">
            <FloatingLabel controlId="floatingTheme" label="Тема обсуждения">
              <Form.Control
                type="text"
                placeholder="Тема обсуждения"
                maxLength={100}
                {...register("theme", { required: true })}
              />
              {errors.theme && (
                <Form.Text style={{ color: "#ff0000" }}>
                  Введите тему!
                </Form.Text>
              )}
            </FloatingLabel>
            <Form.Group style={{ marginTop: 20 }}>
              <FloatingLabel controlId="floatingText" label="Описание">
                <Form.Control
                  style={{ height: 260 }}
                  placeholder="Текст"
                  as="textarea"
                  rows={5}
                  maxLength={1000}
                  {...register("text", { required: true })}
                />
                {errors.text && (
                  <Form.Text style={{ color: "#ff0000" }}>
                    Введите описание!
                  </Form.Text>
                )}
              </FloatingLabel>
            </Form.Group>

            <Button style={{ marginTop: 20 }} type="submit">
              Создать
            </Button>
            {errors.root && (
              <Form.Text style={{ color: "#ff0000" }}>Ошибка!</Form.Text>
            )}
          </Form.Group>
        </Form>
      </Card>
    </div>
  );
};

export default MainPage;
