import React, { useEffect, useState } from "react";

import "./SpecificAnnouncement.scss";
import Card from "react-bootstrap/esm/Card";
import Stack from "react-bootstrap/esm/Stack";
import AnnoncmentSpecsComponent from "../../component/AnnoncmentSpecs/AnnoncmentSpecsComponent";
import AnnoncmentUserComponent from "../../component/AnnoncmentUser/AnnoncmentUserComponent";
import AnnoncmentCarouselComponent from "../../component/AnnoncmentCarousel/AnnoncmentCarouselComponent";
import AnnoncmentBarComponent from "../../component/AnnoncmentBar/AnnoncmentBarComponent";
import AnnoncmentDescriptionComponent from "../../component/AnnoncmentDescription/AnnoncmentDescriptionComponent";
import { useParams } from "react-router-dom";
import { getAnnouncmentById } from "../../api/announcment.service";
import { Announcement } from "../../types/Announcement.type";
import { error } from "console";
import Spinner from "react-bootstrap/esm/Spinner";
import { render } from "@testing-library/react";

export interface ISpecificAnnouncementProps {}
const SpecificAnnouncementPage: React.FunctionComponent<
  ISpecificAnnouncementProps
> = (props) => {
  const [announcment, setAnnouncement] = useState<Announcement>();
  const [isLoading, setLoading] = useState(true);
  const { announcmentID } = useParams();

  const getAnnouncement = async () => {
    await getAnnouncmentById(announcmentID as string)
      .then((response) => {
        const tmp = response.data;
        setAnnouncement(tmp[0]);

        console.log(tmp);
        setLoading(false);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getAnnouncement();
  }, []);
  if (isLoading) {
    return (
      <div className="specAnnoncmentSpinerDiv">
        <Spinner className="specAnnoncmentSpiner" animation="border" />
      </div>
    );
  }
  return (
    <div className="specAnnoncmentDiv">
      <Card className="mainAnnoncmentCard">
        <AnnoncmentBarComponent
          brand={announcment?.brand as string}
          model={announcment?.model as string}
          year={announcment?.year as string}
          price={announcment?.price as string}
        />

        <AnnoncmentCarouselComponent imgs={announcment?.pics} />
        <Stack direction="horizontal">
          <AnnoncmentSpecsComponent
            year={announcment?.year as string}
            mileage={announcment?.mileage as string}
            body={announcment?.body as string}
            fuelType={announcment?.fuelType as string}
            volume={announcment?.volume as string}
            hp={announcment?.hp as string}
            wheelDrive={announcment?.wheelDrive as string}
            transmission={announcment?.transmission as string}
          />
          <Stack
            gap={0}
            style={{ marginTop: "30px", paddingLeft: "30px", width: "50%" }}
          >
            <AnnoncmentUserComponent
              pic={announcment?.user.profilePic}
              name={announcment?.user.name as string}
            />
            <AnnoncmentDescriptionComponent
              text={announcment?.sellersComment as string}
            />
          </Stack>
        </Stack>
      </Card>
    </div>
  );
};

export default SpecificAnnouncementPage;
