const stringLength = (string) => {
    const length = string.length;
    if (!(length < 1 || length > 10)) {
        return length
    }
}

const stringReverse = (string) => {
    return string.split('').reverse().join('')
}
module.exports = { stringLength, stringReverse }