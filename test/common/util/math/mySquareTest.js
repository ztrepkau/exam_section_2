const squareNum = require('../../../../src/common/util/math/mySquare');
const assert = require('chai').assert;
const num1 = 2;
const str1 = '2';

describe('squareNum', function() {
    describe('toSquare', function() {
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
    });

});