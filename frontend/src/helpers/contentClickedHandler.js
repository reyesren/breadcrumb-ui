export const contentClickedHandler = (currTree, itemClicked) => {
  let urlString = currTree.toString().replace(",", "/");
  urlString = urlString + "/" + itemClicked;
  props.fetchPathData(urlString);
};
