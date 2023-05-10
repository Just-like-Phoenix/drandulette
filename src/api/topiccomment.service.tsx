import axios from "axios";
import { TopicComment } from "../types/Topic_comment.type";

export const getTopicComments = (_topicID: string) => {
  return axios.get<TopicComment[]>(
    "https://localhost:7234/topic/TopicComments",
    {
      params: {
        topicID: _topicID,
      },
    }
  );
};

export const postTopicComment = (
  _message: string,
  _mailLogin: string,
  _topicID: string
) => {
  return axios.post("https://localhost:7234/topic/TopicComments", {
    message: _message,
    mailLogin: _mailLogin,
    topicID: _topicID,
  });
};
