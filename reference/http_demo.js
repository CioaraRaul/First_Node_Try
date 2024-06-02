const http = require("http");

// create server obj

http
  .createServer((req, res) => {
    res.write("Hello world");
    res.end();
  })
  .listen(5000, () => console.log("Server running..."));
