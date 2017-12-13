const cubeNum = require('../../../../src/common/util/math/myCube');
const assert = require('chai').assert;
const num1 = 3;
const str1 = num1.toString();
describe('cubeNum', function() {
    describe('toCube', function() {
        it('toCube(' + num1 + ') should return cube of "' + num1 + '"', function() {
            let result = cubeNum.toCube(num1);
            assert.equal(result, num1 * num1 * num1);
        });

        it('toCube("' + str1 + '") should return cube of "' + str1 + '"', function() {
            let result = cubeNum.toCube(str1);
            assert.equal(result, num1 * num1 * num1);
        });

        it('toCube should return type number', function() {
            let result = cubeNum.toCube(num1);
            assert.typeOf(result, 'number');
        });
    });

});