import { User } from "./User.type";

export type TopicComment = {
  mailLogin: string;
  message: string;
  time: string;
  topicID: string;
  topic_commentID: string;
  user: User;
};
