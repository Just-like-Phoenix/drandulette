import Card from "react-bootstrap/esm/Card";
import ToggleButton from "react-bootstrap/esm/ToggleButton";
import FileterComponent from "../../component/FilterComponent";

import "./Main.scss";
import ToggleButtonGroup from "react-bootstrap/esm/ToggleButtonGroup";
import Stack from "react-bootstrap/esm/Stack";
import React from "react";
import BrandsComponent from "../../component/BrandsComponent";
import AssistantComponent from "../../component/AssistantComponent";

export interface IMainProps {}
const MainPage: React.FunctionComponent<IMainProps> = (props) => {
  const [filterType, setfilterType] = React.useState("brands");

  console.log(filterType);

  const handleChange = (event: any) => {
    setfilterType(event.target.value);
  };

  const DisplayFilter = () => {
    var display = null;

    if (filterType === "brands") {
      display = <BrandsComponent />;
    }
    if (filterType === "filter") {
      display = <FileterComponent />;
    }
    if (filterType === "assistant") {
      display = <AssistantComponent />;
    }
    return display;
  };

  return (
    <div className="main">
      <Stack>
        <Card className="filter">
          <Stack gap={1}>
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
                value={"filter"}
                checked={filterType === "filter"}
                onChange={handleChange}
              >
                Фильтр
              </ToggleButton>
              <ToggleButton
                id="tbg-radio-3"
                value={"assistant"}
                checked={filterType === "assistant"}
                onChange={handleChange}
              >
                Помощник
              </ToggleButton>
            </ToggleButtonGroup>
            <DisplayFilter />
          </Stack>
        </Card>
        <Card className="filter"></Card>
      </Stack>
    </div>
  );
};

export default MainPage;
