var API_KEY = '05a12e43c95b2528c27bcc3456dd72d8';

var gb = require('geckoboard')(API_KEY);

gb.datasets.findOrCreate(
  {
    id: 'us-census-x2',
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
      [
        { census_year: '1790', state: 'NY', state_name: 'New York', population: 340120},
        { census_year: '1790', state: 'VA', state_name: 'Virginia', population: 691737},
        { census_year: '1790', state: 'MA', state_name: 'Massachusetts', population: 378787},
        { census_year: '1790', state: 'PA', state_name: 'Pennsylvania', population: 434373},

        { census_year: '1800', state: 'NY', state_name: 'New York', population: 478103},
        { census_year: '1800', state: 'VA', state_name: 'Virginia', population: 807557},
        { census_year: '1800', state: 'MA', state_name: 'Massachusetts', population: 422845},
        { census_year: '1800', state: 'PA', state_name: 'Pennsylvania', population: 602365},

        { census_year: '1810', state: 'NY', state_name: 'New York', population: 556526},
        { census_year: '1810', state: 'VA', state_name: 'Virginia', population: 877683},
        { census_year: '1810', state: 'MA', state_name: 'Massachusetts', population: 472040},
        { census_year: '1810', state: 'PA', state_name: 'Pennsylvania', population: 810091},
      ],

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
