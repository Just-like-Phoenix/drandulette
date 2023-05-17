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
import SpecificAnnouncmentPage from "./pages/SpecificAnnouncment/SpecificAnnouncmentPage";
import AnnouncmentsPage from "./pages/Announcments/AnnouncmentsPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import ChartsPage from "./pages/Charts/ChartsPage";
import VerificationPage from "./pages/Verification/VerificationPage";

export interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = (props) => {
  return (
    <Routes>
      <Route element={<LayoutComponent />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/announcments">
          <Route index element={<AnnouncmentsPage />} />
          <Route path=":announcmentID" element={<SpecificAnnouncmentPage />} />
        </Route>
        <Route path="/topics">
          <Route index element={<TopicsPage />} />
          <Route path=":topicID" element={<SpecificTopicPage />} />
        </Route>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/announcmentadding" element={<AnnouncmentAddingPage />} />
        <Route path="/charts" element={<ChartsPage />} />
        <Route path="/topicadding" element={<TopicAddingPage />} />
      </Route>
      <Route path="/verification" element={<VerificationPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
