import React from "react";
import "./Header.scss";
import WorkingIllustration from "../../shared/images/illustration-working.svg";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className="header-content">
      <div className="flex flex-column">
        <h1 className="header-text">
          More than just shorter links
          <span className="lead center">
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </span>
        </h1>

        <Button className="large">Get Started</Button>
      </div>

      <div className="header-image">
        <img src={WorkingIllustration} alt="illustration" />
      </div>
    </div>
  );
};

export default Header;
