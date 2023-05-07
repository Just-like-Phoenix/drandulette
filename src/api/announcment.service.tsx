import axios from "axios";

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
    wheelSide: _wheelDrive,
    pics: _files,
  });
};
