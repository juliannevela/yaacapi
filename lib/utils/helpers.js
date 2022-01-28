function capFirstLetter(strInput) {
    const separatedWords = strInput.toLowerCase().split(' ');

    for (let i = 0; i < separatedWords.length; i++) {
        separatedWords[i] = separatedWords[i].charAt(0).toUpperCase() + separatedWords[i].subString(1);
    }
    return separatedWords.join(' ');
}

module.exports = { capFirstLetter };
