import "../../styles/components/Sections/section-1.scss";
import Section1Card1 from "./Section1Card1";

import card1 from "../../assets/total-vaccination-doses-icon.svg";
import card2 from "../../assets/site-conducting-vaccination-icon.svg";
import card3 from "../../assets/total-registrations-icon.svg";
import { useEffect, useState } from "react";
import Section1Card2 from "./Section1Card2";
import Section1Card3 from "./Section1Card3";

const Section1 = () => {
  const [data, setData] = useState([]);
  // const [vaccinationTotal, setVaccinationTotal] = useState(null);

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
          `https://api.cowin.gov.in/api/v1/reports/v2/getPublicReports?state_id=&district_id=&${formattedDate}`
        );
        const jsonData = await response.json();
        // console.log(jsonData.topBlock);
        setData((prevData) => [...prevData, jsonData]);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // useEffect(() => {
  //   setVaccinationTotal(data[0]?.topBlock.vaccination.total_doses);
  // }, [data]);

  return (
    <div className="section-1">
      <Section1Card1
        img={card1}
        imgBgColor="#d7e8fc"
        data={data}
        // vaccinationTotal={vaccinationTotal}
      />
      <Section1Card2 img={card2} imgBgColor="#d0fff1" data={data} />
      <Section1Card3 img={card3} imgBgColor="#ffebce" data={data} />
    </div>
  );
};

export default Section1;
