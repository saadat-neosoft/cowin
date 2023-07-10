import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import india from "../../assets/in.svg";

const IndiaMapChart = () => {
  const stateCoordinates = {
    // Add coordinates for each state (x, y) on the map
    // e.g., 'StateName': { x: xValue, y: yValue },
    "Andhra Pradesh": { x: 100, y: 200 },
    "Arunachal Pradesh": { x: 300, y: 400 },
    // Add coordinates for other states
    // ...
  };

  const bubbleData = [
    // Add data for each state
    { state: "Andhra Pradesh", population: 49577103, area: 160205 },
    { state: "Arunachal Pradesh", population: 1383727, area: 83743 },
    // Add data for other states
    // ...
  ];

  const data = {
    type: "bubble",
    datasets: bubbleData.map((data) => ({
      label: data.state,

      backgroundColor: "rgba(75, 192, 192, 0.6)", // Customize bubble color
      hoverBackgroundColor: "rgba(75, 192, 192, 1)", // Customize hover color
      hoverBorderWidth: 2,
    })),
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: 10,
    },
    scales: {
      x: {
        display: false,
        min: 0,
      },
      y: {
        display: false,
        min: 0,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div>
      <img
        src={india}
        alt=""
        style={{
          filter:
            "invert(73%) sepia(26%) saturate(324%) hue-rotate(186deg) brightness(94%) contrast(97%);",
        }}
      />
    </div>
  );
};

export default IndiaMapChart;
