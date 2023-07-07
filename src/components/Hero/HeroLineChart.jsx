import React, { useEffect, useState } from "react";

import { Line } from "react-chartjs-2";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

const HeroLineChart = ({ border, fill }) => {
  const [dataArr, setDataArr] = useState(Array(10).fill(0));

  const [colorFill, setColorFill] = useState();

  useEffect(() => {
    const interval = setInterval(() => {
      setDataArr((prevData) => {
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        const newData = [...prevData.slice(1), randomNumber];
        return newData;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const hexColor = fill;
    const transparency = 0.7; 

    const rgbaColor = hexToRGBA(hexColor, transparency);
  

    function hexToRGBA(hex, transparency) {
      const hexValue = hex.replace("#", "");
      const r = parseInt(hexValue.substring(0, 2), 16);
      const g = parseInt(hexValue.substring(2, 4), 16);
      const b = parseInt(hexValue.substring(4, 6), 16);
      return `rgba(${r}, ${g}, ${b}, ${transparency})`;
    }
    setColorFill(rgbaColor);
  }, [fill]);

  const data = {
    labels: Array(10).fill(""),
    datasets: [
      {
        label: "",
        data: dataArr, 
        borderWidth: 2,
        borderColor: border, 
        backgroundColor: colorFill, // Fill color
        pointBorderColor: border, // Point border color
        pointBackgroundColor: "#fff", // Point fill color
        pointRadius: 2, // Point radius
        fill: "start", // Fill area under the line
        lineTension: 0.45,
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
        display: false, // Hide legend
      },
    },
    maintainAspectRatio: false,
  };
  return <Line data={data} options={options} />;
};

export default HeroLineChart;
