var API_KEY = '05a12e43c95b2528c27bcc3456dd72d8';

var gb = require('geckoboard')(API_KEY);

gb.datasets.findOrCreate(
  {
    id: 'us-census',
    fields: {
      quantity: {
        type: 'number',
        name: 'Number of sales'
      },
      gross: {
        type: 'money',
        name: 'Gross value of sales',
        currency_code: 'USD'
      },
      date: {
        type: 'date',
        name: 'Date'
      }
    }
  },
  function(err, dataset) {
    if (err) {
      console.error(err);
      return;
    }

    dataset.post(
      [
        { date: '2016-01-11', quantity: 620, gross: 31000 },
        { date: '2016-01-12', quantity: 583, gross: 28000 },
        { date: '2016-01-13', quantity: 694, gross: 34000 },
        { date: '2016-01-14', quantity: 780, gross: 39000 },
        { date: '2016-01-15', quantity: 876, gross: 46000 }
      ],
      {},
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
