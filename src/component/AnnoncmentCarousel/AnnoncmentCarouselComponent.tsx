import React from "react";

import "./AnnoncmentCarousel.scss";
import Card from "react-bootstrap/esm/Card";
import Carousel from "react-bootstrap/esm/Carousel";

export interface IAnnoncmentCarouselProps {
  imgs: string[] | undefined;
}
const AnnoncmentCarouselComponent: React.FunctionComponent<
  IAnnoncmentCarouselProps
> = (props) => {
  console.log(props.imgs);
  const tmp: string[] = props.imgs as string[];
  return (
    <Card className="annoncmentPicsCard">
      <Carousel
        interval={null}
        slide={false}
        variant="dark"
        className="annoncmentCarousel"
      >
        {tmp.map((e) => {
          return (
            <Carousel.Item
              key={e.length}
              style={{ textAlign: "center" }}
              className="annoncmentCarouselItem"
            >
              <img
                style={{ display: "inline-block", height: 780 }}
                src={e}
                alt=""
              />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Card>
  );
};

export default AnnoncmentCarouselComponent;
