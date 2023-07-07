import React, { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

const Section2LineChartTodayByAge = () => {
  const [time, setTime] = useState();
  const [totalDoses, setTotalDoses] = useState();
  const [twelveTo14, setTwelveTo14] = useState();
  const [fifteenTo17, setFifteenTo17] = useState();
  const [eighteenTo44, setEighteenTo44] = useState();
  const [fortyfiveTo60, setFortyfiveTo60] = useState();
  const [above60, setAbove60] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, "0"); // Adding +1 to account for zero-based months
        const day = String(today.getDate()).padStart(2, "0");

        const formattedDate = `${year}-${month}-${day}`;
        // console.log(formattedDate);
        const response = await fetch(
          `https://api.cowin.gov.in/api/v1/reports/v2/getVacPublicReports?state_id=&district_id=&date=${formattedDate}`
        );
        const jsonData = await response.json();
        // console.log(jsonData.vaccinationDoneByTime.map((item) => item.label));
        setTime(
            jsonData.last30DaysAgeWiseVaccination.map((item) => {
              const dateStr = item.vaccine_date;
              const date = new Date(dateStr);
  
              const options = { day: "2-digit", month: "short" };
              const formattedDate = date.toLocaleDateString("en-US", options);
  
              console.log(formattedDate);
              return formattedDate;
            })
          );
        setTotalDoses(
          jsonData.last30DaysAgeWiseVaccination.map((item) => item.total)
        );
        setTwelveTo14(
          jsonData.last30DaysAgeWiseVaccination.map((item) => item.vac_12_14)
        );
        setFifteenTo17(
          jsonData.last30DaysAgeWiseVaccination.map((item) => item.vac_15_17)
        );
        setEighteenTo44(
          jsonData.last30DaysAgeWiseVaccination.map((item) => item.vac_18_45)
        );
        setFortyfiveTo60(
          jsonData.last30DaysAgeWiseVaccination.map((item) => item.vac_45_60)
        );
        setAbove60(
          jsonData.last30DaysAgeWiseVaccination.map((item) => item.vac_60_above)
        );
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: time,
    datasets: [
      {
        label: "Total", // Name of the first line
        data: totalDoses,
        borderColor: "rgb(33,204,152)",
        tension: 0.1,
        fill: "start",
        backgroundColor: "rgba(33,204,152,0.1)", // Fill color

        // Name of the first line for the legend
      },
      {
        label: "12-14", // Name of the second line
        data: twelveTo14,
        borderColor: "rgb(178,76,194)",
        tension: 0.1,
        fill: "start",
        backgroundColor: "rgba(178,76,194,0.1)", // Fill color

        // Name of the second line for the legend
      },
      {
        label: "15-17", // Name of the second line
        data: fifteenTo17,
        borderColor: "rgb(0,179,255)",
        tension: 0.1,
        fill: "start",
        backgroundColor: "rgba(0,179,255,0.1)", // Fill color

        // Name of the second line for the legend
      },
      {
        label: "18-44", // Name of the second line
        data: eighteenTo44,
        borderColor: "rgb(255,152,0)",
        tension: 0.1,
        fill: "start",
        backgroundColor: "rgba(255,152,0,0.1)", // Fill color

        // Name of the second line for the legend
      },
      {
        label: "45-60", // Name of the second line
        data: fortyfiveTo60,
        borderColor: "rgb(84,57,252)",
        tension: 0.1,
        fill: "start",
        backgroundColor: "rgba(84,57,252,0.1)", // Fill color

        // Name of the second line for the legend
      },
      {
        label: "Above 60", // Name of the second line
        data: above60,
        borderColor: "rgb(245,67,148)",
        tension: 0.1,
        fill: "start",
        backgroundColor: "rgba(245,67,148,0.1)", // Fill color

        // Name of the second line for the legend
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: true,

        grid: {
          color: "#00000005",
        },
      },
      y: {
        ticks: {
          callback: (value) => {
            return `${value / 1000}k`;
          },
        },
        display: true,

        // title: {
        //   display: true,
        //   text: "Number of Vaccinations",
        // },
        grid: {
          color: "#00000005",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true, // Use circular legend point style
        },
        position: "bottom",
      },
      tooltip: {
        // callbacks: {
        //   label: (context) => {
        //     const label = context.dataset.label || "";
        //     const value1 = context.parsed.y || "";
        //     const value2 =
        //       context.datasetIndex === 0
        //         ? vaccinations2[context.dataIndex]
        //         : vaccinations1[context.dataIndex];
        //     return `${value1} ${value2}`;
        //   },
        // },
      },
    },
    maintainAspectRatio: false,
  };
  return <Line data={data} options={options} />;
};

export default Section2LineChartTodayByAge;
