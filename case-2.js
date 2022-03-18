const arrayItemsToSquare = ({ array = [] }) => {
    if(Array.isArray(array) && !array.length) 
        throw new Error('Empty array - nothing to process')


    const result =  array.reduce((squares, nextValue) => {
        const square = Math.pow(nextValue, 2);
        squares.push(square);
        return squares;
    }, []);

    return result.sort((a, b) => a - b);
}; 


module.exports = arrayItemsToSquare;