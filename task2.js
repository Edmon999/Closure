const redundant = (str) => {
  return () => {
    return str;
  };
};
const f1 = redundant("apple");
