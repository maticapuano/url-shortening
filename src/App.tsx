import React, { useState, useEffect } from "react";
import "./App.scss";
import { LinkPair } from "./shared/interfaces/interfaces";

import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import URLInput from "./components/URLInput/URLInput";
import ShortenedLinks from "./components/ShortenedLinks/ShortenedLinks";
import StatCard from "./components/StatCard/StatCard";
import Button from "./components/Button/Button";
import Footer from "./components/MainFooter/MainFooter";

// Icons
import BradRecognition from "./shared/images/icon-brand-recognition.svg";
import DetailedRecords from "./shared/images/icon-detailed-records.svg";
import FullyCustomizable from "./shared/images/icon-fully-customizable.svg";

const stats = [
  {
    title: "Brand Recognition",
    body:
      "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
    src: BradRecognition,
  },
  {
    title: "Detailed Records",
    body:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    src: DetailedRecords,
  },
  {
    title: "Fully Customizable",
    body:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    src: FullyCustomizable,
  },
];

const App = () => {
  const [linksList, setLinksList] = useState<LinkPair[]>([]);

  useEffect(() => {
    const data = localStorage.getItem("linksList");
    if (data) {
      setLinksList(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("linksList", JSON.stringify(linksList));
  });

  return (
    <React.Fragment>
      <header className="main-header">
        <div className="container">
          {/* Nav Bar */}
          <NavBar />
          {/* Header Content */}
          <Header />
        </div>
      </header>

      {/* URL Shortener */}
      <URLInput linksList={linksList} setLinksList={setLinksList} />

      <section className="statistics-container">
        {/* Short URLs */}
        <ShortenedLinks linksList={linksList} setLinksList={setLinksList} />
        <h2 className="section-title">
          Advanced Statistics
          <span className="lead text-center title-description">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </span>
        </h2>

        {/* Cards */}
        <div className="container flex cards-container">
          {stats.map((stat) => {
            return (
              <React.Fragment key={stat.title}>
                <StatCard title={stat.title} body={stat.body} src={stat.src} />
                <div className="cyan-line"></div>
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {/* Boost */}
      <section className="boost-links flex flex-column flex-center">
        <h2 className="boost-text">Boost your links today</h2>
        <Button className="large">Get Started</Button>
      </section>

      {/* Footer */}
      <Footer />
    </React.Fragment>
  );
};

export default App;
