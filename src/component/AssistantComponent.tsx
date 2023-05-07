import React from "react";

import "./Assistant.scss";
import Form from "react-bootstrap/esm/Form";

export interface IAssistantProps {}
const AssistantComponent: React.FunctionComponent<IAssistantProps> = (
  props
) => {
  return (
    <div>
      <Form></Form>
    </div>
  );
};

export default AssistantComponent;
