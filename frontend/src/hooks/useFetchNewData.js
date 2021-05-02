import { useCallback } from "react";

const useFetchNewData = () => {
  const contentClickedHandler = useCallback(
    (currTree, itemClicked, fetchPathData, isBreadcrumb, indClicked) => {
      let urlString;
      if (!isBreadcrumb) {
        urlString = currTree.join("/");
        urlString = urlString + "/" + itemClicked;
      } else {
        let treeCpy = [...currTree];
        treeCpy = treeCpy.slice(0, indClicked + 1);
        urlString = treeCpy.join("/");
      }
      fetchPathData(urlString);
    },
    []
  );

  return contentClickedHandler;
};

export default useFetchNewData;
