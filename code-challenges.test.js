// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

describe("codedMessage", () => {
    it("takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () =>{
        expect(codedMessage(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        expect(codedMessage(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        expect(codedMessage(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// Test Output:
    //  FAIL  ./code-challenges.test.js
    // codedMessage
    // ✕ takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0
    // ● codedMessage › takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0
    // ReferenceError: codedMessage is not defined
    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 total
    // Snapshots:   0 total
    // Time:        0.228 s
    // Ran all test suites.


// b) Create the function that makes the test pass.

// Pseudo code:
    // For each letter in string, convert letter to lowercase
    // If letter is a key in code, append the corresponding encoded value to return
    // Append the original letter return
    // Return solution as the encoded message


const codedMessage = (string) => {
    const codeReplacements = { 'a': '4', 'e': '3', 'i': '1', 'o': '0' }
    let codedSolution = ''  
    for (const letter of string) {
        const lowerCaseLetter = letter.toLowerCase()
        codedSolution += lowerCaseLetter in codeReplacements ? codeReplacements[lowerCaseLetter] : letter
    }
    return codedSolution
}

// Output:
    // PASS  ./code-challenges.test.js
    // codedMessage
    // ✓ takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (2 ms)
    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total
    // Snapshots:   0 total
    // Time:        0.163 s, estimated 1 s
    // Ran all test suites.

// Refactor:
// const codedMessage = (string) => {
//     const codeReplacements = { 'a': '4', 'e': '3', 'i': '1', 'o': '0' }       
//     let codedSolution = ''          
//     for (const letter of string) {
//         const lowerCaseLetter = letter.toLowerCase()
//         codedSolution += codeReplacements[lowerCaseLetter] || letter
//     }
//     return codedSolution
// }

// Uses the logical OR (||) operator to provide a default value of letter when codeReplacements[lowerCaseLetter] is falsy (i.e., undefined).
// This eliminates the need to use the in operator to check if lowerCaseLetter exists as a key in codeReplacements object.
// This results in a simpler and more concise code while achieving the same result as the original code.



// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

describe("doesItContainLetter", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        expect(doesItContainLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        expect(doesItContainLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// Test:
    // FAIL  ./code-challenges.test.js
    // codedMessage
    //   ✓ takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (1 ms)
    // doesItContainLetter
    //   ✕ takes in an array of words and a single letter and returns an array of all the words containing that particular letter
    // ● doesItContainLetter › takes in an array of words and a single letter and returns an array of all the words containing that particular letter
    //   ReferenceError: doesItContainLetter is not defined
    //   Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 passed, 2 total
    // Snapshots:   0 total
    // Time:        0.166 s
    // Ran all test suites.

// b) Create the function that makes the test pass.

// Pseudo code:
    // Takes in an array and a letter
    // For each word in array if word contains letter add word to new array
    // Returns array of filtered words that include the selected letter

const doesItContainLetter = (array, letter) => {
    const filteredWords = array.filter(word => word.toLowerCase().includes(letter.toLowerCase()))
    return filteredWords
}

// Output:
    // PASS  ./code-challenges.test.js
    // codedMessage
    //   ✓ takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (1 ms)
    // doesItContainLetter
    //   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter (1 ms)
    // Test Suites: 1 passed, 1 total
    // Tests:       2 passed, 2 total
    // Snapshots:   0 total
    // Time:        0.155 s, estimated 1 s
    // Ran all test suites.

// Refactor:
// const doesItContainLetter = (array, letter) => {
//     return array.filter(word => word.toLowerCase().includes(letter.toLowerCase()))
// }

// Return the result of filtering the input array using the .filter() method.
// For each word in the array, convert it to lowercase using .toLowerCase() method.
// Check if the lowercase word contains the lowercase specified letter using .includes() method.
// Check if the lowercase word contains the lowercase specified letter using .includes() method.
// If it does, add the word to the filteredWords array.
// Return the filteredWords array as the output.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe('notPoker', () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    const hand4 = [7, 2, 7, 2, 7]
    // Expected output: true
    it('takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind', () => {
      expect(notPoker(hand1)).toEqual(true)
      expect(notPoker(hand2)).toEqual(false)
      expect(notPoker(hand3)).toEqual(false)
      expect(notPoker(hand4)).toEqual(true)
    })
  })

// Test:
// FAIL  ./code-challenges.test.js
// codedMessage
//   ✓ takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (1 ms)
// doesItContainLetter
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter
// notPoker
//   ✕ takes in an array of 5 numbers and determines whether or not the array is a 'full house'. A full house is exactly one pair and one three of a kind.
// ● notPoker › takes in an array of 5 numbers and determines whether or not the array is a 'full house'. A full house is exactly one pair and one three of a kind.
//   ReferenceError: notPoker is not defined
// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        0.174 s, estimated 1 s
// Ran all test suites.

// b) Create the function that makes the test pass.

// Pseudo code:
    // Create a function called notPoker that takes in an array hand as input
    // Create an empty object winningHand to store the occurrences of numbers in hand
    // Loop through each number cardNum in hand
        // a. If winningHand does not have a property for cardNum, add cardNum as a property with value 0
        // b. Increment the value of cardNum in winningHand by 1
    // Create variables hasPair and hasThreeOfAKind, and set them to false
    // Loop through each property cardNum in winningHand
        // a. If the value of cardNum in winningHand is 2, set hasPair to true
        // b. If the value of cardNum in winningHand is 3, set hasThreeOfAKind to true
    // 6. Return true if hasPair and hasThreeOfAKind are both true, otherwise return false

const notPoker = (hand) => {
    const winningHand = {}
    for (const cardNum of hand) {
        if (!winningHand[cardNum]) {
            winningHand[cardNum] = 0
        }
        winningHand[cardNum]++
    }
    let hasPair = false
    let hasThreeOfAKind = false
    for (const cardNum in winningHand) {
        if (winningHand[cardNum] === 2) {
            hasPair = true
        } else if (winningHand[cardNum] === 3) {
            hasThreeOfAKind = true
        }
    }
    return hasPair && hasThreeOfAKind
}

// Output:
    // PASS  ./code-challenges.test.js
    // codedMessage
    //   ✓ takes in a string and returns a string with a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (1 ms)
    // doesItContainLetter
    //   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter
    // notPoker
    //   ✓ takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind

    // Test Suites: 1 passed, 1 total
    // Tests:       3 passed, 3 total
    // Snapshots:   0 total
    // Time:        0.161 s, estimated 1 s
    // Ran all test suites.