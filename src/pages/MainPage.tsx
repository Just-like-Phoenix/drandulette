import Card from "react-bootstrap/esm/Card";
import ToggleButton from "react-bootstrap/esm/ToggleButton";

import "./Main.scss";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";

export interface IMainProps {}
const MainPage: React.FunctionComponent<IMainProps> = (props) => {
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Active", value: "1" },
    { name: "Radio", value: "2" },
    { name: "Radio", value: "3" },
  ];

  return (
    <div className="main">
      <Card className="filter">
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              style={{
                backgroundColor: "#FFFFFF",
                borderColor: "#D9D9D9",
                color: "black",
              }}
              key={idx}
              id={`radio-${idx}`}
              type="radio"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </Card>
    </div>
  );
};

export default MainPage;
