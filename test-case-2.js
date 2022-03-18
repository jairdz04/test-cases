const arrayItemsToSquare = require('./case-2');

const cases = [
    { array: [1, 2, 3, 5, 6, 8, 9], expectedResult: [1, 4, 9, 25, 36, 64, 81] }, 
    { array: [-2, -1], expectedResult: [1, 4] }, 
    { array: [-10, -5, 0, 5, 10], expectedResult: [0, 25, 25, 100, 100] },
    { array: [], expectedResult: "error" }
];


const validateCase = (caseConfig) => {
    const payload = { array:  caseConfig.array };
    try {
        const result = arrayItemsToSquare(payload);
        const isExpectedResult = result.join() === caseConfig.expectedResult.join();
        return {
            status: isExpectedResult ? 'PASSED' : 'FAILED',
            array: caseConfig.array.join(),
            actualResult: result.join(),
            expectedResult: caseConfig.expectedResult.join()
        }
    } catch (error) {
        const isExpectedResult = caseConfig.expectedResult === 'error';
        return {
            status: isExpectedResult? 'PASSED' : 'FAILED',
            array: caseConfig.array.join(),
            actualResult: 'error',
            expectedResult: caseConfig.expectedResult
        }
    }
};

const results = cases.map(caseConfig => validateCase(caseConfig)) 
console.table(results);