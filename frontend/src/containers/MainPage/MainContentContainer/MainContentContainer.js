import React from "react";
import MainContent from "../../../components/MainContent/MainContent";
import useFetchNewData from "../../../hooks/useFetchNewData";

const MainContentContainer = (props) => {
  const { contentClickedHandler } = useFetchNewData();

  return (
    <MainContent
      tree={props.tree}
      type={props.type}
      contents={props.contents}
      contentClicked={contentClickedHandler}
      currLocation={props.currLocation}
      fetchPathData={props.fetchPathData}
    ></MainContent>
  );
};

export default MainContentContainer;
