var API_KEY = '7f5126eea1addf5334e9341e200faa2f';

var gb = require('geckoboard')(API_KEY);

gb.datasets.findOrCreate(
  {
    id: 'us-census-x6',
    fields: {
      census_year: {
        type: 'string',
        name: 'Census Year'
      },
      state: {
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
    },
    unique_by: ['census_year', 'state']
  },

  function(err, dataset) {
    if (err) {
      console.error(err);
      return;
    }

    dataset.put(
      [],

      function(err) {
        if (err) {
          console.error(err);
          return;
        }

        console.log('Data added');
      }
    );

  }

);
