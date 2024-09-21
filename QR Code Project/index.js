import input from '@inquirer/input';
import qr from "qr-image";
import fs from 'node:fs';


// Taking user input and storing it in a variable "url"
const url = await input({ message: 'Enter the URL:' });

// Generating QR-code and storing it in a .png file
var qr_png = qr.image(url);
qr_png.pipe(fs.createWriteStream('./My_QR_code.png'));

// Creating a text file and storing user input in it
fs.writeFile("./My_User_Input.txt", url, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });