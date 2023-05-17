import Card from "react-bootstrap/esm/Card";
import "./Profile.scss";
import verificated from "../assets/img/done.svg";
import React, { useEffect, useState } from "react";
import { Button, Stack } from "react-bootstrap";
import { Announcement } from "../../types/Announcement.type";
import { getAnnouncmentByMail } from "../../api/announcment.service";
import AnnouncmentComponent from "../../component/AnnouncmentCard/AnnouncmentCardComponent";

export interface IProfileProps {}
const ProfilePage: React.FunctionComponent<IProfileProps> = (props) => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [page, setPage] = useState(0);

  const getData = async () => {
    const announcementPromise = getAnnouncmentByMail(
      localStorage.getItem("user_mailLogin") as string,
      1,
      page
    );
    setAnnouncements((await announcementPromise).data);
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="profileDIv">
      <Card className="profileCard">
        <Stack>
          <Stack direction="horizontal">
            <Card.Img
              className="profileCardImg"
              src={localStorage.getItem("user_profilePic") as string}
            />
            <Stack style={{ paddingLeft: 10 }}>
              <Stack direction="horizontal">
                <Card.Title style={{ display: "flex" }}>
                  {localStorage.getItem("user_name")}
                  {localStorage.getItem("user_verificated") === "1" ? (
                    <Card.Img
                      src={verificated}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                  ) : (
                    <></>
                  )}
                </Card.Title>
              </Stack>
              <Card.Text style={{ margin: 0 }}>
                {localStorage.getItem("user_mailLogin")}
              </Card.Text>
              {localStorage.getItem("user_moderator") === "0" ? (
                ""
              ) : (
                <Card.Text style={{ margin: 0 }}>Администратор</Card.Text>
              )}
              {localStorage.getItem("user_banned") === "0" ? (
                ""
              ) : (
                <Card.Text style={{ margin: 0 }}>Заблокирован</Card.Text>
              )}
            </Stack>
          </Stack>
          {localStorage.getItem("user_moderator") === "0" ? (
            <hr
              className="horizontalDivLine"
              style={{ marginTop: 30, marginBottom: 30 }}
            />
          ) : (
            <></>
          )}

          {announcements.map((e) => {
            return (
              <AnnouncmentComponent
                key={e.announcementID}
                announcementID={e.announcementID}
                price={e.price}
                brand={e.brand}
                model={e.model}
                year={e.year}
                mileage={e.mileage}
                text={e.sellersComment}
                pic={e.pics[0]}
              />
            );
          })}

          <Stack style={{ margin: "auto" }} direction="horizontal" gap={2}>
            {page === 0 ? null : (
              <Button
                className="moreAnnouncmentsButton"
                onClick={(e) => setPage(page - 1)}
              >
                {"<"}
              </Button>
            )}
            {announcements.length < 6 ? null : (
              <Button
                className="moreAnnouncmentsButton"
                onClick={(e) => setPage(page + 1)}
              >
                {">"}
              </Button>
            )}
          </Stack>
        </Stack>
      </Card>
    </div>
  );
};

export default ProfilePage;
