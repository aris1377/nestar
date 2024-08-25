// ZN-TASK:

// Shunday function yozing, uni array va number parametri bolsin.
// Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]

function rotateArray(arr: any[], num: number): any[] {
	if (arr.length === 0 || num >= arr.length) {
		return arr;
	}

	const part1 = arr.slice(0, num);
	const part2 = arr.slice(num);

	return part2.concat(part1);
}

// Masalan
console.log(rotateArray([1, 2, 3, 4, 5, 6], 4)); 

// TASK ZM:

// Shunday function yozing, va bu function parametr
// sifatida raqamlarni qabul qilsin. Bu function qabul qilingan
// raqamlarni orqasiga o'girib qaytarsin

// MASALAN: reverseInteger(123456789); return 987654321;

// Yuqoridagi misolda, function kiritilgan raqamlarni orqasiga
// o'girib (reverse) qilib qaytarmoqda. qq

// ZL-TASK:

// function stringToKebab(str: string): string {
// 	return str
// 		.replace(/([a-z])([A-Z])/g, '$1-$2')
// 		.replace(/\s+/g, '-')
// 		.toLowerCase();
// }

// console.log(stringToKebab('I love Kebab'));

// Shunday function yozing, u parametrda berilgan stringni kebab casega otkazib qaytarsin.
// Bosh harflarni kichik harflarga ham otkazsin.
// MASALAN: stringToKebab(“I love Kebab”) return “i-love-kebab”
// ZK-TASK:

// Shunday function yozing, u har soniyada bir marta consolega 1 dan 5 gacha bolgan raqamlarni chop etsin
// va 5 soniyadan keyin ishini toxtatsin.
// MASALAN: printNumbers()

// function printNumbers() {
// 	let number = 1;

// 	const intervalId = setInterval(() => {
// 		console.log(number);
// 		number++;

// 		if (number > 5) {
// 			clearInterval(intervalId);
// 		}
// 	}, 1000);
// }

// printNumbers();

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
