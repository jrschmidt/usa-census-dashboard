const fs = require('fs');

const jData = fs.readFileSync('people.json');
const data = JSON.parse(jData);

data.forEach( person => {
  for (const key in person) {
    console.log(` ${key} : ${person[key]}`);
  }
});
