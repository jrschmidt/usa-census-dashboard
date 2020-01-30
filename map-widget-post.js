const request = require('request-promise');

const api_key = '05a12e43c95b2528c27bcc3456dd72d8';

const data = {
  "points": {
    "point": [
      {latitude: 43.5, longitude: -71.6, color: '297ccc', size: 5}, // NH 1790
      {latitude: 42.4, longitude: -72, color: '5290cc', size: 5}, // MA 1790
      {latitude: 41.7, longitude: -71.5, color: '5290cc', size: 5}, // RI 1790
      {latitude: 41.6, longitude: -72.7, color: '5290cc', size: 5}, // CT 1790
      {latitude: 43, longitude: -75, color: '0068cc', size: 10}, // NY 1790
      {latitude: 40.2, longitude: -74.4, color: '297ccc', size: 5}, // NJ 1790
      {latitude: 41, longitude: -78, color: '0068cc', size: 10}, // PA 1790
      {latitude: 39, longitude: -75.4, color: '297ccc', size: 5}, // DE 1790
      {latitude: 39.2, longitude: -76.6, color: '5290cc', size: 5}, // MD 1790
      {latitude: 37.8, longitude: -78.5, color: '5290cc', size: 10}, // VA 1790
      {latitude: 35.5, longitude: -78.5, color: '297ccc', size: 10}, // NC 1790
      {latitude: 33.8, longitude: -80.8, color: '297ccc', size: 10}, // SC 1790
      {latitude: 32.9, longitude: -83.5, color: '0068cc', size: 10}, // GA 1790

      {latitude: 44.2, longitude: -72.7, color: '0068cc', size: 5}, // VT 1800
      {latitude: 37.8, longitude: -84.5, color: '0068cc', size: 10}, // KY 1800
      {latitude: 35.8, longitude: -86.2, color: '0068cc', size: 10}, // TN 1800

      {latitude: 40.1, longitude: -82.7, color: 'adbdcc', size: 10}, // OH 1810
    ]
 }
};

request({
  json: true,
  method: 'POST',
  uri: 'https://push.geckoboard.com/v1/send/769736-5f629d90-2503-0138-3f34-0a74f3e7b277',

  body: { api_key, data},
});

console.log('Map data posted');
