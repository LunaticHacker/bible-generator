import txt from "./bible";

function generate(start, len) {
  return new Promise((resolve, reject) => {
    const order = start.length;
    let currentGram = start;
    let result = currentGram;
    let ngrams = {};
    for (let i = 0; i < txt.length - order; i++) {
      let gram = txt.substring(i, i + order);
      if (!ngrams[gram]) {
        ngrams[gram] = [];
      }
      ngrams[gram].push(txt.charAt(i + order));
    }

    for (let i = 0; i < len; i++) {
      let possibilities = ngrams[currentGram];
      if (!possibilities) {
        break;
      }
      let random = Math.floor(Math.random() * possibilities.length);
      let next = possibilities[random];
      result += next;
      currentGram = result.substring(result.length - order, result.length);
    }
    if (result) resolve(result);
    else reject("Something is wrong");
  });
}
export default generate;
