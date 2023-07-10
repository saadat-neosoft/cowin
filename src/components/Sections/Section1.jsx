import "../../styles/components/Sections/section-1.scss";
import card1 from "../../assets/total-vaccination-doses-icon.svg";
import card2 from "../../assets/site-conducting-vaccination-icon.svg";
import card3 from "../../assets/total-registrations-icon.svg";
import { useEffect, useState } from "react";
import Section1Card from "./Section1Card";

const Section1 = () => {
  const [data, setData] = useState([]);

  const [card1Total, setCard1Total] = useState();
  const [card2Total, setCard2Total] = useState();
  const [card3Total, setCard3Total] = useState();

  const [card1Stats, setCard1Stats] = useState();
  const [card2Stats, setCard2Stats] = useState();
  const [card3Stats, setCard3Stats] = useState();

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
        // console.log(jsonData.topBlock.vaccination.tot_dose_2);
        setData((prevData) => [...prevData, jsonData]);

        setCard1Total(
          jsonData.topBlock.vaccination.total_doses.toLocaleString("en-IN")
        );
        setCard2Total(jsonData.topBlock.sites.total.toLocaleString("en-IN"));
        setCard3Total(
          jsonData.topBlock.registration.total.toLocaleString("en-IN")
        );

        setCard1Stats([
          {
            title: "Dose 1",
            stat: jsonData.topBlock.vaccination.tot_dose_1.toLocaleString(
              "en-IN"
            ),
          },
          {
            title: "Dose 2",
            stat: jsonData.topBlock.vaccination.tot_dose_2.toLocaleString(
              "en-IN"
            ),
          },
          {
            title: "Precaution Dose",
            stat: jsonData.topBlock.vaccination.tot_pd.toLocaleString("en-IN"),
          },
        ]);
        setCard2Stats([
          {
            title: "Goverment",
            stat: jsonData.topBlock.sites.govt.toLocaleString("en-IN"),
          },
          {
            title: "Private",
            stat: jsonData.topBlock.sites.pvt.toLocaleString("en-IN"),
          },
        ]);
        setCard3Stats([
          {
            title: "Age 12-14",
            stat: jsonData.topBlock.registration.cit_12_14.toLocaleString(
              "en-IN"
            ),
          },
          {
            title: "Age 15-17",
            stat: jsonData.topBlock.registration.cit_15_17.toLocaleString(
              "en-IN"
            ),
          },
          {
            title: "Age 18-44",
            stat: jsonData.topBlock.registration.cit_18_45.toLocaleString(
              "en-IN"
            ),
          },
          {
            title: "Age 45+",
            stat: jsonData.topBlock.registration.cit_45_above.toLocaleString(
              "en-IN"
            ),
          },
        ]);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="section-1">
      <Section1Card
        img={card1}
        imgBgColor="#d7e8fc"
        data={data}
        title="Total Vaccination Doses"
        cardStats={card1Stats}
        cardTotal={card1Total}
      />
      <Section1Card
        img={card2}
        imgBgColor="#d0fff1"
        data={data}
        title="Sites Conducting Vaccination"
        cardStats={card2Stats}
        cardTotal={card2Total}
      />
      <Section1Card
        img={card3}
        imgBgColor="#ffebce"
        data={data}
        title="Total Registrations"
        cardStats={card3Stats}
        cardTotal={card3Total}
      />
    </div>
  );
};

export default Section1;
