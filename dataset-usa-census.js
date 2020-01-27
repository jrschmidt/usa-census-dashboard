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
        {census_year: '1790', state: 'NH', state_name: 'New Hampshire', population: 141885},
        {census_year: '1790', state: 'MA', state_name: 'Massachusetts', population: 378787},
        {census_year: '1790', state: 'RI', state_name: 'Rhode Island', population: 68825},
        {census_year: '1790', state: 'CT', state_name: 'Connecticut', population: 237946},
        {census_year: '1790', state: 'NY', state_name: 'New York', population: 340120},
        {census_year: '1790', state: 'NJ', state_name: 'New Jersey', population: 184139},
        {census_year: '1790', state: 'PA', state_name: 'Pennsylvania', population: 434373},
        {census_year: '1790', state: 'DE', state_name: 'Delaware', population: 59096},
        {census_year: '1790', state: 'MD', state_name: 'Maryland', population: 319728},
        {census_year: '1790', state: 'VA', state_name: 'Virginia', population: 691737},
        {census_year: '1790', state: 'NC', state_name: 'North Carolina', population: 393751},
        {census_year: '1790', state: 'SC', state_name: 'South Carolina', population: 249073},
        {census_year: '1790', state: 'GA', state_name: 'Georgia', population: 82548},

        {census_year: '1800', state: 'NH', state_name: 'New Hampshire', population: 183858},
        {census_year: '1800', state: 'MA', state_name: 'Massachusetts', population: 422845},
        {census_year: '1800', state: 'RI', state_name: 'Rhode Island', population: 69122},
        {census_year: '1800', state: 'CT', state_name: 'Connecticut', population: 251002},
        {census_year: '1800', state: 'NY', state_name: 'New York', population: 589051},
        {census_year: '1800', state: 'NJ', state_name: 'New Jersey', population: 211149},
        {census_year: '1800', state: 'PA', state_name: 'Pennsylvania', population: 602365},
        {census_year: '1800', state: 'DE', state_name: 'Delaware', population: 64273},
        {census_year: '1800', state: 'MD', state_name: 'Maryland', population: 341548},
        {census_year: '1800', state: 'VA', state_name: 'Virginia', population: 807557},
        {census_year: '1800', state: 'NC', state_name: 'North Carolina', population: 478103},
        {census_year: '1800', state: 'SC', state_name: 'South Carolina', population: 345591},
        {census_year: '1800', state: 'GA', state_name: 'Georgia', population: 162686},
        {census_year: '1800', state: 'VT', state_name: 'Vermont', population: 154465},
        {census_year: '1800', state: 'KY', state_name: 'Kentucky', population: 220955},
        {census_year: '1800', state: 'TN', state_name: 'Tennessee', population: 105602},

        {census_year: '1810', state: 'NH', state_name: 'New Hampshire', population: 214460},
        {census_year: '1810', state: 'MA', state_name: 'Massachusetts', population: 472040},
        {census_year: '1810', state: 'RI', state_name: 'Rhode Island', population: 76931},
        {census_year: '1810', state: 'CT', state_name: 'Connecticut', population: 261942},
        {census_year: '1810', state: 'NY', state_name: 'New York', population: 959049},
        {census_year: '1810', state: 'NJ', state_name: 'New Jersey', population: 245562},
        {census_year: '1810', state: 'PA', state_name: 'Pennsylvania', population: 810091},
        {census_year: '1810', state: 'DE', state_name: 'Delaware', population: 72674},
        {census_year: '1810', state: 'MD', state_name: 'Maryland', population: 380546},
        {census_year: '1810', state: 'VA', state_name: 'Virginia', population: 877683},
        {census_year: '1810', state: 'NC', state_name: 'North Carolina', population: 556526},
        {census_year: '1810', state: 'SC', state_name: 'South Carolina', population: 415115},
        {census_year: '1810', state: 'GA', state_name: 'Georgia', population: 251407},
        {census_year: '1810', state: 'VT', state_name: 'Vermont', population: 217895},
        {census_year: '1810', state: 'KY', state_name: 'Kentucky', population: 406511},
        {census_year: '1810', state: 'TN', state_name: 'Tennessee', population: 261727},
        {census_year: '1810', state: 'OH', state_name: 'Ohio', population: 230760},

        {census_year: '1820', state: 'NH', state_name: 'New Hampshire', population: 244161},
        {census_year: '1820', state: 'MA', state_name: 'Massachusetts', population: 523287},
        {census_year: '1820', state: 'RI', state_name: 'Rhode Island', population: 83059},
        {census_year: '1820', state: 'CT', state_name: 'Connecticut', population: 275248},
        {census_year: '1820', state: 'NY', state_name: 'New York', population: 1372812},
        {census_year: '1820', state: 'NJ', state_name: 'New Jersey', population: 277575},
        {census_year: '1820', state: 'PA', state_name: 'Pennsylvania', population: 1049458},
        {census_year: '1820', state: 'DE', state_name: 'Delaware', population: 72749},
        {census_year: '1820', state: 'MD', state_name: 'Maryland', population: 407350},
        {census_year: '1820', state: 'VA', state_name: 'Virginia', population: 938261},
        {census_year: '1820', state: 'NC', state_name: 'North Carolina', population: 638829},
        {census_year: '1820', state: 'SC', state_name: 'South Carolina', population: 502741},
        {census_year: '1820', state: 'GA', state_name: 'Georgia', population: 340989},
        {census_year: '1820', state: 'VT', state_name: 'Vermont', population: 235981},
        {census_year: '1820', state: 'KY', state_name: 'Kentucky', population: 564317},
        {census_year: '1820', state: 'TN', state_name: 'Tennessee', population: 422823},
        {census_year: '1820', state: 'OH', state_name: 'Ohio', population: 581434},
        {census_year: '1820', state: 'LA', state_name: 'Louisiana', population: 153407},
        {census_year: '1820', state: 'IN', state_name: 'Indiana', population: 147178},
        {census_year: '1820', state: 'MS', state_name: 'Mississippi', population: 75448},
        {census_year: '1820', state: 'IL', state_name: 'Illinois', population: 55211},
        {census_year: '1820', state: 'AL', state_name: 'Alabama', population: 127901},
        {census_year: '1820', state: 'ME', state_name: 'Maine', population: 298335},

        {census_year: '1830', state: 'NH', state_name: 'New Hampshire', population: 269328},
        {census_year: '1830', state: 'MA', state_name: 'Massachusetts', population: 610408},
        {census_year: '1830', state: 'RI', state_name: 'Rhode Island', population: 97199},
        {census_year: '1830', state: 'CT', state_name: 'Connecticut', population: 297675},
        {census_year: '1830', state: 'NY', state_name: 'New York', population: 1918608},
        {census_year: '1830', state: 'NJ', state_name: 'New Jersey', population: 320823},
        {census_year: '1830', state: 'PA', state_name: 'Pennsylvania', population: 1348233},
        {census_year: '1830', state: 'DE', state_name: 'Delaware', population: 76748},
        {census_year: '1830', state: 'MD', state_name: 'Maryland', population: 447040},
        {census_year: '1830', state: 'VA', state_name: 'Virginia', population: 1044054},
        {census_year: '1830', state: 'NC', state_name: 'North Carolina', population: 737987},
        {census_year: '1830', state: 'SC', state_name: 'South Carolina', population: 581185},
        {census_year: '1830', state: 'GA', state_name: 'Georgia', population: 516823},
        {census_year: '1830', state: 'VT', state_name: 'Vermont', population: 280652},
        {census_year: '1830', state: 'KY', state_name: 'Kentucky', population: 687917},
        {census_year: '1830', state: 'TN', state_name: 'Tennessee', population: 681904},
        {census_year: '1830', state: 'OH', state_name: 'Ohio', population: 937903},
        {census_year: '1830', state: 'LA', state_name: 'Louisiana', population: 215739},
        {census_year: '1830', state: 'IN', state_name: 'Indiana', population: 343031},
        {census_year: '1830', state: 'MS', state_name: 'Mississippi', population: 136621},
        {census_year: '1830', state: 'IL', state_name: 'Illinois', population: 157445},
        {census_year: '1830', state: 'AL', state_name: 'Alabama', population: 309527},
        {census_year: '1830', state: 'ME', state_name: 'Maine', population: 399455},
        {census_year: '1830', state: 'MO', state_name: 'Missouri', population: 140455}
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
