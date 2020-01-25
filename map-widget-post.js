const request = require('request-promise');

const api_key = '05a12e43c95b2528c27bcc3456dd72d8';

const data = {
  "points": {
    "point": [
      {latitude: 43.5, longitude: -71.6}, // NH 1790
      {latitude: 42.4, longitude: -72}, // MA 1790
      {latitude: 41.7, longitude: -71.5}, // RI 1790
      {latitude: 41.6, longitude: -72.7}, // CT 1790
      {latitude: 43, longitude: -75}, // NY 1790
      {latitude: 40.2, longitude: -74.4}, // NJ 1790
      {latitude: 41, longitude: -78}, // PA 1790
      {latitude: 39, longitude: -75.4}, // DE 1790
      {latitude: 39.2, longitude: -76.6}, // MD 1790
      {latitude: 37.8, longitude: -78.5}, // VA 1790
      {latitude: 35.5, longitude: -78.5}, // NC 1790
      {latitude: 33.8, longitude: -80.8}, // SC 1790
      {latitude: 32.9, longitude: -83.5}, // GA 1790

      {latitude: 44.2, longitude: -72.7}, // VT 1800
      {latitude: 37.8, longitude: -84.5}, // KY 1800
      {latitude: 35.8, longitude: -86.2}, // TN 1800

      {latitude: 40.1, longitude: -82.7}, // OH 1810

      {latitude: 31.2, longitude: -92.3}, // LA 1820
      {latitude: 40, longitude: -86.2}, // IN 1820
      {latitude: 33, longitude: -89.8}, // MS 1820
      {latitude: 40, longitude: -89.3}, // IL 1820
      {latitude: 33, longitude: -86.8}, // AL 1820
      {latitude: 45.5, longitude: -69}, // ME 1820

      {latitude: 38.5, longitude: -92.5}, // MO 1830

      {latitude: 35, longitude: -92.5}, // AR 1840
      {latitude: 44, longitude: -85}, // MI 1840

      {latitude: 28.5, longitude: -81.5}, // FL 1850
      {latitude: 31.5, longitude: -99.5}, // TX 1850
      {latitude: 42, longitude: -93.5}, // IA 1850
      {latitude: 44.5, longitude: -90}, // WI 1850
      {latitude: 37, longitude: -121}, // CA 1850

      {latitude: 46.3, longitude: -94.4}, // MN 1860
      {latitude: 44, longitude: -120.5}, // OR 1860

      {latitude: 38.5, longitude: -98.5}, // KS 1870
      {latitude: 38.5, longitude: -80.9}, // WV 1870
      {latitude: 39.5, longitude: -117}, // NV 1870
      {latitude: 41.5, longitude: -100}, // NE 1870

      {latitude: 39, longitude: -105.5}, // CO 1880

      {latitude: 47.5, longitude: -100.4}, // ND 1890
      {latitude: 44.5, longitude: -100.4}, // SD 1890
      {latitude: 47, longitude: -110}, // MT 1890
      {latitude: 47.5, longitude: -121}, // WA 1890
      {latitude: 44, longitude: -114.5}, // ID 1890
      {latitude: 43, longitude: -107.5}, // WY 1890

      {latitude: 39.5, longitude: -111.5}, // UT 1900

      {latitude: 35.5, longitude: -97}, // OK 1910

      {latitude: 34.6, longitude: -106}, // NM 1920
      {latitude: 34, longitude: -112} // AZ 1920
    ]
 }
};

request({
  json: true,
  method: 'POST',
  uri: 'https://push.geckoboard.com/v1/send/769736-16eeda20-2164-0138-63a6-020798e736f3',
  body: { api_key, data},
});

console.log('Map data posted');
