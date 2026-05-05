// REVERSE A STRING
// ✅ Method 1: Using built-in functions (most common)
function reverseString(str: string): string {
    return str.split('').reverse().join('');
}

// Example
console.log(reverseString("hello")); // "olleh"

function reverseStr(str: string): string {
    let reversed = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    
    return reversed;
}

// Example
console.log(reverseStr("hello")); // "olleh"



// FIND DUPLICATE NUMBER FROM ARRAY
// ✅ Method 1: Using Set (most common & efficient)
function findDuplicates(arr: number[]): number[] {
    const seen = new Set<number>();
    const duplicates = new Set<number>();

    for (const num of arr) {
        if (seen.has(num)) {
            duplicates.add(num);
        } else {
            seen.add(num);
        }
    }

    return Array.from(duplicates);
}

// Example
console.log(findDuplicates([1, 2, 3, 2, 4, 5, 1])); // [2, 1]


// ✅ Method 3: Find only ONE duplicate (important interview case)
function findDuplicate(arr: number[]): number {
    const seen = new Set<number>();

    for (const num of arr) {
        if (seen.has(num)) return num;
        seen.add(num);
    }

    return -1; // if no duplicate
}

// Example
console.log(findDuplicate([1, 3, 4, 2, 2])); // 2


// REVERSE AN AARAY
// ✅ Method 1: Built-in (quickest)
function reverseArray(arr: number[]): number[] {
    return arr.reverse();
}

// Example
console.log(reverseArray([1, 2, 3, 4])); // [4, 3, 2, 1]

// ✅ Method 3: Using loop (new array)
function reverseArr(arr: number[]): number[] {
    const result: number[] = [];

    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }

    return result;
}

// Example
console.log(reverseArr([1, 2, 3, 4])); // [4, 3, 2, 1]



// Sort an array
// ✅ Method 1: Built-in sort (most common)
function sortArray(arr: number[]): number[] {
    return arr.sort((a, b) => a - b); // ascending
}

// Example
console.log(sortArray([5, 2, 9, 1])); // [1, 2, 5, 9]
// 👉 For descending:
// arr.sort((a, b) => b - a);


// ✅ Method 2: Bubble Sort (basic interview logic)
function bubbleSort(arr: number[]): number[] {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

// Example
console.log(bubbleSort([5, 2, 9, 1])); // [1, 2, 5, 9]


// Merge two arrays and then reverse the result
// ✅ Method 1: Using spread operator + reverse (best & clean)
function mergeAndReverse(arr1: number[], arr2: number[]): number[] {
    return [...arr1, ...arr2].reverse();
}

// Example
console.log(mergeAndReverse([1, 2, 3], [4, 5, 6]));
// Output: [6, 5, 4, 3, 2, 1]


// ✅ Method 2: Using concat()
function mergeAndRvs(arr1: number[], arr2: number[]): number[] {
    return arr1.concat(arr2).reverse();
}


// Merge two arrays and sort them
// ✅ Method 1: Spread + sort (best & most used)
function mergeAndSort(arr1: number[], arr2: number[]): number[] {
    return [...arr1, ...arr2].sort((a, b) => a - b);
}

// Example
console.log(mergeAndSort([3, 1, 5], [4, 2]));
// Output: [1, 2, 3, 4, 5]

// ✅ Method 2: Using concat()
function mergeAndSrt(arr1: number[], arr2: number[]): number[] {
    return arr1.concat(arr2).sort((a, b) => a - b);
}


// ✅ Method 3: Merge two already sorted arrays (important 🔥)
function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    let i = 0, j = 0;
    const result: number[] = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            result.push(arr1[i]);
            i++;
        } else {
            result.push(arr2[j]);
            j++;
        }
    }

    // add remaining elements
    return result.concat(arr1.slice(i)).concat(arr2.slice(j));
}

// Example
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));
// Output: [1, 2, 3, 4, 5, 6]


// Sort a string
// ✅ Method 1: Built-in (most common)
function sortString(str: string): string {
    return str.split('').sort().join('');
}

// Example
console.log(sortString("dcba")); // "abcd"



// Find the occurrence (frequency) of letters in a string
function countChar(str: string, target: string): number {
    let count = 0;

    for (const char of str) {
        if (char === target) 
        count++;
    }

    return count;
}

// Example
console.log(countChar("hello", "o")); // 2




// Find the occurrence (frequency) of letters in a string
function countChars(str: string, target: string): number {
    let count = 0;

    for (const char of str) {
        if (char === target) 
        count++;
    }

    return count;
}

// Example
console.log(countChar("hello", "o")); // 2