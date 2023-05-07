import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/Main/MainPage";
import SignInPage from "./pages/SignIn/SignInPage";
import SignUpPage from "./pages/SignUp/SignUpPage";
import LayoutComponent from "./component/LayoutComponent";
import NotFoundPage from "./pages/NotFound/NotFoundPage";
import TopicsPage from "./pages/Topics/TopicsPage";
import AnnouncmentAddingPage from "./pages/AnnouncmentAdding/AnnouncmentAddingPage";
import TopicAddingPage from "./pages/TopicAdding/TopicAddingPage";
import SpecificTopicPage from "./pages/SpecificTopic/SpecificTopicPage";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Routes>
      <Route element={<LayoutComponent />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/topics">
          <Route index element={<TopicsPage />} />
          <Route path=":topicID" element={<SpecificTopicPage />} />
        </Route>
        <Route path="/announcmentadding" element={<AnnouncmentAddingPage />} />
        <Route path="/topicadding" element={<TopicAddingPage />} />
      </Route>
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
