const fs = require('fs');
const request = require('request-promise');

const api_key = '7f5126eea1addf5334e9341e200faa2f';

const mData = fs.readFileSync('map-data.json');
const mapData = JSON.parse(mData);

const postMap = (censusYear) => {
  let pointData = mapData[censusYear];
  const data = {
    "points": {
      "point": pointData
    }
  };

  request({
    json: true,
    method: 'POST',
    uri: 'https://push.geckoboard.com/v1/send/769736-99ee27c0-2b2a-0138-5205-0a547e9ca74d',
    body: { api_key, data},
  })
  .then( () => {
    console.log(`Map data posted for census year ${censusYear.slice(1)}`);
  })
    .catch( (err) => {
      console.log(err);
    });
}

const censusYear = 'd1840';
postMap(censusYear);
