import React from "react";
import useFetchNewData from "../../../hooks/useFetchNewData";
import BrowserBreadcrumb from "../../../components/BrowserBreadcrumb/BrowserBreadcrumb";

const BrowserBreadcrumbContainer = (props) => {
  const contentClickedHandler = useFetchNewData();

  return (
    <BrowserBreadcrumb
      tree={props.tree}
      clicked={contentClickedHandler}
      fetchPathData={props.fetchPathData}
    ></BrowserBreadcrumb>
  );
};

export default BrowserBreadcrumbContainer;
