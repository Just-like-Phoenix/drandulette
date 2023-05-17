import axios from "axios";

export type ChartData = {
  lable: string;
  count: number;
};

export const getChartData = (_type: string) => {
  return axios.get<ChartData[]>("https://localhost:7234/chart/Chart", {
    params: {
      type: _type,
    },
  });
};
