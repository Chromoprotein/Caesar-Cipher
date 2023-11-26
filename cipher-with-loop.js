function rot13(str) {
  let shiftedArray = [];
  let charArray = str.split("");

  for (let character of charArray) {
    if (/[a-zA-Z]/.test(character)) {
      let charcode = character.charCodeAt() + 13;
      if (charcode > 90) {
        //Z
        charcode = 64 + (charcode - 90); //65 is A, shifting from Z to A counts as one shift
      }
      shiftedArray.push(String.fromCharCode(charcode));
    } else {
      shiftedArray.push(character);
    }
  }
  return shiftedArray.join("");
}
console.log(rot13("SERR PBQR PNZC"));
