const normalText = document.getElementById("textfield");
const pascalText = document.getElementById("pascaltext");

const pascaliseText = function () {
  let words = normalText.value.split(" ");
  console.log(normalText.value);
  let pascalisedWords = [];
  words.forEach((word) => {
    if (word != "") {
      pascalisedWords.push(word[0].toUpperCase() + word.slice(1));
    }
  });
  pascalText.innerText = pascalisedWords.join(" ");
};
