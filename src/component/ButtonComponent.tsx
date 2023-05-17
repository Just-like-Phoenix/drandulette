import { Button, Card, Dropdown, DropdownButton, Stack } from "react-bootstrap";
import { bannUser, logOut } from "../api/authorization.service";
import dots from "./assets/img/more_vert.svg";
import { delAnnouncmentComment } from "../api/announcmentcomment.service";
import { delAnnouncment } from "../api/announcment.service";
import { delTopic } from "../api/topic.service";
import { delTopicComment } from "../api/topiccomment.service";

export const SignInButton = () => {
  return (
    <Button variant="primary" href="/signin">
      Войти
    </Button>
  );
};

export const SignUpButton = () => {
  return (
    <Button variant="primary" href="/signup">
      Зарегистрироваться
    </Button>
  );
};

export const VerButton = () => {
  return (
    <Button variant="primary" href="/verification">
      Пожертвовать
    </Button>
  );
};

export const AddAnnouncementButton = () => {
  return (
    <Button variant="primary" href="/announcmentadding">
      Разместить объявление
    </Button>
  );
};

export const ProfileButton = () => {
  return (
    <Button variant="primary" href="/profile">
      Профиль
    </Button>
  );
};

export const LogOutButton = () => {
  return (
    <Button variant="danger" href="/" onClick={logOut}>
      Выйти
    </Button>
  );
};

export const BannButton = (props: { login: string }) => {
  return (
    <Button variant="danger" href="/" onClick={(e) => bannUser(props.login)}>
      Заблокировать
    </Button>
  );
};

export const DelAnnoncmentComment = (props: {
  annoncmentCommentID: string;
}) => {
  console.log(props.annoncmentCommentID);
  const delData = async (AnnoncmentId: string) => {
    delAnnouncmentComment(AnnoncmentId);
  };

  return (
    <Button
      variant="danger"
      onClick={(e) => delData(props.annoncmentCommentID)}
    >
      Удалить
    </Button>
  );
};

export const DropdownAnnoncmentCommentAction = (props: {
  commentID: string;
}) => {
  return (
    <Dropdown style={{ width: 25, height: 25 }}>
      <Dropdown.Toggle
        style={{ color: "transperent", width: 0 }}
        className="profileDropdown"
        id="dropdown-autoclose-true"
      >
        <Card.Img style={{ width: 25, height: 25 }} src={dots} />
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ padding: 8 }} align={{ lg: "end" }}>
        <Stack>
          <DelAnnoncmentComment annoncmentCommentID={props.commentID} />
        </Stack>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const DelAnnoncment = (props: {
  annoncmentID: string;
  moderator: string;
}) => {
  const delData = async (AnnoncmentId: string) => {
    delAnnouncment(AnnoncmentId);
  };
  return (
    <Button
      variant={props.moderator === "0" ? "primary" : "danger"}
      onClick={(e) => delData(props.annoncmentID)}
    >
      {props.moderator === "0" ? "Закрыть" : "Удалить"}
    </Button>
  );
};

export const DropdownAnnoncmentAction = (props: {
  annoncmentID: string;
  moderator: string;
  login: string;
}) => {
  return (
    <Dropdown style={{ width: 25, height: 25 }}>
      <Dropdown.Toggle
        style={{ color: "transperent", width: 0 }}
        className="profileDropdown"
        id="dropdown-autoclose-true"
      >
        <Card.Img style={{ width: 25, height: 25 }} src={dots} />
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ padding: 8 }} align={{ lg: "end" }}>
        <Stack>
          <DelAnnoncment
            moderator={props.moderator}
            annoncmentID={props.annoncmentID}
          />
          {props.moderator === "0" ? (
            <></>
          ) : (
            <div style={{ marginTop: 8 }}>
              <BannButton login={props.login} />
            </div>
          )}
        </Stack>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const DelTopic = (props: { topicID: string; moderator: string }) => {
  const delData = async (topicId: string) => {
    delTopic(topicId);
  };
  return (
    <Button
      variant={props.moderator === "0" ? "primary" : "danger"}
      onClick={(e) => delData(props.topicID)}
      href="/topics"
    >
      {props.moderator === "0" ? "Закрыть" : "Удалить"}
    </Button>
  );
};

export const DropdownTopicAction = (props: {
  topicID: string;
  moderator: string;
  login: string;
}) => {
  return (
    <Dropdown style={{ width: 25, height: 25 }}>
      <Dropdown.Toggle
        style={{ color: "transperent", width: 0 }}
        className="profileDropdown"
        id="dropdown-autoclose-true"
      >
        <Card.Img style={{ width: 25, height: 25 }} src={dots} />
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ padding: 8 }} align={{ lg: "end" }}>
        <Stack>
          <DelTopic moderator={props.moderator} topicID={props.topicID} />
          {props.moderator === "0" ? (
            <></>
          ) : (
            <div style={{ marginTop: 8 }}>
              <BannButton login={props.login} />
            </div>
          )}
        </Stack>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const DelTopicComment = (props: { topicCommentID: string }) => {
  const delData = async (topicCommentId: string) => {
    delTopicComment(topicCommentId);
  };
  return (
    <Button variant="danger" onClick={(e) => delData(props.topicCommentID)}>
      Удалить
    </Button>
  );
};

export const DropdownTopicCommentAction = (props: {
  topicCommentID: string;
  login: string;
}) => {
  return (
    <Dropdown style={{ width: 25, height: 25 }}>
      <Dropdown.Toggle
        style={{ color: "transperent", width: 0 }}
        className="profileDropdown"
        id="dropdown-autoclose-true"
      >
        <Card.Img style={{ width: 25, height: 25 }} src={dots} />
      </Dropdown.Toggle>

      <Dropdown.Menu style={{ padding: 8 }} align={{ lg: "end" }}>
        <Stack>
          <DelTopicComment topicCommentID={props.topicCommentID} />
          {localStorage.getItem("user_moderator") === "0" ? (
            <></>
          ) : (
            <div style={{ marginTop: 8 }}>
              <BannButton login={props.login} />
            </div>
          )}
        </Stack>
      </Dropdown.Menu>
    </Dropdown>
  );
};
