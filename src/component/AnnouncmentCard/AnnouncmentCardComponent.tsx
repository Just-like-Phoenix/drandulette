import React, { useEffect, useState } from "react";

import "./AnnouncmentCard.scss";
import {
  Card,
  Col,
  Container,
  Nav,
  OverlayTrigger,
  Row,
  Stack,
  Tooltip,
} from "react-bootstrap";
import { currency } from "../../api/currencyapi.service";

export type cur = {
  code: string;
  value: number;
};

export interface IAnnouncmentProps {
  announcementID: string;
  price: string;
  brand: string;
  model: string;
  year: string;
  mileage: string;
  text: string;
  pic: string;
}
const AnnouncmentComponent: React.FunctionComponent<IAnnouncmentProps> = (
  props
) => {
  const [convert, setConvert] = useState<number>(0);

  const renderTooltip = (price: string) => (
    <Tooltip id="button-tooltip" {...props}>
      {parseInt(((price as unknown as number) * convert).toString())} USD
    </Tooltip>
  );

  const getData = async () => {
    const promise = (await currency()).data;
    let currencie: cur = { code: "USD", value: 0 };
    Object.values(promise.data).map((item) => {
      currencie = item as cur;
    });
    console.log(currencie.value);
    setConvert(currencie.value);
  };

  return (
    <div className="carCardMain">
      <Card className="carCard">
        <Stack direction="horizontal">
          <Nav.Link
            className="carCardImg"
            href={"/announcments/" + props.announcementID}
          >
            <Card.Img className="carCardImg" src={props.pic} />
          </Nav.Link>
          <Stack gap={1} style={{ padding: 10 }}>
            <Stack direction="horizontal">
              <Nav.Link
                className="carCardBrand"
                href={"/announcments/" + props.announcementID}
              >
                <Card.Title className="carCardBrand">
                  {props.brand + " " + props.model}
                </Card.Title>
              </Nav.Link>
              <OverlayTrigger
                placement="right"
                delay={{ show: 250, hide: 400 }}
                onEnter={(e) => getData()}
                overlay={renderTooltip(props.price)}
              >
                <Card.Text className="carCardPrice">
                  {props.price + " BYN"}
                </Card.Text>
              </OverlayTrigger>
            </Stack>
            <Container style={{ padding: 0 }}>
              <Row className="cardRow">
                <Col className="cardFCol">Пробег</Col>
                <Col className="cardSCol">{props.mileage + " км"}</Col>
              </Row>
              <Row className="cardRow">
                <Col className="cardFCol">Год выпуска</Col>
                <Col className="cardSCol">{props.year}</Col>
              </Row>
            </Container>
            <Card.Text className="topicTitle">
              {props.text.length < 100
                ? props.text
                : props.text.slice(0, 100) + "..."}
            </Card.Text>
          </Stack>
        </Stack>
      </Card>
    </div>
  );
};

export default AnnouncmentComponent;
