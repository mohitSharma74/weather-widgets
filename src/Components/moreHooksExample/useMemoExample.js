// useMemo basically memoize expensive and intensive tasks
// by caching the values in temporary storage data structure 
// Data is stored in key:value pairs

// before (without useMemo hook)
const calcSquare = num => {
    const result = num * num;
    return result;
}

calcSquare(2); // 4
calcSquare(3); // 9
calcSquare(4); // 16


// after (with using useMemo hook)
const cache = {};

const calcSquare = num => {
    let result = cache[num];

    if (!result) {
        result = num * num;
        cache[num] = result;
    }
    
    return result;
}

calcSquare(2); // 4
calcSquare(3); // 9
calcSquare(4); // 16

// Cache: { 2:4, 3:9, 4:16 }

// The perfect of useMemo is to memoize expensive computations. It helps in 
// performance optimizations but there is no semantic guarantee. Recommended
// is the codebase without using useMemo - and then add it to optimize performance 