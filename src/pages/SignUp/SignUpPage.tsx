import React from "react";
import Form from "react-bootstrap/esm/Form";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import Stack from "react-bootstrap/esm/Stack";
import fulllogo from "../assets/img/fulllogo.svg";

import "./SignUp.scss";
import Navbar from "react-bootstrap/esm/Navbar";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signUp } from "../../api/authorization.service";

interface FormData {
  email: string;
  phone: string;
  name: string;
  password: string;
  files: File[];
}

export interface ISignUpProps {}
const SignUp: React.FunctionComponent<ISignUpProps> = (props) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();

  const convertBase64 = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file as Blob);
      fileReader.onload = () => {
        resolve(fileReader.result as unknown as string);
      };
    });
  };

  const onSubmit = async (data: FormData) => {
    var imgBase64: string[] = [];
    console.log(imgBase64[0]);
    for (let i = 0; i < data.files.length; i++) {
      const res = await convertBase64(data.files[i]);
      imgBase64[i] = res;
    }
    var status: String = "";
    signUp(
      data.email,
      data.password,
      data.name,
      data.phone,
      imgBase64[0]
    ).catch(function (error) {
      status = error.response.status.toString();
    });
    if (status !== "400") {
      navigate("/");
    } else {
      setError("root.400", {});
    }
  };

  return (
    <div className="signupdiv">
      <Card className="signupcard">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={3} style={{ padding: "30px" }}>
            <Navbar.Brand className="logo" href="/">
              <img src={fulllogo} alt="" width={241} height={60} />
            </Navbar.Brand>

            <FloatingLabel controlId="floatingEmail" label="Почта">
              <Form.Control
                placeholder="name@example.com"
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

            <FloatingLabel controlId="floatingPhone" label="Телефон">
              <Form.Control
                placeholder="+375251111111"
                {...register("phone", {
                  required: true,
                  pattern: /^\+?[1-9][0-9]{7,14}$/,
                })}
              />
              {errors.phone && (
                <Form.Text style={{ color: "#ff0000" }}>
                  Введите телефон в формате (код страны)xxxххххххх
                </Form.Text>
              )}
            </FloatingLabel>

            <FloatingLabel controlId="floatingName" label="Имя">
              <Form.Control
                placeholder="Ivan"
                {...register("name", {
                  required: true,
                  pattern: /^[a-zA-Zа-яА-Я]+$/,
                })}
              />
              {errors.name && (
                <Form.Text style={{ color: "#ff0000" }}>
                  Имя должно содержать только буквы(без пробелов)
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

            <Form.Control
              type="file"
              accept=".png,.jpg,.jpeg"
              {...register("files")}
            />

            <Button size="lg" type="submit" variant="primary">
              Зарегистрироваться
            </Button>
            {errors.root && (
              <Form.Text style={{ color: "#ff0000" }}>
                Email уже использоется!
              </Form.Text>
            )}
          </Stack>
        </Form>
      </Card>
    </div>
  );
};

export default SignUp;
