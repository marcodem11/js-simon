console.log('Simon dice');

function getRandomIntInclusive(min, max) {
    min = Math.cell(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}