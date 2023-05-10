import { Button } from "react-bootstrap";
import { logOut } from "../api/authorization.service";

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
