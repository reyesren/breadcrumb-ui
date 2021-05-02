import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import BrowserBreadcrumbContainer from "./BrowserBreadcrumbContainer/BrowserBreadcrumbContainer";
import MainContentContainer from "./MainContentContainer/MainContentContainer";
import Container from "react-bootstrap/Container";

const MainPage = () => {
  const [currTree, setCurrTree] = useState([]);
  const [type, setType] = useState("");
  const [children, setChildren] = useState([]);
  const [curr, setCurr] = useState("");

  const fetchPathData = useCallback(async (endpoint) => {
    try {
      const res = await axios.get(`http://localhost:5000/path/${endpoint}`);
      let current = endpoint.split("/");
      setCurrTree(current);
      setType(res.data.type);
      setChildren(res.data.children);
      setCurr(current[current.length - 1]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchPathData("root");
  }, [fetchPathData]);

  return (
    <Container>
      <BrowserBreadcrumbContainer
        tree={currTree}
        fetchPathData={fetchPathData}
      ></BrowserBreadcrumbContainer>
      <MainContentContainer
        tree={currTree}
        type={type}
        contents={children}
        currLocation={curr}
        fetchPathData={fetchPathData}
      ></MainContentContainer>
    </Container>
  );
};

export default MainPage;
