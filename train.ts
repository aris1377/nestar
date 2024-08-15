// ZJ-TASK:

// Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8

function reduceNestedArray(arr: any[]): number {
    return arr.reduce((acc, current) => {
        if (Array.isArray(current)) {
            return acc + reduceNestedArray(current);
        } else if (typeof current === 'number') {
            return acc + current;
        }
        return acc;
    }, 0);
}


const result = reduceNestedArray([1, [1, 2, [4]]]);
console.log(result);
