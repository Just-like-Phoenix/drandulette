import React from "react";
import Navbar from "react-bootstrap/esm/Navbar";

import "./Footer.scss";

export interface IFooterProps {}
const FooterComponent: React.FunctionComponent<IFooterProps> = (props) => {
  return (
    <div>
      <Navbar className="footer" bg="primary"></Navbar>
    </div>
  );
};

export default FooterComponent;
