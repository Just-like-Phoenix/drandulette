import axios from "axios";
import { Announcement } from "../types/Announcement.type";

export const getAnnouncmentByAll = (
  _text: string,
  _brand: string,
  _model: string,
  _isSpecific: number,
  _page: number
) => {
  return axios.get<Announcement[]>(
    "https://localhost:7234/announcement/Announcement",
    {
      params: {
        probableName: _text,
        brand: _brand,
        model: _model,
        isSpecific: _isSpecific,
        page: _page,
      },
    }
  );
};

export const getAnnouncment = (_isSpecific: number) => {
  return axios.get<Announcement[]>(
    "https://localhost:7234/announcement/Announcement",
    {
      params: {
        isSpecific: _isSpecific,
      },
    }
  );
};

export const getAnnouncmentById = (_announcmentID: string) => {
  return axios.get<Announcement[]>(
    "https://localhost:7234/announcement/Announcement",
    {
      params: {
        announcmentID: _announcmentID,
      },
    }
  );
};

export const postAnnouncment = (
  _price: number,
  _brand: string,
  _model: string,
  _year: number,
  _mileage: number,
  _transmission: string,
  _hp: number,
  _volume: number,
  _fuelType: string,
  _body: string,
  _wheelDrive: string,
  _sellersComment: string,
  _mailLogin: string,
  _files: string[]
) => {
  return axios.post("https://localhost:7234/announcement/Announcement", {
    mailLogin: _mailLogin,
    price: _price,
    brand: _brand,
    model: _model,
    year: _year,
    mileage: _mileage,
    transmission: _transmission,
    hp: _hp,
    volume: _volume,
    fuelType: _fuelType,
    body: _body,
    wheelDrive: _wheelDrive,
    sellersComment: _sellersComment,
    pics: _files,
  });
};
