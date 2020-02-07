const fs = require('fs');
const request = require('request-promise');

const api_key = '7f5126eea1addf5334e9341e200faa2f';
const gb = require('geckoboard')(api_key);

const pData = fs.readFileSync('population-data.json');
const populationData = JSON.parse(pData);


const putPopulation = (censusYear) => {
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

    (err, dataset) => {
      if (err) {
        console.error(err);
        return;
      };

      let data = populationData[censusYear];
      dataset.put(data,
        (err) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log('Data added');
        }
      );

    }

  );

}

const censusYear = 'd1850';
putPopulation(censusYear);
