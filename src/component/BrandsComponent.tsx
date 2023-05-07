import React, { useState } from "react";

import "./Brands.scss";
import Cars from "../cars.json";
import Form from "react-bootstrap/esm/Form";
import { Stack } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface FormData {
  brand: string;
  model: string;
}

export interface IBrandsProps {}
const BrandsComponent: React.FunctionComponent<IBrandsProps> = (props) => {
  const {
    register,
    handleSubmit,
    setError,
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

  return (
    <div className="brandFilter">
      <Form>
        <Stack direction="horizontal" gap={1}>
          <Form.Select
            defaultValue={0}
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
          <Form.Select
            defaultValue={0}
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
        </Stack>
      </Form>
    </div>
  );
};

export default BrandsComponent;
