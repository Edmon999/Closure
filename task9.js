// Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a word
// or phrase without a repeating letter.
const isogram = (str) => {
  str = str.split("");
  if (Array.from(new Set(str)).length === str.length) {
    return "no isogram";
  }
  return "isogram";
};
