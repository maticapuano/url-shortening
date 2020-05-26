import React, { useState } from "react";
import "./ShortenedLinks.scss";
import Button from "../Button/Button";

const LinkItem = (props: { original: string; short: string }) => {
  const [buttonClass, setButtonClass] = useState("small");
  const [copyText, setCopyText] = useState("Copy");
  const copyLink = () => {
    navigator.clipboard.writeText(props.short);
    setButtonClass("small copied");
    setCopyText("Copied!");
  };
  return (
    <div className="link-item">
      <div className="original-link">{props.original}</div>
      <hr />
      <div className="flex ">
        <div className="short-link">{props.short}</div>
        <Button
          className={buttonClass}
          style={{ borderRadius: "6px" }}
          onClick={copyLink}
        >
          {copyText}
        </Button>
      </div>
    </div>
  );
};

export default LinkItem;
