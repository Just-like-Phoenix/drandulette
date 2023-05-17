import React from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Form from "react-bootstrap/esm/Form";
import Navbar from "react-bootstrap/esm/Navbar";
import Stack from "react-bootstrap/esm/Stack";

import fulllogo from "../assets/img/fulllogo.svg";

import "./Verification.scss";
import { useForm } from "react-hook-form";
import { signIn, verificateUser } from "../../api/authorization.service";
import { User } from "../../types/User.type";
import { useNavigate } from "react-router-dom";
import { InputGroup } from "react-bootstrap";

interface FormData {
  cardnumber: string;
  cardcvv: string;
  cardm: string;
  cardy: string;
  ammount: number;
}

export interface IVerificationProps {}
const VerificationPage: React.FunctionComponent<IVerificationProps> = (
  props
) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    verificateUser(localStorage.getItem("user_mailLogin") as string);
    navigate("/");
  };

  return (
    <div className="verificationdiv">
      <Card className="verificationcard">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap={3} style={{ padding: "30px" }}>
            <Navbar.Brand className="logo" href="/">
              <img src={fulllogo} alt="" width={241} height={60} />
            </Navbar.Brand>
            <Stack>
              <Form.Label>Номер карты:</Form.Label>
              <Form.Control
                {...register("cardnumber", {
                  required: true,
                  pattern:
                    /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                })}
              />
              {errors.cardnumber && (
                <Form.Text style={{ color: "#ff0000" }}>
                  Неверный номер!
                </Form.Text>
              )}
              <Stack direction="horizontal">
                <Stack style={{ width: "40%" }}>
                  <Form.Label>Годна до:</Form.Label>
                  <Stack direction="horizontal">
                    <Form.Control
                      style={{ marginRight: 10 }}
                      {...register("cardm", {
                        required: true,
                        pattern: /^(0[1-9]|1[0-2])$/,
                      })}
                    />
                    <Form.Control
                      style={{ marginRight: 10 }}
                      {...register("cardy", {
                        required: true,
                        pattern: /^([0-9]{2})$/,
                      })}
                    />
                  </Stack>
                </Stack>
                <Stack>
                  <Form.Label>CVV:</Form.Label>
                  <Form.Control
                    {...register("cardcvv", {
                      required: true,
                      pattern: /^([0-9]{3})$/,
                    })}
                  />
                </Stack>
              </Stack>
              <Stack>
                <Form.Label>Сумма:</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="number"
                    {...register("ammount", {
                      required: true,
                      min: 5,
                    })}
                  />
                  <InputGroup.Text>BYN</InputGroup.Text>
                </InputGroup>
                {errors.ammount && (
                  <Form.Text style={{ color: "#ff0000" }}>
                    Минимальная сумма 5 BYN!
                  </Form.Text>
                )}
              </Stack>
            </Stack>
            <Button size="lg" type="submit" variant="primary">
              Пожертвовать
            </Button>
          </Stack>
        </Form>
      </Card>
    </div>
  );
};

export default VerificationPage;
