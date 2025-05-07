const fs = require("fs");
const path = require("path");

// create folder
fs.mkdir(path.join(__dirname, "documents"), (err) => {
  if (err) throw new Error(err.message);

  // create file
  fs.writeFile(
    path.join(__dirname, "documents", "plans.txt"),
    "1. Learn Node.js",
    (err) => {
      if (err) throw new Error(err.message);

      // add data to file
      fs.appendFile(
        path.join(__dirname, "documents", "plans.txt"),
        " and Express.js",
        (err) => {
          if (err) throw new Error(err.message);

          // read file
          fs.readFile(
            path.join(__dirname, "documents", "plans.txt"),
            "utf-8",
            (err, data) => {
              if (err) throw new Error(err.message);

              // console.log(Buffer.from(data).toString());
              console.log(data);
            }
          );
        }
      );
    }
  );
});
