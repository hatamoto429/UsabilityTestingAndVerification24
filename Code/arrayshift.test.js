const shift = require('./arrayshift');

describe('ArrayShift function testing',
    () => {
        it(
            'Check for Next Element',
            () => {
                const testarray = [1, 2, 3, 4, 5];
                const testval = 1;
                expect(shift(testarray, testval)).toBe(2);
            }
        )
        it(
            'Check for First Element',
            () => {
                const testarray = [1, 2, 3, 4, 5];
                const testval = 4;
                expect(shift(testarray, testval)).toBe(5);
            }
        )
        it(
            'Check for Minus One',
            () => {
                const testarray = [1, 2, 3, 4, 5];
                const testval = 8;
                expect(shift(testarray, testval)).toBe(1);
            }
        )
    }
);
