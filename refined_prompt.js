/**
 * Converts a string to camelCase format.
 * 
 * @function toCamelCase
 * @param {string} input - The input string to convert. Can contain spaces, hyphens, underscores, or dots as separators.
 * @returns {string} The converted camelCase string where the first word is lowercase and subsequent words are capitalized.
 * @throws {Error} If input is not a string.
 * @throws {Error} If input is empty or contains only whitespace.
 * @throws {Error} If input contains only special characters with no valid words.
 * 
 * @example
 * toCamelCase('Hello World') // Returns: 'helloWorld'
 * @example
 * toCamelCase('hello-world') // Returns: 'helloWorld'
 * @example
 * toCamelCase('hello_world_example') // Returns: 'helloWorldExample'
 * @example
 * toCamelCase('hello  world') // Returns: 'helloWorld'
 */

/**
 * Converts a string to dot.case format.
 * 
 * @function toDotCase
 * @param {string} input - The input string to convert. Can contain spaces, hyphens, underscores, or dots as separators.
 * @returns {string} The converted dot.case string where words are separated by dots and all characters are lowercase.
 * @throws {Error} If input is not a string.
 * @throws {Error} If input is empty or contains only whitespace.
 * @throws {Error} If input contains only special characters with no valid words.
 * 
 * @example
 * toDotCase('Hello World') // Returns: 'hello.world'
 * @example
 * toDotCase('hello-world') // Returns: 'hello.world'
 * @example
 * toDotCase('hello_world_example') // Returns: 'hello.world.example'
 * @example
 * toDotCase('hello  world') // Returns: 'hello.world'
 */
function toCamelCase(input) {
    // Validate input type
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Check if input is empty or contains only special characters
    if (input.trim().length === 0) {
        throw new Error('Input cannot be empty or contain only whitespace');
    }

    // Remove leading/trailing whitespace and split by non-alphanumeric characters
    const words = input
        .trim()
        .split(/[\s\-_\.]+/)
        .filter(word => word.length > 0);

    if (words.length === 0) {
        throw new Error('Input must contain at least one word');
    }

    // Convert to camelCase
    return words
        .map((word, index) => {
            const lowerWord = word.toLowerCase();
            // First word stays lowercase, subsequent words are capitalized
            return index === 0
                ? lowerWord
                : lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join('');
}

// Example usage:
console.log(toCamelCase('Hello World')); // helloWorld
console.log(toCamelCase('hello-world')); // helloWorld
console.log(toCamelCase('hello_world_example')); // helloWorldExample
console.log(toCamelCase('hello  world')); // helloWorld
function toDotCase(input) {
    // Validate input type
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Check if input is empty or contains only special characters
    if (input.trim().length === 0) {
        throw new Error('Input cannot be empty or contain only whitespace');
    }

    // Remove leading/trailing whitespace and split by non-alphanumeric characters
    const words = input
        .trim()
        .split(/[\s\-_\.]+/)
        .filter(word => word.length > 0);

    if (words.length === 0) {
        throw new Error('Input must contain at least one word');
    }

    // Convert to dot.case
    return words
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
console.log(toDotCase('Hello World')); // hello.world
console.log(toDotCase('hello-world')); // hello.world
console.log(toDotCase('hello_world_example')); // hello.world.example
console.log(toDotCase('hello  world')); // hello.world
