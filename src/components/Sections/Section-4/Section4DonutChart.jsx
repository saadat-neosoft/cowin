import { Doughnut } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import { useEffect, useState } from "react";

const Section4DonutChart = ({ dose1, dose2, pd }) => {
  const [covishield, setCovishield] = useState();
  const [covaxin, setCovaxin] = useState();
  const [sputnik, setSputnik] = useState();
  const [corbevax, setCorbevax] = useState();
  const [covovax, setCovovax] = useState();

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

        setCovishield(jsonData.topBlock.vaccination.covishield);
        setCovaxin(jsonData.topBlock.vaccination.covaxin);
        setSputnik(jsonData.topBlock.vaccination.sputnik);
        setCorbevax(jsonData.topBlock.vaccination.corbevax);
        setCovovax(jsonData.topBlock.vaccination.covovax);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const data = {
    labels: ["Covishield", "Covaxin", "Sputnik V", "Corbevax", "Covovax"],
    datasets: [
      {
        label: "My First Dataset",
        data: [dose1, dose2, pd],
        backgroundColor: ["#ff9800", "#21cc98", "#fff"],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    cutout: "75%",
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
        display: false, // Hide legend
        position: "right",
        labels: {
          usePointStyle: true, // Use circular legend point style
        },
      },
    },
    maintainAspectRatio: false,
  };
  return <Doughnut data={data} options={options} />;
};

export default Section4DonutChart;
