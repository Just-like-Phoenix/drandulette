//Part of spec topic page to add comm

import Card from "react-bootstrap/esm/Card";
import { Button, Form, Stack } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { postTopicComment } from "../../api/topiccomment.service";
import { useEffect } from "react";

interface FormData {
  text: string;
}

export interface ISpecificTopicCommentAddingProps {
  topicID: string;
  onSubmit: () => Promise<void>;
}
const SpecificTopicCommentAddingComponent: React.FunctionComponent<
  ISpecificTopicCommentAddingProps
> = (props) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const email = localStorage.getItem("user_mailLogin");
    postTopicComment(data.text, email as string, props.topicID)
      .then(function (response) {
        setValue("text", "");
        props.onSubmit();
      })
      .catch(function (error) {
        const status = error.response.status.toString();
        console.log(status);
      });
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

export default SpecificTopicCommentAddingComponent;
