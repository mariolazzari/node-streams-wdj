const TransformText = require("./TransformText");
const xStream = new TransformText("x");

process.stdin.pipe(xStream).pipe(process.stdout);
