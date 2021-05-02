import React from "react";
import "./MainContent.css";

const MainContent = (props) => {
  let title =
    props.type === "dir" ? (
      <h2 className="content-title">
        Displaying directory:{" "}
        <span className="current-location">{props.currLocation}</span>
      </h2>
    ) : (
      <h2 className="content-title">Displaying file: {props.currLocation}</h2>
    );
  let content =
    props.type === "dir" ? (
      props.contents.map((item, id) => {
        return (
          <div key={id} className="children-items">
            &#8226;
            <span
              className="children-item"
              onClick={() =>
                props.contentClicked(
                  props.tree,
                  item,
                  props.fetchPathData,
                  false
                )
              }
            >
              {item}
            </span>
          </div>
        );
      })
    ) : (
      <p>THIS IS FILE: {props.currLocation}</p>
    );
  return (
    <div className="contents-container">
      {title}
      <h4>Contents: </h4>
      {content}
    </div>
  );
};

export default MainContent;
