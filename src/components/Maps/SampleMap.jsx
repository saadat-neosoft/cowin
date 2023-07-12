import { geoMercator } from "chartjs-chart-geo";
import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const SampleMap = ({
  setIsVisible,
  setTooltipPosition,
  handleHover,
  states,
  activeId,
}) => {
  const geoUrl =
    "https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json";

  const PROJECTION_CONFIG = {
    scale: 1000,
    // center: [78.9629, 22.5937],
    center: [82.9629, 22.5937],
  };

  const onMouseEnter = (geo, e) => {
    // console.log(geo);

    handleHover(geo.properties.name, states);

    const { clientX, clientY } = e;
    setTooltipPosition({ x: clientX, y: clientY });
    // console.log(e);
    setIsVisible(true);
  };
  const onMouseLeave = (geo) => {
    // console.log(geo.properties.name);
    setIsVisible(false);
  };
  return (
    <ComposableMap
      projectionConfig={PROJECTION_CONFIG}
      projection="geoMercator"
      width={600}
      height={600}
      data-tip=""
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo, index) => {
            // console.log(geo);
            return (
              <>
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  // fill={geo.id === "AN" ? "#fff" : ""}
                  style={{
                    default: {
                      fill: "#a8b8e2",
                    },
                    // hover: {
                    //   fill: "#5439fc",
                    // },
                    hover: {
                      fill: "#a8b8e2",
                    },
                  }}
                  stroke="white"
                  onMouseEnter={(e) => onMouseEnter(geo, e)}
                  onMouseLeave={(e) => onMouseLeave(geo)}
                  className={"map" + index}
                  onClick={(e) => console.log(e)}
                  id={"mapId" + index}
                />

                <circle
                  key={"map1"}
                  transform="translate(180.91114184821578,95.40739833520587)"
                  r="10.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "14" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "14"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "20",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map2"}
                  transform="translate(200.91114184821578,140.40739833520587)"
                  r="7.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "13" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "13"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "15",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map3"}
                  transform="translate(170.91114184821578,160.40739833520587)"
                  r="7.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "28" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "28"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "15",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map4"}
                  transform="translate(235.91114184821578,175.40739833520587)"
                  r="7.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "35" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "35"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "15",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map5"}
                  transform="translate(180.91114184821578,200.40739833520587)"
                  r="7.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "12" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "12"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "15",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map6"}
                  transform="translate(130.91114184821578,240.40739833520587)"
                  r="15.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "29" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "29"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "15",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map7"}
                  transform="translate(100.91114184821578,320.40739833520587)"
                  r="15.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "11" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "11"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "15",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map8"}
                  transform="translate(170.91114184821578,370.40739833520587)"
                  r="20.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "21" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "21"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "15",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map10"}
                  transform="translate(220.91114184821578,300.40739833520587)"
                  r="25.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "20" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "20"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "15",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map11"}
                  transform="translate(330.91114184821578,250.40739833520587)"
                  r="15.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "5" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "5"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "15",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map12"}
                  transform="translate(260.91114184821578,240.40739833520587)"
                  r="25.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "34" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "34"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "15",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map13"}
                  transform="translate(340.91114184821578,300.40739833520587)"
                  r="15.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "15" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "15"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "15",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map14"}
                  transform="translate(290.91114184821578,330.40739833520587)"
                  r="15.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "7" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "7"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "15",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map15"}
                  transform="translate(340.91114184821578,350.40739833520587)"
                  r="10.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "26" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "26"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "15",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map16"}
                  transform="translate(380.91114184821578,300.40739833520587)"
                  r="5.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "36" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "36"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "15",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map17"}
                  transform="translate(230.91114184821578,400.40739833520587)"
                  r="10.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "32" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "32"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "15",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map18"}
                  transform="translate(230.91114184821578,450.40739833520587)"
                  r="10.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "2" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "2"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "15",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map19"}
                  transform="translate(170.91114184821578,460.40739833520587)"
                  r="15.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "16" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "16"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "15",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map20"}
                  transform="translate(140.91114184821578,440.40739833520587)"
                  r="3.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "10" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "10"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "10",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map21"}
                  transform="translate(190.91114184821578,530.40739833520587)"
                  r="10.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "17" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "17"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "10",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map22"}
                  transform="translate(220.91114184821578,510.40739833520587)"
                  r="10.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "31" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "31"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "10",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map23"}
                  transform="translate(395.91114184821578,225.40739833520587)"
                  r="4.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "30" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "30"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "4",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map24"}
                  transform="translate(430.91114184821578,260.40739833520587)"
                  r="7.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "23" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "23"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "4",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map25"}
                  transform="translate(470.91114184821578,250.40739833520587)"
                  r="7.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "4" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "4"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "4",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map26"}
                  transform="translate(490.91114184821578,210.40739833520587)"
                  r="10.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "3" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "3"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "4",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map27"}
                  transform="translate(500.91114184821578,250.40739833520587)"
                  r="10.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "25" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "25"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "4",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map28"}
                  transform="translate(490.91114184821578,280.40739833520587)"
                  r="5.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "22" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "22"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "4",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map29"}
                  transform="translate(450.91114184821578,290.40739833520587)"
                  r="5.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "33" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "33"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "4",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map30"}
                  transform="translate(470.91114184821578,310.40739833520587)"
                  r="5.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "24" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "24"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "4",

                    // strokeOpacity: "0.5",
                  }}
                ></circle>
                <circle
                  key={"map30"}
                  transform="translate(470.91114184821578,500.40739833520587)"
                  r="5.066376244280061"
                  pointerEvents="none"
                  style={{
                    fill:
                      activeId === "1" ? "rgb(28,32,57)" : "rgb(84, 57, 252)",
                    stroke:
                      activeId === "1"
                        ? "rgba(28,32,57,0.1)"
                        : "rgba(84, 57, 252,0.1)",
                    opacity: "0.5",
                    strokeWidth: "4",
                    // strokeOpacity: "0.5",
                  }}
                ></circle>
              </>
            );
          })
        }
      </Geographies>
    </ComposableMap>
  );
};

export default SampleMap;
