//const { beforeEach } = require('node:test');
const arrayShift = require('./someFunction');

describe('Testing arrayShift unit',
    () => {
        const mockFunction = jest.fn();
        mockFunction.mockReturnValue( [3, 10, 18, 20] );

//        beforeEach(
//            () => array = [3, 10, 18, 20]
//        );

        afterAll( () => {
            console.log( mockFunction.mock.calls.length );
        }
        )

        it('returning first element',
        () => {
            expect( arrayShift(mockFunction, 5) ).toBe(3); 
        });

        it('returning next element',
        () => {
            expect( arrayShift(mockFunction, 10) ).toBe(18);
        });

        it('returning when its the last element',
        () => {
            expect( arrayShift(mockFunction, 20) ).toBe(-1); 
        });
    }
);
