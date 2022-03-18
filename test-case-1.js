const buildRunLength = require('./case-1');

const cases = [
    { string: "AAAAAAAAAAAAABBCCCCDD", expectedResult: "9A4A2B4C2D" }, 
    { string: "aA", expectedResult: "1a1A" }, 
    { string: "122333", expectedResult: "112233" },
    { string: "", expectedResult: "error" }
];


const validateCase = (caseConfig) => {
    const payload = { string:  caseConfig.string };
    try {
        const result = buildRunLength(payload);
        const isExpectedResult = result === caseConfig.expectedResult;
        return {
            status: isExpectedResult? 'PASSED' : 'FAILED',
            string: caseConfig.string,
            actualResult: result,
            expectedResult: caseConfig.expectedResult
        }
    } catch (error) {
        const isExpectedResult = caseConfig.expectedResult === 'error';
        return {
            status: isExpectedResult? 'PASSED' : 'FAILED',
            string: caseConfig.string,
            actualResult: 'error',
            expectedResult: caseConfig.expectedResult
        }
    }
};

const results = cases.map(caseConfig => validateCase(caseConfig)) 
console.table(results);