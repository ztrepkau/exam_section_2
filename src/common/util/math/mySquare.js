module.exports = {

    toSquare(inpNumber) {
        if (typeof inpNumber === "number") {
            return Math.pow(inpNumber, 2);
        } else if (typeof inpNumber === "string") {
            return Math.pow(parseInt(inpNumber), 2);
        }

    }
}

/*function toSquare(inpNumber) {
    return inpNumber * inpNumber;
}*/