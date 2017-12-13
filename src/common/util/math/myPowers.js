const squaring = require('./mySquare.js');
const cubing = require('./myCube.js');

module.exports = {
    toSquare(inpNumber) {
        return squaring.toSquare(inpNumber);
    },
    toCube(inpNumber) {
        return cubing.toCube(inpNumber);
    }

}