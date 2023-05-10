import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/esm/Form";
import Navbar from "react-bootstrap/esm/Navbar";
import Stack from "react-bootstrap/esm/Stack";

import fulllogo from "../assets/img/fulllogo.svg";

import "./SignIn.scss";
import { useForm } from "react-hook-form";
import { signIn } from "../../api/authorization.service";
import { User } from "../../types/User.type";
import { useNavigate } from "react-router-dom";

interface FormData {
  email: string;
  password: string;
}

export interface ISignInProps {}
const SignIn: React.FunctionComponent<ISignInProps> = (props) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    const promise = signIn(data.email, data.password);
    const status: String = (await promise).status.toString();
    const user: User = (await promise).data;

    if (status !== "204") {
      localStorage.setItem("user_mailLogin", user.mailLogin);
      localStorage.setItem("user_profilePic", user.profilePic);
      localStorage.setItem("user_name", user.name);
      localStorage.setItem("user_moderator", user.moderator.toString());
      navigate("/");
    } else {
      setError("root.204", {});
    }
  };

  return (
    <div className="signindiv">
      <Card className="signincard">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={3} style={{ padding: "30px" }}>
            <Navbar.Brand className="logo" href="/">
              <img src={fulllogo} alt="" width={241} height={60} />
            </Navbar.Brand>

            <FloatingLabel controlId="floatingEmail" label="Почта">
              <Form.Control
                placeholder="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                })}
              />
              {errors.email && (
                <Form.Text style={{ color: "#ff0000" }}>
                  Введите email в формате name@example.com
                </Form.Text>
              )}
            </FloatingLabel>

            <FloatingLabel controlId="floatingPassword" label="Пароль">
              <Form.Control
                type="password"
                placeholder="password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
                })}
              />
              {errors.password && (
                <Form.Text style={{ color: "#ff0000" }}>
                  Пароль должен содержать не менее 8 символов и включать как
                  минимум 1 цифру 1 прописную 1 строчную букву латинского
                  алфавита!
                </Form.Text>
              )}
            </FloatingLabel>

            <Button size="lg" type="submit" variant="primary">
              Войти
            </Button>
            {errors.root && (
              <Form.Text style={{ color: "#ff0000" }}>
                Такого пользователя нет!
              </Form.Text>
            )}
          </Stack>
        </Form>
      </Card>
    </div>
  );
};

export default SignIn;
