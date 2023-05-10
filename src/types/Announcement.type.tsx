import { User } from "./User.type";

export type Announcement = {
  announcementID: string;
  price: string;
  brand: string;
  model: string;
  year: string;
  mileage: string;
  transmission: string;
  hp: string;
  volume: string;
  fuelType: string;
  body: string;
  wheelDrive: string;
  sellersComment: string;
  pics: string[];
  mailLogin: string;
  user: User;
};
