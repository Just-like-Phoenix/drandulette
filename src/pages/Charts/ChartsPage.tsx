import "./Charts.scss";
import React, { useEffect, useState } from "react";
import { Card, Form, Spinner, Stack } from "react-bootstrap";
import { ChartData, getChartData } from "../../api/charts.service";
import { Chart as ChartJS, registerables } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import randomColor from "randomcolor";
ChartJS.register(...registerables);

export interface IChartsProps {}
const ChartsPage: React.FunctionComponent<IChartsProps> = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [chartType, setChartType] = useState("1");
  const [chartLabel, setChartLabel] = useState<string[]>([]);
  const [chartData, setChartData] = useState<number[]>([]);
  const getData = async () => {
    getChartData(chartType)
      .then((response) => {
        let labelTMP: string[] = [];
        let dataTMP: number[] = [];

        response.data.map((item) => {
          labelTMP.push(item.lable);
          dataTMP.push(item.count);
        });

        setChartLabel(labelTMP);
        setChartData(dataTMP);
        setLoading(false);
      })
      .catch((error) => {});
  };
  useEffect(() => {
    getData();
    console.log(chartType);
  }, [chartType]);

  if (isLoading) {
    return (
      <div className="specAnnoncmentSpinerDiv">
        <Spinner className="specAnnoncmentSpiner" animation="border" />
      </div>
    );
  }

  return (
    <div className="chartsPageDiv">
      <Stack style={{ padding: 30 }}>
        <Form.Select
          size="lg"
          onChange={(item) => setChartType(item.currentTarget.value)}
        >
          <option value="1">Количество обявлений по маркам</option>
          <option value="2">Средняя стоимость по году</option>
          <option value="3">Максимальная стоимость по марке</option>
          <option value="4">Верифицированные и не верифицированные</option>
          <option value="5">По типу трансмиссии</option>
          <option value="6">По среднему пробегу за год</option>
        </Form.Select>
        <Card
          style={{
            height: "600px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "0px",
          }}
        >
          {chartType === "1" ? (
            <Pie
              data={{
                labels: chartLabel,
                datasets: [
                  {
                    label: "Объявлений",
                    data: chartData,
                    backgroundColor: randomColor({ count: chartData.length }),
                  },
                ],
              }}
            />
          ) : (
            <></>
          )}
          {chartType === "2" ? (
            <Bar
              data={{
                labels: chartLabel,
                datasets: [
                  {
                    label: "Стоимость",
                    data: chartData,
                    backgroundColor: randomColor({ count: 1 }),
                  },
                ],
              }}
            />
          ) : (
            <></>
          )}
          {chartType === "3" ? (
            <Bar
              data={{
                labels: chartLabel,
                datasets: [
                  {
                    label: "Cтоимость",
                    data: chartData,
                    backgroundColor: randomColor({ count: 1 }),
                  },
                ],
              }}
            />
          ) : (
            <></>
          )}
          {chartType === "4" ? (
            <Pie
              data={{
                labels: chartLabel,
                datasets: [
                  {
                    label: "Пользователей",
                    data: chartData,
                    backgroundColor: randomColor({ count: chartData.length }),
                  },
                ],
              }}
            />
          ) : (
            <></>
          )}
          {chartType === "5" ? (
            <Pie
              data={{
                labels: chartLabel,
                datasets: [
                  {
                    label: "Объявлений",
                    data: chartData,
                    backgroundColor: randomColor({ count: chartData.length }),
                  },
                ],
              }}
            />
          ) : (
            <></>
          )}
          {chartType === "6" ? (
            <Bar
              data={{
                labels: chartLabel,
                datasets: [
                  {
                    label: "Пробег",
                    data: chartData,
                    backgroundColor: randomColor({ count: 1 }),
                  },
                ],
              }}
            />
          ) : (
            <></>
          )}
        </Card>
      </Stack>
    </div>
  );
};

export default ChartsPage;
