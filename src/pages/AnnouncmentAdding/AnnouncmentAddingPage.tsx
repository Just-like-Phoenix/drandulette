import React, { useState } from "react";

import "./AnnouncmentAdding.scss";
import Card from "react-bootstrap/esm/Card";
import { Button, FloatingLabel, InputGroup, Stack } from "react-bootstrap";
import Form from "react-bootstrap/esm/Form";
import { useForm } from "react-hook-form";
import Cars from "../../cars.json";
import { useNavigate } from "react-router";
import { postAnnouncment } from "../../api/announcment.service";
import { stat } from "fs";

interface FormData {
  price: number;
  brand: string;
  model: string;
  year: number;
  mileage: number;
  transmission: string;
  hp: number;
  volume: number;
  fuelType: string;
  body: string;
  wheelDrive: string;
  files: File[];
  ex400: string;
  ex422: string;
}

export interface IMainProps {}
const MainPage: React.FunctionComponent<IMainProps> = (props) => {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm<FormData>();
  const navigate = useNavigate();
  var brands = Cars.map((e) => e.name);
  const [models, setModels] = useState<string[]>([]);

  const onBrandChange = async (brand: string) => {
    Cars.forEach((e) => {
      if (e.name === brand) {
        setModels(e.models.map((e) => e.name));
      }
    });
  };

  const convertBase64 = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result as unknown as string);
      };
    });
  };

  const onSubmit = async (data: FormData) => {
    const email = localStorage.getItem("user_mailLogin");
    var status: string = "";
    var imgBase64: string[] = [];
    for (let i = 0; i < data.files.length; i++) {
      const res = await convertBase64(data.files[i]);
      imgBase64[i] = res;
    }
    console.log(imgBase64);
    postAnnouncment(
      data.price,
      data.brand,
      data.model,
      data.year,
      data.mileage,
      data.transmission,
      data.hp,
      data.volume,
      data.fuelType,
      data.body,
      data.wheelDrive,
      email as string,
      imgBase64
    )
      .then(function (response) {
        console.log(response.status);
        navigate("/");
      })
      .catch(function (error) {
        status = error.response.status.toString();
        if (status === "400") {
          setError("ex400", {});
        }
        if (status === "422") {
          setError("ex422", {});
        }
      });
  };

  const onFormaChange = () => {
    clearErrors(["ex422", "ex400"]);
  };

  return (
    <div className="annoncmentAddingDiv">
      <Card className="mainCard">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          onChange={(e) => onFormaChange()}
        >
          <Stack direction="horizontal">
            <Stack className="selectable">
              <Form.Select
                style={{ height: 58 }}
                defaultValue={"0"}
                {...register("brand", {
                  required: true,
                })}
                onChange={(e) => onBrandChange(e.currentTarget.value)}
              >
                <option value="0" disabled>
                  Марка
                </option>
                {brands.map((element) => {
                  return (
                    <option key={element} value={element}>
                      {element.toString()}
                    </option>
                  );
                })}
              </Form.Select>
              {errors.brand && (
                <Form.Text style={{ color: "#ff0000" }}>
                  Выберите марку!
                </Form.Text>
              )}
              <Form.Select
                style={{ height: 58 }}
                defaultValue={"0"}
                disabled={models.length !== 0 ? false : true}
                {...register("model", {
                  required: true,
                })}
              >
                <option value="0" disabled>
                  Модель
                </option>
                {models.map((element) => {
                  if (element.length !== 0) {
                    return (
                      <option key={element} value={element}>
                        {element.toString()}
                      </option>
                    );
                  }
                  return <></>;
                })}
              </Form.Select>
              {errors.model && (
                <Form.Text style={{ color: "#ff0000" }}>
                  Выберите модель!
                </Form.Text>
              )}
              <Form.Select
                style={{ height: 58 }}
                {...register("body", {
                  required: true,
                })}
              >
                <option value={"Седан"}>Седан</option>
                <option value={"Хэтчбэк"}>Хэтчбэк</option>
                <option value={"Универсал"}>Универсал</option>
                <option value={"Купе"}>Купе</option>
                <option value={"Кабриолет"}>Кабриолет</option>
                <option value={"Тарго"}>Тарго</option>
                <option value={"Родстер"}>Родстер</option>
                <option value={"Минивэн"}>Минивэн</option>
                <option value={"Фургон"}>Фургон</option>
                <option value={"Пикап"}>Пикап</option>
                <option value={"Лимузин"}>Лимузин</option>
                <option value={"Внедорожник"}>Внедорожник</option>
                <option value={"Микроавтобус"}>Микроавтобус</option>
              </Form.Select>
              {errors.body && (
                <Form.Text style={{ color: "#ff0000" }}>
                  Выберите тип кузова!
                </Form.Text>
              )}
              <Form.Select
                style={{ height: 58 }}
                {...register("transmission", {
                  required: true,
                })}
              >
                <option value={"Ручная"}>Ручная</option>
                <option value={"Автоматическая"}>Автоматическая</option>
                <option value={"Секвентальная"}>Секвентальная</option>
              </Form.Select>
              {errors.transmission && (
                <Form.Text style={{ color: "#ff0000" }}>
                  Выберите тип трансмиссии!
                </Form.Text>
              )}
              <Form.Select
                style={{ height: 58 }}
                {...register("fuelType", {
                  required: true,
                })}
              >
                <option value={"Бензин"}>Бензин</option>
                <option value={"Дизель"}>Дизель</option>
                <option value={"Электричество"}>Электричество</option>
              </Form.Select>
              {errors.fuelType && (
                <Form.Text style={{ color: "#ff0000" }}>
                  Выберите тип топлива!
                </Form.Text>
              )}
            </Stack>
            <Stack className="writable">
              <FloatingLabel label="Год">
                <Form.Control
                  type="Text"
                  placeholder="Год"
                  size="lg"
                  {...register("year", {
                    required: true,
                  })}
                />
              </FloatingLabel>
              {errors.year && (
                <Form.Text style={{ color: "#ff0000" }}>
                  Введите год производства!
                </Form.Text>
              )}
              <FloatingLabel label="Объём">
                <Form.Control
                  size="lg"
                  type="number"
                  placeholder="Объём"
                  min={0}
                  step={0.1}
                  {...register("volume", {
                    required: true,
                  })}
                />
              </FloatingLabel>
              {errors.volume && (
                <Form.Text style={{ color: "#ff0000" }}>
                  Введите объем двигателя!
                </Form.Text>
              )}
              <FloatingLabel label="Лошадиные силы">
                <Form.Control
                  size="lg"
                  type="number"
                  placeholder="Лошадиные силы"
                  min={0}
                  {...register("hp", {
                    required: true,
                  })}
                />
              </FloatingLabel>
              {errors.hp && (
                <Form.Text style={{ color: "#ff0000" }}>
                  Введите мощность двигателя!
                </Form.Text>
              )}
              <Form.Select
                style={{ height: 58 }}
                {...register("wheelDrive", {
                  required: true,
                })}
              >
                <option value={"Полныйы"}>Полныйы</option>
                <option value={"Задний"}>Задний</option>
                <option value={"Передний"}>Передний</option>
              </Form.Select>
              {errors.wheelDrive && (
                <Form.Text style={{ color: "#ff0000" }}>
                  Выберите тип привода!
                </Form.Text>
              )}
              <FloatingLabel label="Пробег">
                <Form.Control
                  size="lg"
                  type="number"
                  placeholder="Пробег"
                  min={0}
                  step={1}
                  {...register("mileage", {
                    required: true,
                  })}
                />
              </FloatingLabel>
              {errors.mileage && (
                <Form.Text style={{ color: "#ff0000" }}>
                  Введите пробег!
                </Form.Text>
              )}
            </Stack>
          </Stack>
          <Stack style={{ marginTop: 30 }} gap={3}>
            <Form.Control
              type="file"
              multiple
              accept=".png,.jpg,.jpeg"
              {...register("files")}
            />
            <InputGroup style={{ width: 280, margin: "auto" }}>
              <Form.Control
                type="number"
                placeholder="Цена"
                min={0}
                {...register("price", {
                  required: true,
                })}
              />
              <InputGroup.Text>BYN</InputGroup.Text>
            </InputGroup>
            {errors.price && (
              <Form.Text style={{ color: "#ff0000" }}>Введите цену!</Form.Text>
            )}
            <Button type="submit" style={{ width: 140, margin: "auto" }}>
              Разместить
            </Button>
            {errors.ex422 && (
              <Form.Text style={{ color: "#ff0000" }}>
                Изоброжения не прошли проверку!
              </Form.Text>
            )}
            {errors.ex400 && (
              <Form.Text style={{ color: "#ff0000" }}>Ошибка!</Form.Text>
            )}
          </Stack>
        </Form>
      </Card>
    </div>
  );
};

export default MainPage;
