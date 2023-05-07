import React from "react";

import "./Filter.scss";
import Form from "react-bootstrap/esm/Form";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Button from "react-bootstrap/esm/Button";

export interface IFilterProps {}
const FilterComponent: React.FunctionComponent<IFilterProps> = (props) => {
  return (
    <div>
      <Form>
        <FloatingLabel controlId="floatingInput" label="Почта">
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Пароль">
          <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>

        <Button size="lg" type="submit" variant="primary">
          Войти
        </Button>
      </Form>
    </div>
  );
};

export default FilterComponent;
