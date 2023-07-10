import React, { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

const Section6LineChart = () => {
  const [time, setTime] = useState();
  const [totalDoses, setTotalDoses] = useState();

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
          jsonData.last30DaysAefi.map((item) => {
            const dateStr = item.vaccine_date;
            // console.log(dateStr);
            const date = new Date(dateStr);

            const options = { day: "2-digit", month: "short" };
            const formattedDate = date.toLocaleDateString("en-US", options);

            // console.log(formattedDate);
            return formattedDate;
          })
        );
        setTotalDoses(jsonData.last30DaysAefi.map((item) => item.aefi));
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
        label: "Total",
        data: totalDoses,
        borderColor: "rgb(33,204,152)",
        tension: 0.1,
        fill: "zero",
        backgroundColor: "rgba(33,204,152,0.1)", // Fill color
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
        // min: 0,
        border: {
          color: "#fff",
        },
        suggestedMin: 0,
        max: 1,
        ticks: {
          callback: (value) => (value === 1 || value === 0 ? value : ""),
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

export default Section6LineChart;
