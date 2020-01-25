const request = require('request-promise');

const api_key = '05a12e43c95b2528c27bcc3456dd72d8';

const data = {
  "points": {
    "point": [
      { // CO
        latitude: 39,
        longitude: -105.5
      },
      { // IL
        latitude: 40,
        longitude: -89.3
      },
      { // MA
        latitude: 42.4,
        longitude: -72
      }
    ]
  }
};

request({
  json: true,
  method: 'POST',
  uri: 'https://push.geckoboard.com/v1/send/769736-98eca890-12f4-0138-c4a4-02c1837580ef',
  body: { api_key, data },
});

console.log('Map data posted');
