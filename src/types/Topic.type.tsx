import { User } from "./User.type";

export type Topic = {
  topicID: string;
  time: string;
  topic_theme: string;
  topic_text: string;
  mailLogin: string;
  user: User;
};
