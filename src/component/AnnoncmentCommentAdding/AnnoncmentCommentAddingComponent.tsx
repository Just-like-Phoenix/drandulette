import React from "react";

import "./AnnoncmentCommentAdding.scss";
import Card from "react-bootstrap/esm/Card";
import Stack from "react-bootstrap/esm/Stack";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import { postAnnouncmentComment } from "../../api/announcmentcomment.service";

interface FormData {
  text: string;
}

export interface IAnnoncmentCommentAddingProps {
  topicID: string;
  mailLogin: string;
  onSubmit: () => Promise<void>;
}
const AnnoncmentCommentAddingComponent: React.FunctionComponent<
  IAnnoncmentCommentAddingProps
> = (props) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const promise = postAnnouncmentComment(
      props.mailLogin,
      data.text,
      props.topicID
    )
      .then((response) => {
        setValue("text", "");
        props.onSubmit();
      })
      .catch((error) => {});
  };

  return (
    <Card className="specTopic">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Stack>
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
        </Stack>
      </Form>
    </Card>
  );
};

export default AnnoncmentCommentAddingComponent;
