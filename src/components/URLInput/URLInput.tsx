import React, { useState } from "react";
import "./URLInput.scss";
import Button from "../Button/Button";
import { LinkPair } from "../../shared/interfaces/interfaces";
const relink = "https://rel.ink/api/links/";

const URLInput = (props: {
  linksList: LinkPair[];
  setLinksList: React.Dispatch<React.SetStateAction<LinkPair[]>>;
}) => {
  const [errorText, setErrorText] = useState("Please add a link");
  const [errorClass, setErrorClass] = useState("hidden");
  const [inputClass, setInputClass] = useState("link-input");
  const [containerClass, setContainerClass] = useState(
    "link-shorten-container"
  );
  const [link, setLink] = useState("");

  const onEnter = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.keyCode === 13) shortenLink();
  };

  const setError = (show: boolean) => {
    if (show) {
      setErrorClass("error-text");
      setInputClass("link-input error");
      setContainerClass("link-shorten-container reposition");
    } else {
      setErrorClass("hidden");
      setInputClass("link-input");
      setContainerClass("link-shorten-container");
    }
  };

  const getShortLink = async (url: object) => {
    const response = await fetch(relink, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(url),
    });
    const json = await response.json();

    return json.hashid;
  };

  const shortenLink = async () => {
    // Empty Input
    if (link.trim() === "") {
      // show input error
      setErrorText("Please add a link");
      setError(true);
    } else {
      // revert input back
      if (errorClass === "error-text") {
        setError(false);
      }

      const url = { url: link.trim() };
      const hashid = await getShortLink(url);
      // Valid Input URL
      if (hashid) {
        const state = [...props.linksList];
        state.push({ original: link, short: `https://rel.ink/${hashid}` });
        props.setLinksList(state);
        setLink("");
      } else {
        setErrorText("Invalid Link");
        setError(true);
      }
    }
  };

  return (
    <div className={containerClass}>
      <input
        title="shortener"
        value={link}
        className={inputClass}
        placeholder="Shorten a link here..."
        onChange={(e) => setLink(e.target.value)}
        onKeyDown={(e) => onEnter(e)}
      />
      <div className={errorClass}>{errorText}</div>
      <Button
        className="large"
        style={{
          margin: "0",
          height: "64px",
          borderRadius: "12px",
        }}
        onClick={shortenLink}
      >
        Shorten It!
      </Button>
    </div>
  );
};

export default URLInput;
