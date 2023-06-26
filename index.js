import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";
inquirer
  .prompt([
    {
      message: "Write the URL, you wanted to generate QR? ",
      name: "URL",
    },
  ])
  .then((answer) => {
    const url = answer.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
    fs.writeFile("URLs.txt", url, (err) => {
      if (err) throw error;
      console.log("File Saved");
    });
  })
  .catch((error) => {
    console.log("ERROR in ENQUIRER");
  });
