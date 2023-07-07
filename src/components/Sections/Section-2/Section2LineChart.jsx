import React, { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

const Section2LineChart = () => {
  const [time, setTime] = useState();
  const [totalDoses, setTotalDoses] = useState();
  const [doseOne, setDoseOne] = useState();
  const [doseTwo, setDoseTwo] = useState();
  const [precautionDose, setPrecautionDose] = useState();

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
          `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&date=${formattedDate}`
        );
        const jsonData = await response.json();
        // console.log(jsonData.vaccinationDoneByTime.map((item) => item.label));
        setTime(
          jsonData.vaccinationDoneByTime.map((item) => {
            const range = item.label;
            const splitted = range.split("-").pop();
            // console.log(splitted);
            return splitted;
          })
        );
        setTotalDoses(jsonData.vaccinationDoneByTime.map((item) => item.count));
        setDoseOne(jsonData.vaccinationDoneByTime.map((item) => item.dose_one));
        setDoseTwo(jsonData.vaccinationDoneByTime.map((item) => item.dose_two));
        setPrecautionDose(
          jsonData.vaccinationDoneByTime.map((item) => item.dose_pd)
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
        label: "Total Doses",
        data: totalDoses,
        borderColor: "rgb(245,67,148)",
        tension: 0.1,
        fill: "start",
        backgroundColor: "rgba(245,67,148,0.1)", // Fill color
      },
      {
        label: "Dose One",
        data: doseOne,
        borderColor: "rgb(255,152,0)",
        tension: 0.1,
        fill: "start",
        backgroundColor: "rgba(255,152,0,0.1)", // Fill color
      },
      {
        label: "Dose Two",
        data: doseTwo,
        borderColor: "rgb(33,204,152)",
        tension: 0.1,
        fill: "start",
        backgroundColor: "rgba(33,204,152,0.1)", // Fill color
      },
      {
        label: "Precaution Dose",
        data: precautionDose,
        borderColor: "rgb(18,173,6)",
        tension: 0.1,
        fill: "start",
        backgroundColor: "rgba(18,173,6,0.1)", // Fill color
      },
    ],
  };

  //   const options = {

  //     scales: {
  //       y: {
  //         display: false, // Hide y-axis
  //       },
  //       x: {
  //         display: false, // Hide x-axis
  //       },
  //     },
  //     plugins: {
  //       legend: {
  //         display: false, // Hide legend
  //       },
  //     },
  //     maintainAspectRatio: false,
  //   };

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
    },
    maintainAspectRatio: false,
  };
  return <Line data={data} options={options} />;
};

export default Section2LineChart;
