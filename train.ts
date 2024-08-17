// ZK-TASK:

// Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin
// va 5 soniyadan keyin ishini toxtatsin.
// MASALAN: printNumbers()

function printNumbers() {
	let number = 1;

	const intervalId = setInterval(() => {
		console.log(number);
		number++;

		if (number > 5) {
			clearInterval(intervalId);
		}
	}, 1000);
}

printNumbers();

// ZJ-TASK:

// Shunday function yozing, u berilgan arrayni ichidagi numberlarni qiymatini hisoblab qaytarsin.
// MASALAN: reduceNestedArray([1, [1, 2, [4]]]) return 8

// function reduceNestedArray(arr: any[]): number {
//     return arr.reduce((acc, current) => {
//         if (Array.isArray(current)) {
//             return acc + reduceNestedArray(current);
//         } else if (typeof current === 'number') {
//             return acc + current;
//         }
//         return acc;
//     }, 0);
// }

// const result = reduceNestedArray([1, [1, 2, [4]]]);
// console.log(result);
