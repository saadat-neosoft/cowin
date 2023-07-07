import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

import LastUpdated from "./components/LastUpdated/LastUpdated";
import Sections from "./components/Sections/Sections";
import "./styles/components/app.scss";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Sections />
      <LastUpdated />
      <Footer />
    </div>
  );
}

export default App;
