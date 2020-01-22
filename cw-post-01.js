const request = require('request-promise');

const api_key = '05a12e43c95b2528c27bcc3456dd72d8';

const data = {
  "points": {
    "point": [
      {
        "city": {
          "city_name": "Denver",
          "country_code": "US",
          "region_code": "CO"
        }
      },
      {
        "city": {
          "city_name": "Chicago",
          "country_code": "US",
          "region_code": "IL"
        }
      },
      {
        "city": {
          "city_name": "Boston",
          "country_code": "US",
          "region_code": "MA"
        }
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
