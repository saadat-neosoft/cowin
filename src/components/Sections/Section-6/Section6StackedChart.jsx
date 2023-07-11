import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

const Section6StackedChart = () => {
  const [time, setTime] = useState();

  const [rural, setRural] = useState();

  const [urban, setUrban] = useState();

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
        // console.log(jsonData.last30DaysVaccination);

        setTime(
          jsonData.last30DaysVaccination.map((item) => {
            const dateStr = item.vaccine_date;
            // console.log(dateStr);
            const date = new Date(dateStr);

            const options = { day: "2-digit", month: "short" };
            const formattedDate = date.toLocaleDateString("en-US", options);

            // console.log(formattedDate);
            return formattedDate;
          })
        );

        setRural(jsonData.last30DaysVaccination.map((item) => item.rural));
        setUrban(jsonData.last30DaysVaccination.map((item) => item.urban));
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
        label: "Urban",
        data: urban,
        backgroundColor: "rgb(84,57,252)",
        barThickness: 10,
      },
      {
        label: "Rural",
        data: rural,
        backgroundColor: "rgb(255,119,35)",
        barThickness: 10,
        borderRadius: 4,
      },
    ],
  };

  // Define the options for the chart
  const options = {
    scales: {
      x: {
        stacked: true,
        grid: {
          color: "#00000005",
        },
      },
      y: {
        stacked: true,
        ticks: {
          callback: (value) => {
            return `${value / 1000}k`;
          },
        },
        grid: {
          color: "#00000005",
        },
      },
    },
    plugins: {
      legend: {
        display: true, // Hide legend
        position: "bottom",
        labels: {
          usePointStyle: true, // Use circular legend point style
        },
      },
    },
    maintainAspectRatio: false,
  };
  return <Bar data={data} options={options} />;
};

export default Section6StackedChart;
