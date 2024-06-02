const fs = require("fs");
const path = require("path");

// // Create folder
// fs.mkdir(path.join(__dirname, "test"), { recursive: true }, (err) => {
//     if (err) throw err;
//     console.log("Folder created");

//     // Create and write to file
//     fs.writeFile(
//       path.join(__dirname, "test", "hello.txt"),
//       "I LOVE NJ",
//       (err) => {
//         if (err) throw err;
//         console.log("File created");

//         // Verify file content
//         fs.readFile(
//           path.join(__dirname, "test", "hello.txt"),
//           "utf8",
//           (err, data) => {
//             if (err) throw err;
//             console.log("File content:", data); // Should log "I LOVE NJ"
//           }
//         );
//       }
//     );
//   });

//Create folder

fs.mkdir(path.join(__dirname, "/test"), { recursive: true }, (err) => {
  if (err) throw err;
  console.log("folder created");
});

// create and write to file

fs.writeFile(
  path.join(__dirname, "/test", "hello.txt"),
  "incredible",
  (err) => {
    if (err) throw err;
    console.log("file created");

    fs.appendFile(path.join(__dirname, "/test", "hello.txt"), "v", (err) => {
      if (err) throw err;
      console.log("file created");
    });

    fs.readFile(
      path.join(__dirname, "test", "hello.txt"),
      "utf8",
      (err, data) => {
        if (err) throw new err();
        console.log(`This is the data: ${data}`);
      }
    );

    fs.rename(
      path.join(__dirname, "./test", "hello.txt"),
      path.join(__dirname, "./test", "newFileRecreated.txt"),
      (err) => {
        if (err) throw new err();
        console.log("new file created");
      }
    );
  }
);

// rename file

// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "fsafssdasa",
//   (err) => {
//     if (err) throw err;
//     console.log("file created");
//   }
// );
