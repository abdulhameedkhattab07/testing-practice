// Import Jest for testing
const { test, expect } = require('@jest/globals');

// ---------- Functions ----------

// Capitalize function
const capitalize = (string) => {
    if (typeof string !== 'string' || string.length === 0) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
};

// Reverse String function
const reverseString = (string) => {
    if (typeof string !== 'string') return '';
    return string.split('').reverse().join('');
};

// Calculator object
const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => (b !== 0 ? a / b : 'Error: Division by zero'),
    multiply: (a, b) => a * b,
};

// Caesar Cipher function
const caesarCipher = (string, shift) => {
    if (typeof string !== 'string') return '';

    const isLetter = (char) => /[a-zA-Z]/.test(char);

    return string.split('').map((char) => {
        if (!isLetter(char)) return char;

        const charCode = char.charCodeAt(0);
        const base = char >= 'a' ? 97 : 65; // ASCII base for lowercase or uppercase
        return String.fromCharCode(((charCode - base + shift) % 26) + base);
    }).join('');
};

// Analyze Array function
const analyzeArray = (array) => {
    if (!Array.isArray(array) || array.some((n) => typeof n !== 'number')) return {};

    const average = array.reduce((a, b) => a + b, 0) / array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);

    return {
        average,
        min,
        max,
        length: array.length,
    };
};

// ---------- Tests ----------

// Test for capitalize
test('capitalize the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('')).toBe('');
    expect(capitalize(123)).toBe('');
});

// Test for reverseString
test('reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('')).toBe('');
    expect(reverseString(123)).toBe('');
});

// Test for calculator
test('calculator operations', () => {
    expect(calculator.add(2, 3)).toBe(5);
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(6, 0)).toBe('Error: Division by zero');
    expect(calculator.multiply(2, 3)).toBe(6);
});

// Test for caesarCipher
test('caesar cipher with shift', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('xyz', 2)).toBe('zab');
    expect(caesarCipher('ABC', 3)).toBe('DEF');
    expect(caesarCipher('hello, world!', 5)).toBe('mjqqt, btwqi!');
});

// Test for analyzeArray
test('analyze an array', () => {
    expect(analyzeArray([1, 2, 3, 4])).toEqual({
        average: 2.5,
        min: 1,
        max: 4,
        length: 4,
    });

    expect(analyzeArray([5, 10, 15])).toEqual({
        average: 10,
        min: 5,
        max: 15,
        length: 3,
    });

    expect(analyzeArray([])).toEqual({});
    expect(analyzeArray([1, 'a', 3])).toEqual({});
});