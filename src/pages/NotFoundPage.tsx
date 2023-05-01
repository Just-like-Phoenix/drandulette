import React from "react";

import "./NotFound.scss";

export interface IMainProps {}
const MainPage: React.FunctionComponent<IMainProps> = (props) => {
  return (
    <div className="main">
      <h1>404</h1>
    </div>
  );
};

export default MainPage;
