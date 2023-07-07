import { Pie } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";

const Section3PieChart = () => {
  const [male, setMale] = useState();
  const [female, setFemale] = useState();
  const [others, setOthers] = useState();

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

        setMale(jsonData.topBlock.vaccination.male);
        setFemale(jsonData.topBlock.vaccination.female);
        setOthers(jsonData.topBlock.vaccination.others);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: ["Male", "Female", "Others"],
    datasets: [
      {
        label: "My First Dataset",
        data: [male, female, others],
        backgroundColor: [
          "rgb(84,57,252)",
          "rgb(245,67,148)",
          "rgb(255,152,0)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        display: false, // Hide y-axis
      },
      x: {
        display: false, // Hide x-axis
      },
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
  return <Pie data={data} options={options} />;
};

export default Section3PieChart;
