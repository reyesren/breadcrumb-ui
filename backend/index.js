const express = require("express");
const app = express();

let root = {
  type: "dir",
  children: {
    home: {
      type: "dir",
      children: {
        myname: {
          type: "dir",
          children: {
            "filea.txt": {
              type: "file",
            },
            "fileb.txt": {
              type: "file",
            },
          },
        },
        projects: {
          type: "dir",
          children: {
            mysupersecretproject: {
              type: "dir",
              children: {
                mysupersecretfile: {
                  type: "file",
                },
              },
            },
          },
        },
      },
    },
  },
};

const parsePathMiddleware = (req, res, next) => {
  let parsedPath = req.params[0].split("/");
  req.parsedPath = parsedPath;
  next();
};

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.get("/path/*", parsePathMiddleware, (req, res, next) => {
  let path = req.parsedPath;
  let i = 0;
  let isInvalid = false;
  let children;
  let type;

  while (i < path.length && !isInvalid) {
    let entry = path[i];
    if ((i === 0) & (entry === "root")) {
      type = root.type;
      if (type === "dir") children = root.children;
      else children = [];
    } else if (i > 0 && Object.keys(children).includes(entry)) {
      type = children[entry].type;
      if (type === "dir") children = children[entry].children;
      else children = [];
    } else isInvalid = true;
    i++;
  }

  if (isInvalid) next(new Error("That path doesn't exist!"));
  let response = {
    type,
    children: Object.keys(children),
  };
  res.json(response);
});

app.listen(5000, () => {
  console.log("Serving on port 5000");
});
