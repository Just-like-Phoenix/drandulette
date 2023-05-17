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
import Spinner from "react-bootstrap/esm/Spinner";
import AnnoncmentCommentAddingComponent from "../../component/AnnoncmentCommentAdding/AnnoncmentCommentAddingComponent";
import { getAnnouncmentCommentById } from "../../api/announcmentcomment.service";
import { AnnouncementComment } from "../../types/Announcement_comment.type";
import AnnoncmentCommentComponent from "../../component/AnnoncmentComment/AnnoncmentCommentComponent";

export interface ISpecificAnnouncementProps {}
const SpecificAnnouncementPage: React.FunctionComponent<
  ISpecificAnnouncementProps
> = (props) => {
  const [announcment, setAnnouncement] = useState<Announcement>();
  const [coments, setComents] = useState<AnnouncementComment[]>([]);
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

  const getComents = async () => {
    await getAnnouncmentCommentById(announcmentID as string)
      .then((response) => {
        setComents(response.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    getAnnouncement();
    getComents();
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
          annoncmentID={announcment?.announcementID as string}
          mailLogin={announcment?.user.mailLogin as string}
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
              phone={announcment?.user.phone as string}
              verificated={announcment?.user.verificated as number}
            />
            <AnnoncmentDescriptionComponent
              text={announcment?.sellersComment as string}
            />
          </Stack>
        </Stack>
        {localStorage.getItem("user_moderator") === "0" ? (
          localStorage.getItem("user_banned") === "0" ? (
            <AnnoncmentCommentAddingComponent
              onSubmit={getComents}
              mailLogin={localStorage.getItem("user_mailLogin") as string}
              topicID={announcment?.announcementID as string}
            />
          ) : null
        ) : (
          <></>
        )}

        {coments.map((item) => {
          return (
            <AnnoncmentCommentComponent
              mailLogin={item.mailLogin}
              commentID={item.announcment_commentID}
              name={item.user.name}
              time={item.time}
              message={item.message}
              img={item.user.profilePic}
              verificated={item.user.verificated}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default SpecificAnnouncementPage;
