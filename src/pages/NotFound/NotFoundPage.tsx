import React from "react";

import "./NotFound.scss";

export interface INotFoundProps {}
const NotFoundPage: React.FunctionComponent<INotFoundProps> = (props) => {
  return (
    <div className="notfound">
      <h1>404</h1>
    </div>
  );
};

export default NotFoundPage;
