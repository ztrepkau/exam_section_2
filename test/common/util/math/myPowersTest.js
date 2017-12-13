const cubeNum = require('../../../../src/common/util/math/myCube');
const squareNum = require('../../../../src/common/util/math/mySquare');
const myPower = require('../../../../src/common/util/math/myPowers')

const assert = require('chai').assert;
const num1 = 2;
const str1 = num1.toString();

describe("myPowersTest", function() {
    describe("squaring", function() {
        it('toSquare(' + num1 + ') should return square of "' + num1 + '"', function() {
            let result = squareNum.toSquare(num1);
            assert.equal(result, Math.pow(num1, 2));
        });

        it('toSquare("' + str1 + '") should return square of "' + str1 + '"', function() {
            let result = squareNum.toSquare(str1);
            assert.equal(result, Math.pow(num1, 2));
        });

        it('toSquare should return type number', function() {
            let result = squareNum.toSquare(num1);
            assert.typeOf(result, 'number');
        });
    })

    describe("cubing", function() {
        it('toCube(' + num1 + ') should return cube of "' + num1 + '"', function() {
            let result = cubeNum.toCube(num1);
            assert.equal(result, Math.pow(num1, 3));
        });

        it('toCube("' + num1 + '") should return cube of "' + num1 + '"', function() {
            let result = cubeNum.toCube(num1);
            assert.equal(result, Math.pow(num1, 3));
        });

        it('toCube should return type number', function() {
            let result = cubeNum.toCube(num1);
            assert.typeOf(result, 'number');
        });
    })
})