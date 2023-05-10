import React from "react";

import "./AnnoncmentSpecs.scss";
import Stack from "react-bootstrap/esm/Stack";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

export interface IAnnoncmentSpecsProps {
  year: string;
  mileage: string;
  body: string;
  fuelType: string;
  volume: string;
  hp: string;
  wheelDrive: string;
  transmission: string;
}
const AnnoncmentSpecsComponent: React.FunctionComponent<
  IAnnoncmentSpecsProps
> = (props) => {
  return (
    <Stack className="specs" gap={0}>
      <Container className="specsGrid">
        <Row>
          <Col className="specsLine">Год выпуска</Col>
          <Col>{props.year}</Col>
        </Row>
        <Row>
          <Col className="specsLine">Пробег</Col>
          <Col>{props.mileage}</Col>
        </Row>
        <Row>
          <Col className="specsLine">Кузов</Col>
          <Col>{props.body}</Col>
        </Row>
        <Row>
          <Col className="specsLine">Двигатель</Col>
          <Col>{props.fuelType}</Col>
        </Row>
        <Row>
          <Col className="specsLine">Объем</Col>
          <Col>{props.volume}</Col>
        </Row>
        <Row>
          <Col className="specsLine">Мощность</Col>
          <Col>{props.hp}</Col>
        </Row>
        <Row>
          <Col className="specsLine">Привод</Col>
          <Col>{props.wheelDrive}</Col>
        </Row>
        <Row>
          <Col className="specsLine">Коробка</Col>
          <Col>{props.transmission}</Col>
        </Row>
      </Container>
    </Stack>
  );
};

export default AnnoncmentSpecsComponent;
