//Create a function printAfter that calls its argument after printing hello world
const print = () => console.log("Elon Musk");
const afterPrint = (cb) => {
  console.log("Hello World");
  cb();
};
afterPrint(print);
