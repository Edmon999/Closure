// Given an array. Determine whetherit consists only from uniques or not.
const uniquesArr = (arr) =>
  Array.from(new Set(arr)).length === arr.length ? true : false;
