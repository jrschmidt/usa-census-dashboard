var API_KEY = '05a12e43c95b2528c27bcc3456dd72d8';

var gb = require("geckoboard")(API_KEY);

gb.datasets.findOrCreate(
  {
    id: "sales.by_day",
    fields: {
      quantity: {
        type: "number",
        name: "Number of sales"
      },
      gross: {
        type: "money",
        name: "Gross value of sales",
        currency_code: "USD"
      },
      date: {
        type: "date",
        name: "Date"
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
        { date: "2016-01-05", quantity: 381, gross: 512000 },
        { date: "2016-01-06", quantity: 783, gross: 1675000 },
        { date: "2016-01-07", quantity: 606, gross: 849000 },
        { date: "2016-01-08", quantity: 198, gross: 34000 },
        { date: "2016-01-09", quantity: 917, gross: 1837000 },
        { date: "2016-01-10", quantity: 774, gross: 928000 },
      ],
      {},
      function(err) {
        if (err) {
          console.error(err);
          return;
        }

        console.log("Data added");
      }
    );
  }
);
