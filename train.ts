// TASK ZS:

// Shunday function yozing, bu function parametrdagi array ichida
// bir marotaba takrorlangan element'ni qaytarsin

// MASALAN: singleNumber([4, 2, 1, 2, 1]); return 4;
function singleNumber(nums: number[]): number {
    return nums.reduce((acc, num) => acc ^ num, 0);
}

console.log(singleNumber([4, 2, 1, 2, 1])); 


// ZR-TASK:

// Shunday function yozing, u parametridagi string ichidagi raqam va sonlarni sonini sanasin.
// MASALAN: countNumberAndLetters(“string152%\¥”) return {number:3, letter:6}

// function countNumberAndLetters(input: string): { number: number, letter: number } {
//     let result = { number: 0, letter: 0 };

//     for (let char of input) {
//         if (/[0-9]/.test(char)) {
//             result.number++;
//         } else if (/[a-zA-Z]/.test(char)) {
//             result.letter++;
//         }
//     }

//     return result;
// }

// console.log(countNumberAndLetters("string152%\¥")); 


// ZQ-TASK:

// Shunday function yozing, u parametridagi array ichida 2 marta qaytarilgan sonlarni alohida araryda qaytarsin.
// MASALAN: findDuplicates([1,2,3,4,5,4,3,4]) return [3, 4]
// function findDuplicates(arr: number[]): number[] {
//     const seen: Set<number> = new Set();
//     const duplicates: Set<number> = new Set();

//     for (const num of arr) {
//         if (seen.has(num)) {
//             duplicates.add(num);
//         } else {
//             seen.add(num);
//         }
//     }

//     return Array.from(duplicates);
// }


// const result = findDuplicates([1, 2, 3,4, 5, 4, 3, 4]);
// console.log(result); 




// ZP-TASK:

// shunday function yozing, u 2 ta array parametr qabul qilsin. 
//Siz bu ikki arrayning qiymatlari o'xshash bo'lishini(ya'ni, ularning barcha elementlari bir xil bo'lishini) tekshirishingiz kerak.

// MASALAN: 
// areArraysEqual([1, 2, 3], [3, 1, 2]) // true
// areArraysEqual([1, 2, 3], [3, 1, 2, 1]) // true
// areArraysEqual([1, 2, 3], [4, 1, 2]) // false


// function areArraysEqual(arr1: number[], arr2: number[]): boolean {
// 	const countElements = (arr: number[]): Map<number, number> => {
// 		const countMap = new Map<number, number>();
// 		for (const num of arr) {
// 			countMap.set(num, (countMap.get(num) || 0) + 1);
// 		}
// 		return countMap;
// 	};

// 	const map1 = countElements(arr1);
// 	const map2 = countElements(arr2);

// 	if (map1.size !== map2.size) {
// 		return false;
// 	}

// 	for (const [key, value] of map1) {
// 		if (map2.get(key) !== value) {
// 			return false;
// 		}
// 	}

// 	return true;
// }

// // Misollar:
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2]));
// console.log(areArraysEqual([1, 2, 3], [3, 1, 2, 1])); 
// console.log(areArraysEqual([1, 2, 3], [4, 1, 2]));

// ZO-TASK:

// Shunday function yozing, u parametrdagi string ichidagi qavslar miqdori balansda ekanligini aniqlasin. Ya'ni ochish("(") va yopish(")") qavslar soni bir xil bolishi kerak.
// MASALAN: areParenthesesBalanced("string()ichida(qavslar)soni()balansda") return true

// function areParenthesesBalanced(input: string): boolean {
// 	let balance = 0;

// 	for (let char of input) {
// 		if (char === '(') {
// 			balance++;
// 		} else if (char === ')') {
// 			balance--;
// 		}

// 		if (balance < 0) {
// 			return false;
// 		}
// 	}

// 	return balance === 0;
// }

// console.log(areParenthesesBalanced('string()ichida(qavslar)soni()balansda'));

// ZN-TASK:

// Shunday function yozing, uni array va number parametri bolsin.
// Ikkinchi parametrda berilgan raqamli indexgacha arrayni orqasiga ogirib qaytarsin.
// MASALAN: rotateArray([1, 2, 3, 4, 5, 6], 3) return [5, 6, 1, 2, 3, 4]

// function rotateArray(arr: any[], num: number): any[] {
// 	if (arr.length === 0 || num >= arr.length) {
// 		return arr;
// 	}

// 	const part1 = arr.slice(0, num);
// 	const part2 = arr.slice(num);

// 	return part2.concat(part1);
// }

// // Masalan
// console.log(rotateArray([1, 2, 3, 4, 5, 6], 4));

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
