import React from "react";

import "./Main.scss";
import Card from "react-bootstrap/esm/Card";
import ToggleButtonGroup from "react-bootstrap/esm/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/esm/ToggleButton";

export interface IMainProps {}
const MainPage: React.FunctionComponent<IMainProps> = (props) => {
  return (
    <div className="main">
      <Card className="filter">
        <ToggleButtonGroup
          className="filterButtons"
          size="sm"
          type="radio"
          name="options"
          defaultValue={1}
        >
          <ToggleButton id="tbg-radio-1" value={1}>
            Radio 1
          </ToggleButton>
          <ToggleButton id="tbg-radio-2" value={2}>
            Radio 2
          </ToggleButton>
          <ToggleButton id="tbg-radio-3" value={3}>
            Radio 3
          </ToggleButton>
        </ToggleButtonGroup>
      </Card>
    </div>
  );
};

export default MainPage;
