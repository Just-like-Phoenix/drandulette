import { User } from "./User.type";

export type AnnouncementComment = {
  announcment_commentID: string;
  message: string;
  time: string;
  mailLogin: string;
  announcmentID: string;
  user: User;
};
