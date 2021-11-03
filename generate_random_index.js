const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
const upperCaseLetters = lowerCaseLetters.toUpperCase()
const numbers = '1234567890'
const collection = lowerCaseLetters + upperCaseLetters + numbers


function generateRandomIndex() {
  let shortenCode = ''
  for (let i = 1; i <= 5; i++) {
    const randomIndex = Math.floor(Math.random() * collection.length)
    shortenCode += collection[randomIndex]
  }
  return shortenCode
}


module.exports = generateRandomIndex