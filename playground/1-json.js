const fs = require('fs');

const data = fs.readFileSync('1-json.json');
const dataJson = data.toString()
const parsedData = JSON.parse(dataJson)

parsedData.name = 'Aditya'
parsedData.age = 21

const userJson = JSON.stringify(parsedData)

fs.writeFileSync('1-json.json', userJson)