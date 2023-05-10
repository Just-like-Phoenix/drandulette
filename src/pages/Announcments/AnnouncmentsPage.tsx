import React, { useEffect, useState } from "react";

import "./Announcments.scss";
import Stack from "react-bootstrap/esm/Stack";
import Card from "react-bootstrap/esm/Card";
import Cars from "../../cars.json";
import { getAnnouncmentByAll } from "../../api/announcment.service";
import { Announcement } from "../../types/Announcement.type";
import AnnouncmentComponent from "../../component/AnnouncmentCard/AnnouncmentCardComponent";
import {
  Button,
  FloatingLabel,
  Form,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import { useForm } from "react-hook-form";

interface FormData {
  brand: string;
  model: string;
}

export interface IAnnouncmentsProps {}
const AnnouncmentsPage: React.FunctionComponent<IAnnouncmentsProps> = (
  props
) => {
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [page, setPage] = useState(0);
  const [announcments, setAnnouncments] = useState<Announcement[]>([]);
  const [text, setText] = useState("");
  const [filterType, setfilterType] = useState("brands");
  const [models, setModels] = useState<string[]>([]);
  const { register } = useForm<FormData>();

  var brands = Cars.map((e) => e.name);

  const onBrandChange = async (brand: string) => {
    setBrand(brand);
    Cars.forEach((e) => {
      if (e.name === brand) {
        setModels(e.models.map((e) => e.name));
      }
    });
  };

  const handleChange = (event: any) => {
    setfilterType(event.target.value);
  };
  const getData = async (text: string) => {
    const promise = getAnnouncmentByAll(text, brand, model, 1, page);
    setAnnouncments((await promise).data);
    console.log((await promise).data);
  };

  useEffect(() => {
    console.log(brand + " " + model);
    getData(model);
  }, [page, brand, model]);

  useEffect(() => {
    console.log(text);
    getData(text);
  }, [page, text]);

  return (
    <div className="announcmentsPageDiv">
      <Stack style={{ padding: 30, borderColor: "transparent !important" }}>
        <Card className="filterCard">
          <Stack gap={1} className="filterStack">
            <ToggleButtonGroup
              className="filtrButtons"
              type="radio"
              name="options"
              defaultValue={"brands"}
            >
              <ToggleButton
                id="tbg-radio-1"
                value={"brands"}
                checked={filterType === "brands"}
                onChange={handleChange}
              >
                Марки
              </ToggleButton>
              <ToggleButton
                id="tbg-radio-2"
                value={"search"}
                checked={filterType === "search"}
                onChange={handleChange}
              >
                Поиск
              </ToggleButton>
            </ToggleButtonGroup>
            {filterType === "brands" ? (
              <Form>
                <Stack direction="horizontal" gap={1}>
                  <Form.Select
                    size="lg"
                    style={{ height: 58 }}
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
                    size="lg"
                    style={{ height: 58 }}
                    defaultValue={0}
                    disabled={models.length !== 0 ? false : true}
                    {...register("model", {
                      required: true,
                    })}
                    onChange={(e) => setModel(e.currentTarget.value)}
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
            ) : (
              <Form>
                <FloatingLabel controlId="floatingInput" label="Поиск">
                  <Form.Control
                    placeholder="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </FloatingLabel>
              </Form>
            )}
          </Stack>
        </Card>
        <Card className="announcmentsCard" style={{ paddingTop: 30 }}>
          {announcments.map((e) => {
            return (
              <AnnouncmentComponent
                key={e.announcementID}
                announcementID={e.announcementID}
                price={e.price}
                brand={e.brand}
                model={e.model}
                year={e.year}
                mileage={e.mileage}
                text={e.sellersComment}
                pic={e.pics[0]}
              />
            );
          })}
          <Stack style={{ margin: "auto" }} direction="horizontal" gap={2}>
            {page === 0 ? null : (
              <Button
                className="moreAnnouncmentsButtons"
                onClick={(e) => setPage(page - 1)}
              >
                {"<"}
              </Button>
            )}
            {announcments.length < 6 ? null : (
              <Button
                className="moreAnnouncmentsButton"
                onClick={(e) => setPage(page + 1)}
              >
                {">"}
              </Button>
            )}
          </Stack>
        </Card>
      </Stack>
    </div>
  );
};

export default AnnouncmentsPage;
