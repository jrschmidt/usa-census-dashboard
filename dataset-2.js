var API_KEY = '05a12e43c95b2528c27bcc3456dd72d8';

var gb = require("geckoboard")(API_KEY);

gb.datasets.findOrCreate(
  {
    id: "time-into-conference",
    fields: {
      time_to_from_start: {
        minutes: "datetime"
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
