import axios from "axios";
import { AnnouncementComment } from "../types/Announcement_comment.type";

export const getAnnouncmentCommentById = (_announcmentID: string) => {
  return axios.get<AnnouncementComment[]>(
    "https://localhost:7234/announcement/AnnouncmentComment",
    {
      params: {
        announcmentID: _announcmentID,
      },
    }
  );
};

export const postAnnouncmentComment = (
  _mailLogin: string,
  _message: string,
  _announcmentID: string
) => {
  return axios.post("https://localhost:7234/announcement/AnnouncmentComment", {
    mailLogin: _mailLogin,
    message: _message,
    announcmentID: _announcmentID,
  });
};

export const delAnnouncmentComment = (_commentID: string) => {
  return axios.delete(
    "https://localhost:7234/announcement/AnnouncmentComment",
    {
      params: {
        commentID: _commentID,
      },
    }
  );
};
