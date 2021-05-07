//Write a function that implements filtering in array
const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
const filterVal = (arr) => values.filter((el) => !!el === true);
filterVal(values);
