const StreamFromArray = require("./StreamFromArray");

const advices = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio esse ipsam dolorem quod nobis nemo",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, nemo",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quisquam",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore numquam tempore fuga architecto quaerat illum perferendis ut, modi eligendi sapiente",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, tempora.",
];

const stream = new StreamFromArray(advices);
stream.on("data", chunk => console.log(chunk));
stream.on("end", () => console.log("DONE"));
