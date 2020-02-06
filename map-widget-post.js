const fs = require('fs');
const request = require('request-promise');

const mapApiKey = 'c972fc0682ba54b147ebbdab415f9317';


const mData = fs.readFileSync('map-data.json');
const mapData = JSON.parse(mData);

const censusYear = 'd1820';
let pointData = mapData[censusYear];

const data = {
  "points": {
    "point": pointData
  }
};

request({
  json: true,
  method: 'POST',
  uri: 'https://push.geckoboard.com/v1/send/769736-5f629d90-2503-0138-3f34-0a74f3e7b277',

  body: { mapApiKey, data},

});
console.log(`Map data posted for census year ${censusYear}`);
