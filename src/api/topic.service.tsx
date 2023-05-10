import axios from "axios";
import { Topic } from "../types/Topic.type";

export const getAllTopics = (_page: number) => {
  return axios.get<Topic[]>("https://localhost:7234/topic/Topic", {
    params: {
      page: _page,
    },
  });
};

export const getTopicByID = (_topicID: string) => {
  return axios.get<Topic[]>("https://localhost:7234/topic/Topic", {
    params: {
      topicID: _topicID,
    },
  });
};

export const getTopicByProbableName = (
  _probableName: string,
  _page: number
) => {
  return axios.get<Topic[]>("https://localhost:7234/topic/Topic", {
    params: {
      probableName: _probableName,
      page: _page,
    },
  });
};

export const postTopic = (
  _mailLogin: string,
  _topic_theme: string,
  _topic_text: string
) => {
  return axios.post("https://localhost:7234/topic/Topic", {
    topicID: "",
    mailLogin: _mailLogin,
    topic_theme: _topic_theme,
    topic_text: _topic_text,
  });
};
