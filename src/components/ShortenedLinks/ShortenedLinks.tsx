import React from "react";
import "./ShortenedLinks.scss";
import LinkItem from "./LinkItem";
import Button from "../Button/Button";
import { LinkPair } from "../../shared/interfaces/interfaces";

const ShortenedLinks = (props: {
  linksList: LinkPair[];
  setLinksList: React.Dispatch<React.SetStateAction<LinkPair[]>>;
}) => {
  const clearLinks = () => {
    props.setLinksList([]);
  };

  return (
    <div className="shortened-link-container">
      {props.linksList.map((link) => {
        return (
          <LinkItem
            key={link.short}
            original={link.original}
            short={link.short}
          />
        );
      })}
      {props.linksList.length > 0 ? (
        <Button
          className="large"
          style={{ marginTop: "2rem" }}
          onClick={clearLinks}
        >
          Clear Links
        </Button>
      ) : (
        ""
      )}
    </div>
  );
};

export default ShortenedLinks;
