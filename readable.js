const StreamFromArray = require("./StreamFromArray");

const advices = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio esse ipsam dolorem quod nobis nemo",
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, nemo",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quisquam",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore numquam tempore fuga architecto quaerat illum perferendis ut, modi eligendi sapiente",
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, tempora.",
];

const stream1 = new StreamFromArray(advices);
stream1.on("data", chunk => console.log(chunk));
stream1.on("end", () => console.log("DONE"));

const stream2 = new StreamFromArray(advices, true);
stream2.on("data", chunk => console.log(chunk));
stream2.on("end", () => console.log("DONE"));
