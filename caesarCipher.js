

function caesarChipher(string, offset) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const regex = /\w/;
    const shiftedLetters = [];

    for (let char of string) {
        if (!regex.test(char)) {
            shiftedLetters.push(char);
            continue;
        }

        let index = alphabet.indexOf(char.toLowerCase());
        index += offset;
        index = (index > 25) ? index - 26 : index;
        let newChar = alphabet[index];

        if (char === char.toUpperCase()) {
            newChar = newChar.toUpperCase();
        }

        shiftedLetters.push(newChar);
    }

    return shiftedLetters.join("");
};


export default caesarChipher;