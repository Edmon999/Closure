//Create a function that implements partial sum
const sum = (num) => {
  return (num1) => {
    return num + num1;
  };
};
const addOne = sum(1);
addOne(2);
