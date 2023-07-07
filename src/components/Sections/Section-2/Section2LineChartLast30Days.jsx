import React, { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

const Section2LineChartLast30Days = () => {
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
          `https://api.cowin.gov.in/api/v1/reports/v2/getVacPublicReports?state_id=&district_id=&date=${formattedDate}`
        );
        const jsonData = await response.json();
        // console.log(jsonData.vaccinationDoneByTime.map((item) => item.label));
        setTime(
          jsonData.last30DaysVaccination.map((item) => {
            const dateStr = item.vaccine_date;
            const date = new Date(dateStr);

            const options = { day: "2-digit", month: "short" };
            const formattedDate = date.toLocaleDateString("en-US", options);

            console.log(formattedDate);
            return formattedDate;
          })
        );
        setTotalDoses(jsonData.last30DaysVaccination.map((item) => item.total));
        setDoseOne(jsonData.last30DaysVaccination.map((item) => item.dose_1));
        setDoseTwo(jsonData.last30DaysVaccination.map((item) => item.dose_2));
        setPrecautionDose(
          jsonData.last30DaysVaccination.map((item) => item.dose_pd)
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
        label: "Total Doses", // Name of the first line
        data: totalDoses,
        borderColor: "rgb(245,67,148)",
        tension: 0.1,
        fill: "start",
        backgroundColor: "rgba(245,67,148,0.1)", // Fill color

        // Name of the first line for the legend
      },
      {
        label: "Dose One", // Name of the second line
        data: doseOne,
        borderColor: "rgb(255,152,0)",
        tension: 0.1,
        fill: "start",
        backgroundColor: "rgba(255,152,0,0.1)", // Fill color

        // Name of the second line for the legend
      },
      {
        label: "Dose Two", // Name of the second line
        data: doseTwo,
        borderColor: "rgb(33,204,152)",
        tension: 0.1,
        fill: "start",
        backgroundColor: "rgba(33,204,152,0.1)", // Fill color

        // Name of the second line for the legend
      },
      {
        label: "Precaution Dose", // Name of the second line
        data: precautionDose,
        borderColor: "rgb(18,173,6)",
        tension: 0.1,
        fill: "start",
        backgroundColor: "rgba(18,173,6,0.1)", // Fill color

        // Name of the second line for the legend
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

export default Section2LineChartLast30Days;
