import { geoMercator } from "chartjs-chart-geo";
import React, { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const SampleMap = ({ setIsVisible, setTooltipPosition }) => {
  const geoUrl =
    "https://rawgit.com/Anujarya300/bubble_maps/master/data/geography-data/india.topo.json";

  const PROJECTION_CONFIG = {
    scale: 1000,
    // center: [78.9629, 22.5937],
    center: [82.9629, 22.5937],
  };

  const onMouseEnter = (geo, e) => {
    console.log(geo.properties.name);

    const { clientX, clientY } = e;
    setTooltipPosition({ x: clientX, y: clientY });
    console.log(e);
    setIsVisible(true);
  };
  const onMouseLeave = (geo) => {
    console.log(geo.properties.name);
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
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              //   fill="#a8b8e2"
              style={{
                default: {
                  fill: "#a8b8e2",
                },
                hover: {
                  fill: "#5439fc",
                },
              }}
              stroke="white"
              onMouseEnter={(e) => onMouseEnter(geo, e)}
              onMouseLeave={(e) => onMouseLeave(geo)}
            />
          ))
        }
      </Geographies>
    </ComposableMap>
  );
};

export default SampleMap;
