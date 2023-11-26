function rot13(str) {
  return str.split("").reduce((accumulator, character) => {
    if (/[a-zA-Z]/.test(character)) {
      let charcode = character.charCodeAt() + 13;
      if (charcode > 90) {
        //Z
        charcode = 64 + (charcode - 90); //65 is A, shifting from Z to A counts as one shift
      }
      return accumulator + String.fromCharCode(charcode);
    } else {
      return accumulator + character;
    }
  }, ""); //empty initial value
}
console.log(rot13("SERR PBQR PNZC"));
