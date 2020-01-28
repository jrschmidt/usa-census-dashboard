var API_KEY = '05a12e43c95b2528c27bcc3456dd72d8';

var gb = require('geckoboard')(API_KEY);

gb.datasets.findOrCreate(
  {
    id: 'us-census-x3',
    fields: {
      census_year: {
        type: 'string',
        name: 'Census Year'
      },
      census_date: {
        type: 'date',
        name: 'Census Date'
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
        {census_year: '1790',  census_date: '1790-04-01', state: 'NH', state_name: 'New Hampshire', population: 141885},
        {census_year: '1790',  census_date: '1790-04-01', state: 'MA', state_name: 'Massachusetts', population: 378787},
        {census_year: '1790',  census_date: '1790-04-01', state: 'RI', state_name: 'Rhode Island', population: 68825},
        {census_year: '1790',  census_date: '1790-04-01', state: 'CT', state_name: 'Connecticut', population: 237946},
        {census_year: '1790',  census_date: '1790-04-01', state: 'NY', state_name: 'New York', population: 340120},
        {census_year: '1790',  census_date: '1790-04-01', state: 'NJ', state_name: 'New Jersey', population: 184139},
        {census_year: '1790',  census_date: '1790-04-01', state: 'PA', state_name: 'Pennsylvania', population: 434373},
        {census_year: '1790',  census_date: '1790-04-01', state: 'DE', state_name: 'Delaware', population: 59096},
        {census_year: '1790',  census_date: '1790-04-01', state: 'MD', state_name: 'Maryland', population: 319728},
        {census_year: '1790',  census_date: '1790-04-01', state: 'VA', state_name: 'Virginia', population: 691737},
        {census_year: '1790',  census_date: '1790-04-01', state: 'NC', state_name: 'North Carolina', population: 393751},
        {census_year: '1790',  census_date: '1790-04-01', state: 'SC', state_name: 'South Carolina', population: 249073},
        {census_year: '1790',  census_date: '1790-04-01', state: 'GA', state_name: 'Georgia', population: 82548},

        {census_year: '1800',  census_date: '1800-04-01', state: 'NH', state_name: 'New Hampshire', population: 183858, percent_change: 29.58},
        {census_year: '1800',  census_date: '1800-04-01', state: 'MA', state_name: 'Massachusetts', population: 422845, percent_change: 11.63},
        {census_year: '1800',  census_date: '1800-04-01', state: 'RI', state_name: 'Rhode Island', population: 69122, percent_change: 0.43},
        {census_year: '1800',  census_date: '1800-04-01', state: 'CT', state_name: 'Connecticut', population: 251002, percent_change: 5.49},
        {census_year: '1800',  census_date: '1800-04-01', state: 'NY', state_name: 'New York', population: 589051, percent_change: 73.19},
        {census_year: '1800',  census_date: '1800-04-01', state: 'NJ', state_name: 'New Jersey', population: 211149, percent_change: 14.67},
        {census_year: '1800',  census_date: '1800-04-01', state: 'PA', state_name: 'Pennsylvania', population: 602365, percent_change: 38.67},
        {census_year: '1800',  census_date: '1800-04-01', state: 'DE', state_name: 'Delaware', population: 64273, percent_change: 8.76},
        {census_year: '1800',  census_date: '1800-04-01', state: 'MD', state_name: 'Maryland', population: 341548, percent_change: 6.82},
        {census_year: '1800',  census_date: '1800-04-01', state: 'VA', state_name: 'Virginia', population: 807557, percent_change: 16.74},
        {census_year: '1800',  census_date: '1800-04-01', state: 'NC', state_name: 'North Carolina', population: 478103, percent_change: 21.42},
        {census_year: '1800',  census_date: '1800-04-01', state: 'SC', state_name: 'South Carolina', population: 345591, percent_change: 38.75},
        {census_year: '1800',  census_date: '1800-04-01', state: 'GA', state_name: 'Georgia', population: 162686, percent_change: 97.08},
        {census_year: '1800',  census_date: '1800-04-01', state: 'VT', state_name: 'Vermont', population: 154465},
        {census_year: '1800',  census_date: '1800-04-01', state: 'KY', state_name: 'Kentucky', population: 220955},
        {census_year: '1800',  census_date: '1800-04-01', state: 'TN', state_name: 'Tennessee', population: 105602},

        {census_year: '1810',  census_date: '1810-04-01', state: 'NH', state_name: 'New Hampshire', population: 214460, percent_change: 16.64},
        {census_year: '1810',  census_date: '1810-04-01', state: 'MA', state_name: 'Massachusetts', population: 472040, percent_change: 11.63},
        {census_year: '1810',  census_date: '1810-04-01', state: 'RI', state_name: 'Rhode Island', population: 76931, percent_change: 11.30},
        {census_year: '1810',  census_date: '1810-04-01', state: 'CT', state_name: 'Connecticut', population: 261942, percent_change: 4.36},
        {census_year: '1810',  census_date: '1810-04-01', state: 'NY', state_name: 'New York', population: 959049, percent_change: 62.81},
        {census_year: '1810',  census_date: '1810-04-01', state: 'NJ', state_name: 'New Jersey', population: 245562, percent_change: 16.30},
        {census_year: '1810',  census_date: '1810-04-01', state: 'PA', state_name: 'Pennsylvania', population: 810091, percent_change: 34.49},
        {census_year: '1810',  census_date: '1810-04-01', state: 'DE', state_name: 'Delaware', population: 72674, percent_change: 13.07},
        {census_year: '1810',  census_date: '1810-04-01', state: 'MD', state_name: 'Maryland', population: 380546, percent_change: 11.42},
        {census_year: '1810',  census_date: '1810-04-01', state: 'VA', state_name: 'Virginia', population: 877683, percent_change: 8.68},
        {census_year: '1810',  census_date: '1810-04-01', state: 'NC', state_name: 'North Carolina', population: 556526, percent_change: 16.40},
        {census_year: '1810',  census_date: '1810-04-01', state: 'SC', state_name: 'South Carolina', population: 415115, percent_change: 20.12},
        {census_year: '1810',  census_date: '1810-04-01', state: 'GA', state_name: 'Georgia', population: 251407, percent_change: 54.54},
        {census_year: '1810',  census_date: '1810-04-01', state: 'VT', state_name: 'Vermont', population: 217895, percent_change: 41.06},
        {census_year: '1810',  census_date: '1810-04-01', state: 'KY', state_name: 'Kentucky', population: 406511, percent_change: 83.98},
        {census_year: '1810',  census_date: '1810-04-01', state: 'TN', state_name: 'Tennessee', population: 261727, percent_change: 147.84},
        {census_year: '1810',  census_date: '1810-04-01', state: 'OH', state_name: 'Ohio', population: 230760},

        {census_year: '1820',  census_date: '1820-04-01', state: 'NH', state_name: 'New Hampshire', population: 244161, percent_change: 13.85},
        {census_year: '1820',  census_date: '1820-04-01', state: 'MA', state_name: 'Massachusetts', population: 523287, percent_change: 10.86},
        {census_year: '1820',  census_date: '1820-04-01', state: 'RI', state_name: 'Rhode Island', population: 83059, percent_change: 7.97},
        {census_year: '1820',  census_date: '1820-04-01', state: 'CT', state_name: 'Connecticut', population: 275248, percent_change: 5.08},
        {census_year: '1820',  census_date: '1820-04-01', state: 'NY', state_name: 'New York', population: 1372812, percent_change: 43.14},
        {census_year: '1820',  census_date: '1820-04-01', state: 'NJ', state_name: 'New Jersey', population: 277575, percent_change: 13.04},
        {census_year: '1820',  census_date: '1820-04-01', state: 'PA', state_name: 'Pennsylvania', population: 1049458, percent_change: 29.55},
        {census_year: '1820',  census_date: '1820-04-01', state: 'DE', state_name: 'Delaware', population: 72749, percent_change: 0.10},
        {census_year: '1820',  census_date: '1820-04-01', state: 'MD', state_name: 'Maryland', population: 407350, percent_change: 7.04},
        {census_year: '1820',  census_date: '1820-04-01', state: 'VA', state_name: 'Virginia', population: 938261, percent_change: 6.90},
        {census_year: '1820',  census_date: '1820-04-01', state: 'NC', state_name: 'North Carolina', population: 638829, percent_change: 14.79},
        {census_year: '1820',  census_date: '1820-04-01', state: 'SC', state_name: 'South Carolina', population: 502741, percent_change: 21.11},
        {census_year: '1820',  census_date: '1820-04-01', state: 'GA', state_name: 'Georgia', population: 340989, percent_change: 35.63},
        {census_year: '1820',  census_date: '1820-04-01', state: 'VT', state_name: 'Vermont', population: 235981, percent_change: 8.30},
        {census_year: '1820',  census_date: '1820-04-01', state: 'KY', state_name: 'Kentucky', population: 564317, percent_change: 38.82},
        {census_year: '1820',  census_date: '1820-04-01', state: 'TN', state_name: 'Tennessee', population: 422823, percent_change: 61.55},
        {census_year: '1820',  census_date: '1820-04-01', state: 'OH', state_name: 'Ohio', population: 581434, percent_change: 151.96},
        {census_year: '1820',  census_date: '1820-04-01', state: 'LA', state_name: 'Louisiana', population: 153407},
        {census_year: '1820',  census_date: '1820-04-01', state: 'IN', state_name: 'Indiana', population: 147178},
        {census_year: '1820',  census_date: '1820-04-01', state: 'MS', state_name: 'Mississippi', population: 75448},
        {census_year: '1820',  census_date: '1820-04-01', state: 'IL', state_name: 'Illinois', population: 55211},
        {census_year: '1820',  census_date: '1820-04-01', state: 'AL', state_name: 'Alabama', population: 127901},
        {census_year: '1820',  census_date: '1820-04-01', state: 'ME', state_name: 'Maine', population: 298335},

        {census_year: '1830',  census_date: '1830-04-01', state: 'NH', state_name: 'New Hampshire', population: 269328, percent_change: 10.31},
        {census_year: '1830',  census_date: '1830-04-01', state: 'MA', state_name: 'Massachusetts', population: 610408, percent_change: 16.65},
        {census_year: '1830',  census_date: '1830-04-01', state: 'RI', state_name: 'Rhode Island', population: 97199, percent_change: 17.02},
        {census_year: '1830',  census_date: '1830-04-01', state: 'CT', state_name: 'Connecticut', population: 297675, percent_change: 8.15},
        {census_year: '1830',  census_date: '1830-04-01', state: 'NY', state_name: 'New York', population: 1918608, percent_change: 39.76},
        {census_year: '1830',  census_date: '1830-04-01', state: 'NJ', state_name: 'New Jersey', population: 320823, percent_change: 15.58},
        {census_year: '1830',  census_date: '1830-04-01', state: 'PA', state_name: 'Pennsylvania', population: 1348233, percent_change: 28.47},
        {census_year: '1830',  census_date: '1830-04-01', state: 'DE', state_name: 'Delaware', population: 76748, percent_change: 5.50},
        {census_year: '1830',  census_date: '1830-04-01', state: 'MD', state_name: 'Maryland', population: 447040, percent_change: 9.74},
        {census_year: '1830',  census_date: '1830-04-01', state: 'VA', state_name: 'Virginia', population: 1044054, percent_change: 11.28},
        {census_year: '1830',  census_date: '1830-04-01', state: 'NC', state_name: 'North Carolina', population: 737987, percent_change: 15.52},
        {census_year: '1830',  census_date: '1830-04-01', state: 'SC', state_name: 'South Carolina', population: 581185, percent_change: 15.60},
        {census_year: '1830',  census_date: '1830-04-01', state: 'GA', state_name: 'Georgia', population: 516823, percent_change: 51.57},
        {census_year: '1830',  census_date: '1830-04-01', state: 'VT', state_name: 'Vermont', population: 280652, percent_change: 18.93},
        {census_year: '1830',  census_date: '1830-04-01', state: 'KY', state_name: 'Kentucky', population: 687917, percent_change: 21.90},
        {census_year: '1830',  census_date: '1830-04-01', state: 'TN', state_name: 'Tennessee', population: 681904, percent_change: 61.27},
        {census_year: '1830',  census_date: '1830-04-01', state: 'OH', state_name: 'Ohio', population: 937903, percent_change: 61.31},
        {census_year: '1830',  census_date: '1830-04-01', state: 'LA', state_name: 'Louisiana', population: 215739, percent_change: 40.63},
        {census_year: '1830',  census_date: '1830-04-01', state: 'IN', state_name: 'Indiana', population: 343031, percent_change: 133.07},
        {census_year: '1830',  census_date: '1830-04-01', state: 'MS', state_name: 'Mississippi', population: 136621, percent_change: 81.08},
        {census_year: '1830',  census_date: '1830-04-01', state: 'IL', state_name: 'Illinois', population: 157445, percent_change: 185.17},
        {census_year: '1830',  census_date: '1830-04-01', state: 'AL', state_name: 'Alabama', population: 309527, percent_change: 142.01},
        {census_year: '1830',  census_date: '1830-04-01', state: 'ME', state_name: 'Maine', population: 399455, percent_change: 33.89},
        {census_year: '1830',  census_date: '1830-04-01', state: 'MO', state_name: 'Missouri', population: 140455}
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
