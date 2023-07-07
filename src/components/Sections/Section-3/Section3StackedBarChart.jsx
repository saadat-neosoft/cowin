import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

const Section3StackedBarChart = () => {
  const [vac_12_14, setVac_12_14] = useState();
  const [vac_15_17, setVac_15_17] = useState();
  const [vac_18_45, setVac_18_45] = useState();
  const [vac_45_60, setVac_45_60] = useState();
  const [above_60, setAbove_60] = useState();

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

        setVac_12_14(jsonData.vaccinationByAge.vac_12_14);
        setVac_15_17(jsonData.vaccinationByAge.vac_15_17);
        setVac_18_45(jsonData.vaccinationByAge.vac_18_45);
        setVac_45_60(jsonData.vaccinationByAge.vac_45_60);
        setAbove_60(jsonData.vaccinationByAge.above_60);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: ["Category 1"],
    datasets: [
      {
        label: "12-14",
        data: [vac_12_14],
        backgroundColor: "rgb(1,2,13)",
        barThickness: 40,
      },
      {
        label: "15-17",
        data: [vac_15_17],
        backgroundColor: "rgb(50,72,158)",
        barThickness: 40,
      },
      {
        label: "18-44",
        data: [vac_18_45],
        backgroundColor: "rgb(86,90,143)",
        barThickness: 40,
      },
      {
        label: "45-60",
        data: [vac_45_60],
        backgroundColor: "rgb(2,99,255)",
        barThickness: 40,
      },
      {
        label: "Above 60",
        data: [above_60],
        backgroundColor: "rgb(100,154,241)",
        barThickness: 40,
      },
    ],
  };

  // Define the options for the chart
  const options = {
    scales: {
      x: {
        stacked: true,
        display: false,
      },
      y: { stacked: true, display: false },
    },
    plugins: {
      legend: {
        display: true, // Hide legend
        position: "right",
        labels: {
          usePointStyle: true, // Use circular legend point style
        },
      },
    },
    maintainAspectRatio: false,
  };
  return <Bar data={data} options={options} />;
};

export default Section3StackedBarChart;
