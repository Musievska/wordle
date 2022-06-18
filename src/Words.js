import wordsBank from './wordleBank.txt';

export const boardDefaultValue = [
    ['', '', '', '', '',],
    ['', '', '', '', '',],
    ['', '', '', '', '',],
    ['', '', '', '', '',],
    ['', '', '', '', '',],
    ['', '', '', '', '',]
];

export const generateWordSet = async () => {
    let wordSet;
    let todayWord;
    await fetch(wordsBank)
        .then((response) => response.text())
        .then((results) => {
            const wordArr = results.split('\n');
            todayWord = wordArr[Math.floor(Math.random() * wordArr.length)];
            wordSet = new Set(wordArr);
        });
    return { wordSet, todayWord }
}