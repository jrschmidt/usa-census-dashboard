var API_KEY = '05a12e43c95b2528c27bcc3456dd72d8';

var gb = require('geckoboard')(API_KEY);

gb.datasets.findOrCreate(
  {
    id: 'us-census-x',
    fields: {
      census_year: {
        type: 'string',
        name: 'Census Year'
      },
      state_code: {
        type: 'string',
        name: 'State'
      },
      state_name: {
        type: 'string',
        name: 'State Name'
      },
      population: {
        type: 'number',
        name: 'Population'
      }
    }
  },

  function(err, dataset) {
    if (err) {
      console.error(err);
      return;
    }

    dataset.post([]);
    // dataset.post(
    //   [
    //     { date: '2016-01-11', quantity: 620, gross: 31000 },
    //     { date: '2016-01-12', quantity: 583, gross: 28000 },
    //     { date: '2016-01-13', quantity: 694, gross: 34000 },
    //     { date: '2016-01-14', quantity: 780, gross: 39000 },
    //     { date: '2016-01-15', quantity: 876, gross: 46000 }
    //   ],
    //   function(err) {
    //     if (err) {
    //       console.error(err);
    //       return;
    //     }
    //
    //     console.log('Data added');
    //   }
    // );

  }

);
