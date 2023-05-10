import React from "react";

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
  const renderTooltip = (props: any) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );

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
                overlay={renderTooltip}
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
