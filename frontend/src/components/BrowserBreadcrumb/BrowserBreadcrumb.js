import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import "./BrowserBreadcrumb.css";

const BrowserBreadcrumb = (props) => {
  const breadcrumbItems = props.tree.map((item, id) => {
    return (
      <Breadcrumb.Item
        onClick={() =>
          props.clicked(props.tree, item, props.fetchPathData, true, id)
        }
        key={id}
        active={id === props.tree.length - 1}
      >
        {item}
      </Breadcrumb.Item>
    );
  });

  return (
    <Breadcrumb className="breadcrumb-container">{breadcrumbItems}</Breadcrumb>
  );
};

export default BrowserBreadcrumb;
