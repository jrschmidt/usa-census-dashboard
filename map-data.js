

// Map data correlated to the US Census from 1790 to 2010. Data for each
// decennial census includes all states admitted at that time. Latitude and
// longitude data, as well as dot size (5 pixels for small states, 10 px for
// others) is the same in each census year. What varies for each state from
// one year to the next is the color of its dot on the map. The dot color
// represents the percentage change for a state since the previous census.
//
// Colors are:
// #adbdcc if this is the state's first census.
// #cca3b1 for states that lost population since the last census.
// #0068cc for states with the largest percentage gain in population.
// #297ccc for states with moderate percentage gain in population.
// #5290cc for states with the smallest percentage gain in population.

const mapData = [

  // 1790
  [
    {latitude: 43.5, longitude: -71.6, color: 'adbdcc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: 'adbdcc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: 'adbdcc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: 'adbdcc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: 'adbdcc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: 'adbdcc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: 'adbdcc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: 'adbdcc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: 'adbdcc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: 'adbdcc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: 'adbdcc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: 'adbdcc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: 'adbdcc', size: 10} // GA 1790
  ],

  // 1800
  [
    {latitude: 43.5, longitude: -71.6, color: '297ccc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '297ccc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '5290cc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '5290cc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '0068cc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '297ccc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '297ccc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '5290cc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '5290cc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '297ccc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '297ccc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '297ccc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '0068cc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '297ccc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '297ccc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '297ccc', size: 10} // TN 1800
  ],

  // 1810
  [
    {latitude: 43.5, longitude: -71.6, color: '297ccc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '5290cc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '5290cc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '5290cc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '0068cc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '297ccc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '0068cc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '297ccc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '5290cc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '5290cc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '297ccc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '297ccc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '0068cc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '0068cc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '0068cc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '0068cc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: 'adbdcc', size: 10} // OH 1810
  ],

  // 1820
  [
    {latitude: 43.5, longitude: -71.6, color: '297ccc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '297ccc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '5290cc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '5290cc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '0068cc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '297ccc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '0068cc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '5290cc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '5290cc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '5290cc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '297ccc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '297ccc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '0068cc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '5290cc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '0068cc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '0068cc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '0068cc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: 'adbdcc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: 'adbdcc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: 'adbdcc', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: 'adbdcc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: 'adbdcc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: 'adbdcc', size: 10} // ME 1820
  ],

  // 1830
  [
    {latitude: 43.5, longitude: -71.6, color: '5290cc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '297ccc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '297ccc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '5290cc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '297ccc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '5290cc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '297ccc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '5290cc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '5290cc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '5290cc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '5290cc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '5290cc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '0068cc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '297ccc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '297ccc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '0068cc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '0068cc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: '297ccc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: '0068cc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: '0068cc', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: '0068cc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: '0068cc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: '297ccc', size: 10}, // ME 1820
    {latitude: 38.5, longitude: -92.5, color: 'adbdcc', size: 10} // MO 1830
  ],

  // 1840
  [
    {latitude: 43.5, longitude: -71.6, color: '5290cc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '297ccc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '297ccc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '5290cc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '297ccc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '297ccc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '297ccc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '5290cc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '5290cc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: 'cca3b1', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '5290cc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '5290cc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '297ccc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '5290cc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '297ccc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '297ccc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '0068cc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: '297ccc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: '0068cc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: '0068cc', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: '0068cc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: '0068cc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: '297ccc', size: 10}, // ME 1820
    {latitude: 38.5, longitude: -92.5, color: '0068cc', size: 10}, // MO 1830
    {latitude: 35, longitude: -92.5, color: 'adbdcc', size: 10}, // AR 1840
    {latitude: 44, longitude: -85, color: 'adbdcc', size: 10} // MI 1840
  ],

  // 1850
  [
    {latitude: 43.5, longitude: -71.6, color: '297ccc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '0068cc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '0068cc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '5290cc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '297ccc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '297ccc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '0068cc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '5290cc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '297ccc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '5290cc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '5290cc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '5290cc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '297ccc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '5290cc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '297ccc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '5290cc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '297ccc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: '297ccc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: '0068cc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: '0068cc', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: '0068cc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: '297ccc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: '5290cc', size: 10}, // ME 1820
    {latitude: 38.5, longitude: -92.5, color: '0068cc', size: 10}, // MO 1830
    {latitude: 35, longitude: -92.5, color: '0068cc', size: 10}, // AR 1840
    {latitude: 44, longitude: -85, color: '0068cc', size: 10}, // MI 1840
    {latitude: 28.5, longitude: -81.5, color: 'adbdcc', size: 10}, // FL 1850
    {latitude: 31.5, longitude: -99.5, color: 'adbdcc', size: 10}, // TX 1850
    {latitude: 42, longitude: -93.5, color: 'adbdcc', size: 10}, // IA 1850
    {latitude: 44.5, longitude: -90, color: 'adbdcc', size: 10}, // WI 1850
    {latitude: 36, longitude: -119, color: 'adbdcc', size: 10} // CA 1850
  ],

  // 1860
  [
    {latitude: 43.5, longitude: -71.6, color: '297ccc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '297ccc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '5290cc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '5290cc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '297ccc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '297ccc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '297ccc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '5290cc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '5290cc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '297ccc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '5290cc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '5290cc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '297ccc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '5290cc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '297ccc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '297ccc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '5290cc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: '297ccc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: '297ccc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: '297ccc', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: '0068cc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: '297ccc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: '297ccc', size: 10}, // ME 1820
    {latitude: 38.5, longitude: -92.5, color: '0068cc', size: 10}, // MO 1830
    {latitude: 35, longitude: -92.5, color: '0068cc', size: 10}, // AR 1840
    {latitude: 44, longitude: -85, color: '0068cc', size: 10}, // MI 1840
    {latitude: 28.5, longitude: -81.5, color: '0068cc', size: 10}, // FL 1850
    {latitude: 31.5, longitude: -99.5, color: '0068cc', size: 10}, // TX 1850
    {latitude: 42, longitude: -93.5, color: '0068cc', size: 10}, // IA 1850
    {latitude: 44.5, longitude: -90, color: '0068cc', size: 10}, // WI 1850
    {latitude: 36, longitude: -119, color: '0068cc', size: 10}, // CA 1850
    {latitude: 46.3, longitude: -94.4, color: 'adbdcc', size: 10}, // MN 1860
    {latitude: 44, longitude: -120.5, color: 'adbdcc', size: 10} // OR 1860
  ],

  // 1870
  [
    {latitude: 43.5, longitude: -71.6, color: 'cca3b1', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '297ccc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '297ccc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '297ccc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '297ccc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '0068cc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '297ccc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '297ccc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '297ccc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '5290cc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '5290cc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '5290cc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '297ccc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '5290cc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '297ccc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '297ccc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '297ccc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: '5290cc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: '297ccc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: '5290cc', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: '0068cc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: '5290cc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: 'cca3b1', size: 10}, // ME 1820
    {latitude: 38.5, longitude: -92.5, color: '0068cc', size: 10}, // MO 1830
    {latitude: 35, longitude: -92.5, color: '297ccc', size: 10}, // AR 1840
    {latitude: 44, longitude: -85, color: '0068cc', size: 10}, // MI 1840
    {latitude: 28.5, longitude: -81.5, color: '0068cc', size: 10}, // FL 1850
    {latitude: 31.5, longitude: -99.5, color: '0068cc', size: 10}, // TX 1850
    {latitude: 42, longitude: -93.5, color: '0068cc', size: 10}, // IA 1850
    {latitude: 44.5, longitude: -90, color: '0068cc', size: 10}, // WI 1850
    {latitude: 36, longitude: -119, color: '0068cc', size: 10}, // CA 1850
    {latitude: 46.3, longitude: -94.4, color: '0068cc', size: 10}, // MN 1860
    {latitude: 44, longitude: -120.5, color: '0068cc', size: 10}, // OR 1860
    {latitude: 38.5, longitude: -98.5, color: 'adbdcc', size: 10}, // KS 1870
    {latitude: 38.5, longitude: -80.9, color: 'adbdcc', size: 10}, // WV 1870
    {latitude: 39.5, longitude: -117, color: 'adbdcc', size: 10}, // NV 1870
    {latitude: 41.5, longitude: -100, color: 'adbdcc', size: 10} // NE 1870
  ],

  // 1880
  [
    {latitude: 43.5, longitude: -71.6, color: '5290cc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '297ccc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '297ccc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '5290cc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '5290cc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '297ccc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '297ccc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '5290cc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '5290cc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '297ccc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '297ccc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '297ccc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '297ccc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '5290cc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '297ccc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '297ccc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '5290cc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: '297ccc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: '5290cc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: '297ccc', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: '297ccc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: '297ccc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: '5290cc', size: 10}, // ME 1820
    {latitude: 38.5, longitude: -92.5, color: '297ccc', size: 10}, // MO 1830
    {latitude: 35, longitude: -92.5, color: '0068cc', size: 10}, // AR 1840
    {latitude: 44, longitude: -85, color: '297ccc', size: 10}, // MI 1840
    {latitude: 28.5, longitude: -81.5, color: '297ccc', size: 10}, // FL 1850
    {latitude: 31.5, longitude: -99.5, color: '0068cc', size: 10}, // TX 1850
    {latitude: 42, longitude: -93.5, color: '297ccc', size: 10}, // IA 1850
    {latitude: 44.5, longitude: -90, color: '297ccc', size: 10}, // WI 1850
    {latitude: 36, longitude: -119, color: '0068cc', size: 10}, // CA 1850
    {latitude: 46.3, longitude: -94.4, color: '0068cc', size: 10}, // MN 1860
    {latitude: 44, longitude: -120.5, color: '0068cc', size: 10}, // OR 1860
    {latitude: 38.5, longitude: -98.5, color: '0068cc', size: 10}, // KS 1870
    {latitude: 38.5, longitude: -80.9, color: '297ccc', size: 10}, // WV 1870
    {latitude: 39.5, longitude: -117, color: '297ccc', size: 10}, // NV 1870
    {latitude: 41.5, longitude: -100, color: '0068cc', size: 10}, // NE 1870
    {latitude: 39, longitude: -105.5, color: 'adbdcc', size: 10} // CO 1880
  ],

  // 1890
  [
    {latitude: 43.5, longitude: -71.6, color: '5290cc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '297ccc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '297ccc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '297ccc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '297ccc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '297ccc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '297ccc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '5290cc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '5290cc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '5290cc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '5290cc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '5290cc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '297ccc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '5290cc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '5290cc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '5290cc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '5290cc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: '297ccc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: '5290cc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: '5290cc', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: '297ccc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: '297ccc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: '5290cc', size: 10}, // ME 1820
    {latitude: 38.5, longitude: -92.5, color: '297ccc', size: 10}, // MO 1830
    {latitude: 35, longitude: -92.5, color: '0068cc', size: 10}, // AR 1840
    {latitude: 44, longitude: -85, color: '297ccc', size: 10}, // MI 1840
    {latitude: 28.5, longitude: -81.5, color: '0068cc', size: 10}, // FL 1850
    {latitude: 31.5, longitude: -99.5, color: '0068cc', size: 10}, // TX 1850
    {latitude: 42, longitude: -93.5, color: '297ccc', size: 10}, // IA 1850
    {latitude: 44.5, longitude: -90, color: '297ccc', size: 10}, // WI 1850
    {latitude: 36, longitude: -119, color: '0068cc', size: 10}, // CA 1850
    {latitude: 46.3, longitude: -94.4, color: '0068cc', size: 10}, // MN 1860
    {latitude: 44, longitude: -120.5, color: '0068cc', size: 10}, // OR 1860
    {latitude: 38.5, longitude: -98.5, color: '0068cc', size: 10}, // KS 1870
    {latitude: 38.5, longitude: -80.9, color: '297ccc', size: 10}, // WV 1870
    {latitude: 39.5, longitude: -117, color: 'cca3b1', size: 10}, // NV 1870
    {latitude: 41.5, longitude: -100, color: '0068cc', size: 10}, // NE 1870
    {latitude: 39, longitude: -105.5, color: '0068cc', size: 10}, // CO 1880
    {latitude: 47.5, longitude: -100.4, color: 'adbdcc', size: 10}, // ND 1890
    {latitude: 44.5, longitude: -100.4, color: 'adbdcc', size: 10}, // SD 1890
    {latitude: 47, longitude: -110, color: 'adbdcc', size: 10}, // MT 1890
    {latitude: 47.5, longitude: -121, color: 'adbdcc', size: 10}, // WA 1890
    {latitude: 44, longitude: -114.5, color: 'adbdcc', size: 10}, // ID 1890
    {latitude: 43, longitude: -107.5, color: 'adbdcc', size: 10} // WY 1890
  ],

  // 1900
  [
    {latitude: 43.5, longitude: -71.6, color: '5290cc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '297ccc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '297ccc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '297ccc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '297ccc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '0068cc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '297ccc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '5290cc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '5290cc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '5290cc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '297ccc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '297ccc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '297ccc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '5290cc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '5290cc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '5290cc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '5290cc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: '297ccc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: '5290cc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: '297ccc', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: '297ccc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: '297ccc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: '5290cc', size: 10}, // ME 1820
    {latitude: 38.5, longitude: -92.5, color: '5290cc', size: 10}, // MO 1830
    {latitude: 35, longitude: -92.5, color: '5290cc', size: 10}, // AR 1840
    {latitude: 44, longitude: -85, color: '5290cc', size: 10}, // MI 1840
    {latitude: 28.5, longitude: -81.5, color: '0068cc', size: 10}, // FL 1850
    {latitude: 31.5, longitude: -99.5, color: '0068cc', size: 10}, // TX 1850
    {latitude: 42, longitude: -93.5, color: '297ccc', size: 10}, // IA 1850
    {latitude: 44.5, longitude: -90, color: '297ccc', size: 10}, // WI 1850
    {latitude: 36, longitude: -119, color: '297ccc', size: 10}, // CA 1850
    {latitude: 46.3, longitude: -94.4, color: '0068cc', size: 10}, // MN 1860
    {latitude: 44, longitude: -120.5, color: '0068cc', size: 10}, // OR 1860
    {latitude: 38.5, longitude: -98.5, color: '5290cc', size: 10}, // KS 1870
    {latitude: 38.5, longitude: -80.9, color: '297ccc', size: 10}, // WV 1870
    {latitude: 39.5, longitude: -117, color: 'cca3b1', size: 10}, // NV 1870
    {latitude: 41.5, longitude: -100, color: '5290cc', size: 10}, // NE 1870
    {latitude: 39, longitude: -105.5, color: '0068cc', size: 10}, // CO 1880
    {latitude: 47.5, longitude: -100.4, color: '0068cc', size: 10}, // ND 1890
    {latitude: 44.5, longitude: -100.4, color: '5290cc', size: 10}, // SD 1890
    {latitude: 47, longitude: -110, color: '0068cc', size: 10}, // MT 1890
    {latitude: 47.5, longitude: -121, color: '0068cc', size: 10}, // WA 1890
    {latitude: 44, longitude: -114.5, color: '0068cc', size: 10}, // ID 1890
    {latitude: 43, longitude: -107.5, color: '0068cc', size: 10}, // WY 1890
    {latitude: 39.5, longitude: -111.5, color: 'adbdcc', size: 10} // UT 1900
  ],

  // 1910
  [
    {latitude: 43.5, longitude: -71.6, color: '5290cc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '297ccc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '297ccc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '297ccc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '297ccc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '0068cc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '297ccc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '5290cc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '5290cc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '5290cc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '297ccc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '5290cc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '297ccc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '5290cc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '5290cc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '5290cc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '297ccc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: '297ccc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: '5290cc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: '297ccc', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: '297ccc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: '297ccc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: '5290cc', size: 10}, // ME 1820
    {latitude: 38.5, longitude: -92.5, color: '5290cc', size: 10}, // MO 1830
    {latitude: 35, longitude: -92.5, color: '297ccc', size: 10}, // AR 1840
    {latitude: 44, longitude: -85, color: '297ccc', size: 10}, // MI 1840
    {latitude: 28.5, longitude: -81.5, color: '0068cc', size: 10}, // FL 1850
    {latitude: 31.5, longitude: -99.5, color: '297ccc', size: 10}, // TX 1850
    {latitude: 42, longitude: -93.5, color: 'cca3b1', size: 10}, // IA 1850
    {latitude: 44.5, longitude: -90, color: '5290cc', size: 10}, // WI 1850
    {latitude: 36, longitude: -119, color: '0068cc', size: 10}, // CA 1850
    {latitude: 46.3, longitude: -94.4, color: '297ccc', size: 10}, // MN 1860
    {latitude: 44, longitude: -120.5, color: '0068cc', size: 10}, // OR 1860
    {latitude: 38.5, longitude: -98.5, color: '297ccc', size: 10}, // KS 1870
    {latitude: 38.5, longitude: -80.9, color: '297ccc', size: 10}, // WV 1870
    {latitude: 39.5, longitude: -117, color: '0068cc', size: 10}, // NV 1870
    {latitude: 41.5, longitude: -100, color: '5290cc', size: 10}, // NE 1870
    {latitude: 39, longitude: -105.5, color: '0068cc', size: 10}, // CO 1880
    {latitude: 47.5, longitude: -100.4, color: '0068cc', size: 10}, // ND 1890
    {latitude: 44.5, longitude: -100.4, color: '0068cc', size: 10}, // SD 1890
    {latitude: 47, longitude: -110, color: '0068cc', size: 10}, // MT 1890
    {latitude: 47.5, longitude: -121, color: '0068cc', size: 10}, // WA 1890
    {latitude: 44, longitude: -114.5, color: '0068cc', size: 10}, // ID 1890
    {latitude: 43, longitude: -107.5, color: '0068cc', size: 10}, // WY 1890
    {latitude: 39.5, longitude: -111.5, color: '0068cc', size: 10}, // UT 1900
    {latitude: 35.5, longitude: -97, color: '297ccc', size: 10} // OK 1910
  ],

  // 1920
  [
    {latitude: 43.5, longitude: -71.6, color: '5290cc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '297ccc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '297ccc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '0068cc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '297ccc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '0068cc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '297ccc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '5290cc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '297ccc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '297ccc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '297ccc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '297ccc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '297ccc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: 'cca3b1', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '5290cc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '5290cc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '0068cc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: '5290cc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: '5290cc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: 'cca3b1', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: '297ccc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: '5290cc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: '5290cc', size: 10}, // ME 1820
    {latitude: 38.5, longitude: -92.5, color: '5290cc', size: 10}, // MO 1830
    {latitude: 35, longitude: -92.5, color: '297ccc', size: 10}, // AR 1840
    {latitude: 44, longitude: -85, color: '0068cc', size: 10}, // MI 1840
    {latitude: 28.5, longitude: -81.5, color: '0068cc', size: 10}, // FL 1850
    {latitude: 31.5, longitude: -99.5, color: '0068cc', size: 10}, // TX 1850
    {latitude: 42, longitude: -93.5, color: '5290cc', size: 10}, // IA 1850
    {latitude: 44.5, longitude: -90, color: '297ccc', size: 10}, // WI 1850
    {latitude: 36, longitude: -119, color: '0068cc', size: 10}, // CA 1850
    {latitude: 46.3, longitude: -94.4, color: '297ccc', size: 10}, // MN 1860
    {latitude: 44, longitude: -120.5, color: '297ccc', size: 10}, // OR 1860
    {latitude: 38.5, longitude: -98.5, color: '5290cc', size: 10}, // KS 1870
    {latitude: 38.5, longitude: -80.9, color: '0068cc', size: 10}, // WV 1870
    {latitude: 39.5, longitude: -117, color: 'cca3b1', size: 10}, // NV 1870
    {latitude: 41.5, longitude: -100, color: '5290cc', size: 10}, // NE 1870
    {latitude: 39, longitude: -105.5, color: '297ccc', size: 10}, // CO 1880
    {latitude: 47.5, longitude: -100.4, color: '297ccc', size: 10}, // ND 1890
    {latitude: 44.5, longitude: -100.4, color: '5290cc', size: 10}, // SD 1890
    {latitude: 47, longitude: -110, color: '0068cc', size: 10}, // MT 1890
    {latitude: 47.5, longitude: -121, color: '0068cc', size: 10}, // WA 1890
    {latitude: 44, longitude: -114.5, color: '0068cc', size: 10}, // ID 1890
    {latitude: 43, longitude: -107.5, color: '0068cc', size: 10}, // WY 1890
    {latitude: 39.5, longitude: -111.5, color: '0068cc', size: 10}, // UT 1900
    {latitude: 35.5, longitude: -97, color: '0068cc', size: 10}, // OK 1910
    {latitude: 34.6, longitude: -106, color: '297ccc', size: 10}, // NM 1920
    {latitude: 34, longitude: -112, color: '297ccc', size: 10} // AZ 1920
  ],

  // 1930
  [
    {latitude: 43.5, longitude: -71.6, color: '5290cc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '297ccc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '297ccc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '0068cc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '0068cc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '0068cc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '297ccc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '5290cc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '297ccc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '5290cc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '0068cc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '5290cc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '5290cc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '5290cc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '5290cc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '297ccc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '0068cc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: '0068cc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: '297ccc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: '297ccc', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: '297ccc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: '297ccc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: '5290cc', size: 10}, // ME 1820
    {latitude: 38.5, longitude: -92.5, color: '5290cc', size: 10}, // MO 1830
    {latitude: 35, longitude: -92.5, color: '5290cc', size: 10}, // AR 1840
    {latitude: 44, longitude: -85, color: '0068cc', size: 10}, // MI 1840
    {latitude: 28.5, longitude: -81.5, color: '0068cc', size: 10}, // FL 1850
    {latitude: 31.5, longitude: -99.5, color: '0068cc', size: 10}, // TX 1850
    {latitude: 42, longitude: -93.5, color: '5290cc', size: 10}, // IA 1850
    {latitude: 44.5, longitude: -90, color: '297ccc', size: 10}, // WI 1850
    {latitude: 36, longitude: -119, color: '0068cc', size: 10}, // CA 1850
    {latitude: 46.3, longitude: -94.4, color: '5290cc', size: 10}, // MN 1860
    {latitude: 44, longitude: -120.5, color: '0068cc', size: 10}, // OR 1860
    {latitude: 38.5, longitude: -98.5, color: '5290cc', size: 10}, // KS 1870
    {latitude: 38.5, longitude: -80.9, color: '0068cc', size: 10}, // WV 1870
    {latitude: 39.5, longitude: -117, color: '297ccc', size: 10}, // NV 1870
    {latitude: 41.5, longitude: -100, color: '5290cc', size: 10}, // NE 1870
    {latitude: 39, longitude: -105.5, color: '297ccc', size: 10}, // CO 1880
    {latitude: 47.5, longitude: -100.4, color: '5290cc', size: 10}, // ND 1890
    {latitude: 44.5, longitude: -100.4, color: '297ccc', size: 10}, // SD 1890
    {latitude: 47, longitude: -110, color: 'cca3b1', size: 10}, // MT 1890
    {latitude: 47.5, longitude: -121, color: '0068cc', size: 10}, // WA 1890
    {latitude: 44, longitude: -114.5, color: '5290cc', size: 10}, // ID 1890
    {latitude: 43, longitude: -107.5, color: '0068cc', size: 10}, // WY 1890
    {latitude: 39.5, longitude: -111.5, color: '297ccc', size: 10}, // UT 1900
    {latitude: 35.5, longitude: -97, color: '297ccc', size: 10}, // OK 1910
    {latitude: 34.6, longitude: -106, color: '0068cc', size: 10}, // NM 1920
    {latitude: 34, longitude: -112, color: '0068cc', size: 10} // AZ 1920
  ],

  // 1940
  [{latitude: 43.5, longitude: -71.6, color: '5290cc', size: 5}, // NH 1790
  {latitude: 42.4, longitude: -72, color: '5290cc', size: 5}, // MA 1790
  {latitude: 41.7, longitude: -71.5, color: '5290cc', size: 5}, // RI 1790
  {latitude: 41.6, longitude: -72.7, color: '297ccc', size: 5}, // CT 1790
  {latitude: 43, longitude: -75, color: '297ccc', size: 10}, // NY 1790
  {latitude: 40.2, longitude: -74.4, color: '5290cc', size: 5}, // NJ 1790
  {latitude: 41, longitude: -78, color: '5290cc', size: 10}, // PA 1790
  {latitude: 39, longitude: -75.4, color: '0068cc', size: 5}, // DE 1790
  {latitude: 39.2, longitude: -76.6, color: '0068cc', size: 5}, // MD 1790
  {latitude: 37.8, longitude: -78.5, color: '0068cc', size: 10}, // VA 1790
  {latitude: 35.5, longitude: -78.5, color: '0068cc', size: 10}, // NC 1790
  {latitude: 33.8, longitude: -80.8, color: '297ccc', size: 10}, // SC 1790
  {latitude: 32.9, longitude: -83.5, color: '297ccc', size: 10}, // GA 1790
  {latitude: 44.2, longitude: -72.7, color: 'cca3b1', size: 5}, // VT 1800
  {latitude: 37.8, longitude: -84.5, color: '297ccc', size: 10}, // KY 1800
  {latitude: 35.8, longitude: -86.2, color: '0068cc', size: 10}, // TN 1800
  {latitude: 40.1, longitude: -82.7, color: '5290cc', size: 10}, // OH 1810
  {latitude: 31.2, longitude: -92.3, color: '297ccc', size: 10}, // LA 1820
  {latitude: 40, longitude: -86.2, color: '5290cc', size: 10}, // IN 1820
  {latitude: 33, longitude: -89.8, color: '297ccc', size: 10}, // MS 1820
  {latitude: 40, longitude: -89.3, color: '5290cc', size: 10}, // IL 1820
  {latitude: 33, longitude: -86.8, color: '297ccc', size: 10}, // AL 1820
  {latitude: 45.5, longitude: -69, color: '297ccc', size: 10}, // ME 1820
  {latitude: 38.5, longitude: -92.5, color: '5290cc', size: 10}, // MO 1830
  {latitude: 35, longitude: -92.5, color: '5290cc', size: 10}, // AR 1840
  {latitude: 44, longitude: -85, color: '297ccc', size: 10}, // MI 1840
  {latitude: 28.5, longitude: -81.5, color: '0068cc', size: 10}, // FL 1850
  {latitude: 31.5, longitude: -99.5, color: '0068cc', size: 10}, // TX 1850
  {latitude: 42, longitude: -93.5, color: '5290cc', size: 10}, // IA 1850
  {latitude: 44.5, longitude: -90, color: '297ccc', size: 10}, // WI 1850
  {latitude: 36, longitude: -119, color: '0068cc', size: 10}, // CA 1850
  {latitude: 46.3, longitude: -94.4, color: '297ccc', size: 10}, // MN 1860
  {latitude: 44, longitude: -120.5, color: '0068cc', size: 10}, // OR 1860
  {latitude: 38.5, longitude: -98.5, color: 'cca3b1', size: 10}, // KS 1870
  {latitude: 38.5, longitude: -80.9, color: '0068cc', size: 10}, // WV 1870
  {latitude: 39.5, longitude: -117, color: '0068cc', size: 10}, // NV 1870
  {latitude: 41.5, longitude: -100, color: 'cca3b1', size: 10}, // NE 1870
  {latitude: 39, longitude: -105.5, color: '297ccc', size: 10}, // CO 1880
  {latitude: 47.5, longitude: -100.4, color: 'cca3b1', size: 10}, // ND 1890
  {latitude: 44.5, longitude: -100.4, color: 'cca3b1', size: 10}, // SD 1890
  {latitude: 47, longitude: -110, color: '5290cc', size: 10}, // MT 1890
  {latitude: 47.5, longitude: -121, color: '0068cc', size: 10}, // WA 1890
  {latitude: 44, longitude: -114.5, color: '0068cc', size: 10}, // ID 1890
  {latitude: 43, longitude: -107.5, color: '0068cc', size: 10}, // WY 1890
  {latitude: 39.5, longitude: -111.5, color: '297ccc', size: 10}, // UT 1900
  {latitude: 35.5, longitude: -97, color: 'cca3b1', size: 10}, // OK 1910
  {latitude: 34.6, longitude: -106, color: '0068cc', size: 10}, // NM 1920
  {latitude: 34, longitude: -112, color: '0068cc', size: 10} // AZ 1920
  ],

  // 1950
  [
    {latitude: 43.5, longitude: -71.6, color: '5290cc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '5290cc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '297ccc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '297ccc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '297ccc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '297ccc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '5290cc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '0068cc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '0068cc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '0068cc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '297ccc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '297ccc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '297ccc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '5290cc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '5290cc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '297ccc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '297ccc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: '297ccc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: '297ccc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: 'cca3b1', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: '297ccc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: '5290cc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: '5290cc', size: 10}, // ME 1820
    {latitude: 38.5, longitude: -92.5, color: '5290cc', size: 10}, // MO 1830
    {latitude: 35, longitude: -92.5, color: 'cca3b1', size: 10}, // AR 1840
    {latitude: 44, longitude: -85, color: '0068cc', size: 10}, // MI 1840
    {latitude: 28.5, longitude: -81.5, color: '0068cc', size: 10}, // FL 1850
    {latitude: 31.5, longitude: -99.5, color: '0068cc', size: 10}, // TX 1850
    {latitude: 42, longitude: -93.5, color: '5290cc', size: 10}, // IA 1850
    {latitude: 44.5, longitude: -90, color: '297ccc', size: 10}, // WI 1850
    {latitude: 36, longitude: -119, color: '0068cc', size: 10}, // CA 1850
    {latitude: 46.3, longitude: -94.4, color: '5290cc', size: 10}, // MN 1860
    {latitude: 44, longitude: -120.5, color: '0068cc', size: 10}, // OR 1860
    {latitude: 38.5, longitude: -98.5, color: '5290cc', size: 10}, // KS 1870
    {latitude: 38.5, longitude: -80.9, color: '5290cc', size: 10}, // WV 1870
    {latitude: 39.5, longitude: -117, color: '0068cc', size: 10}, // NV 1870
    {latitude: 41.5, longitude: -100, color: '5290cc', size: 10}, // NE 1870
    {latitude: 39, longitude: -105.5, color: '297ccc', size: 10}, // CO 1880
    {latitude: 47.5, longitude: -100.4, color: 'cca3b1', size: 10}, // ND 1890
    {latitude: 44.5, longitude: -100.4, color: '5290cc', size: 10}, // SD 1890
    {latitude: 47, longitude: -110, color: '5290cc', size: 10}, // MT 1890
    {latitude: 47.5, longitude: -121, color: '0068cc', size: 10}, // WA 1890
    {latitude: 44, longitude: -114.5, color: '297ccc', size: 10}, // ID 1890
    {latitude: 43, longitude: -107.5, color: '297ccc', size: 10}, // WY 1890
    {latitude: 39.5, longitude: -111.5, color: '0068cc', size: 10}, // UT 1900
    {latitude: 35.5, longitude: -97, color: 'cca3b1', size: 10}, // OK 1910
    {latitude: 34.6, longitude: -106, color: '0068cc', size: 10}, // NM 1920
    {latitude: 34, longitude: -112, color: '0068cc', size: 10} // AZ 1920
  ],

  // 1960
  [
    {latitude: 43.5, longitude: -71.6, color: '297ccc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '5290cc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '5290cc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '0068cc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '297ccc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '0068cc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '5290cc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '0068cc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '0068cc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '297ccc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '297ccc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '297ccc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '297ccc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '5290cc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '5290cc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '5290cc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '0068cc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: '0068cc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: '297ccc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: 'cca3b1', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: '297ccc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: '5290cc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: '5290cc', size: 10}, // ME 1820
    {latitude: 38.5, longitude: -92.5, color: '5290cc', size: 10}, // MO 1830
    {latitude: 35, longitude: -92.5, color: 'cca3b1', size: 10}, // AR 1840
    {latitude: 44, longitude: -85, color: '0068cc', size: 10}, // MI 1840
    {latitude: 28.5, longitude: -81.5, color: '0068cc', size: 10}, // FL 1850
    {latitude: 31.5, longitude: -99.5, color: '0068cc', size: 10}, // TX 1850
    {latitude: 42, longitude: -93.5, color: '5290cc', size: 10}, // IA 1850
    {latitude: 44.5, longitude: -90, color: '297ccc', size: 10}, // WI 1850
    {latitude: 36, longitude: -119, color: '0068cc', size: 10}, // CA 1850
    {latitude: 46.3, longitude: -94.4, color: '297ccc', size: 10}, // MN 1860
    {latitude: 44, longitude: -120.5, color: '297ccc', size: 10}, // OR 1860
    {latitude: 38.5, longitude: -98.5, color: '297ccc', size: 10}, // KS 1870
    {latitude: 38.5, longitude: -80.9, color: 'cca3b1', size: 10}, // WV 1870
    {latitude: 39.5, longitude: -117, color: '0068cc', size: 10}, // NV 1870
    {latitude: 41.5, longitude: -100, color: '5290cc', size: 10}, // NE 1870
    {latitude: 39, longitude: -105.5, color: '0068cc', size: 10}, // CO 1880
    {latitude: 47.5, longitude: -100.4, color: '5290cc', size: 10}, // ND 1890
    {latitude: 44.5, longitude: -100.4, color: '5290cc', size: 10}, // SD 1890
    {latitude: 47, longitude: -110, color: '297ccc', size: 10}, // MT 1890
    {latitude: 47.5, longitude: -121, color: '297ccc', size: 10}, // WA 1890
    {latitude: 44, longitude: -114.5, color: '297ccc', size: 10}, // ID 1890
    {latitude: 43, longitude: -107.5, color: '297ccc', size: 10}, // WY 1890
    {latitude: 39.5, longitude: -111.5, color: '0068cc', size: 10}, // UT 1900
    {latitude: 35.5, longitude: -97, color: '5290cc', size: 10}, // OK 1910
    {latitude: 34.6, longitude: -106, color: '0068cc', size: 10}, // NM 1920
    {latitude: 34, longitude: -112, color: '0068cc', size: 10}, // AZ 1920
    {latitude: 28, longitude: -116, color: 'adbdcc', size: 10}, // AK 1960
    {latitude: 27, longitude: -105.5, color: 'adbdcc', size: 10} // HI 1960
  ],

  // 1970
  [
    {latitude: 43.5, longitude: -71.6, color: '0068cc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '297ccc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '297ccc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '0068cc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '297ccc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '0068cc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '5290cc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '0068cc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '0068cc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '0068cc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '297ccc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '297ccc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '0068cc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '297ccc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '5290cc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '297ccc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '297ccc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: '297ccc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: '297ccc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: '5290cc', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: '297ccc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: '5290cc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: '5290cc', size: 10}, // ME 1820
    {latitude: 38.5, longitude: -92.5, color: '297ccc', size: 10}, // MO 1830
    {latitude: 35, longitude: -92.5, color: '297ccc', size: 10}, // AR 1840
    {latitude: 44, longitude: -85, color: '297ccc', size: 10}, // MI 1840
    {latitude: 28.5, longitude: -81.5, color: '0068cc', size: 10}, // FL 1850
    {latitude: 31.5, longitude: -99.5, color: '0068cc', size: 10}, // TX 1850
    {latitude: 42, longitude: -93.5, color: '5290cc', size: 10}, // IA 1850
    {latitude: 44.5, longitude: -90, color: '297ccc', size: 10}, // WI 1850
    {latitude: 36, longitude: -119, color: '0068cc', size: 10}, // CA 1850
    {latitude: 46.3, longitude: -94.4, color: '297ccc', size: 10}, // MN 1860
    {latitude: 44, longitude: -120.5, color: '0068cc', size: 10}, // OR 1860
    {latitude: 38.5, longitude: -98.5, color: '5290cc', size: 10}, // KS 1870
    {latitude: 38.5, longitude: -80.9, color: 'cca3b1', size: 10}, // WV 1870
    {latitude: 39.5, longitude: -117, color: '0068cc', size: 10}, // NV 1870
    {latitude: 41.5, longitude: -100, color: '5290cc', size: 10}, // NE 1870
    {latitude: 39, longitude: -105.5, color: '0068cc', size: 10}, // CO 1880
    {latitude: 47.5, longitude: -100.4, color: 'cca3b1', size: 10}, // ND 1890
    {latitude: 44.5, longitude: -100.4, color: 'cca3b1', size: 10}, // SD 1890
    {latitude: 47, longitude: -110, color: '5290cc', size: 10}, // MT 1890
    {latitude: 47.5, longitude: -121, color: '0068cc', size: 10}, // WA 1890
    {latitude: 44, longitude: -114.5, color: '5290cc', size: 10}, // ID 1890
    {latitude: 43, longitude: -107.5, color: '5290cc', size: 10}, // WY 1890
    {latitude: 39.5, longitude: -111.5, color: '0068cc', size: 10}, // UT 1900
    {latitude: 35.5, longitude: -97, color: '297ccc', size: 10}, // OK 1910
    {latitude: 34.6, longitude: -106, color: '5290cc', size: 10}, // NM 1920
    {latitude: 34, longitude: -112, color: '0068cc', size: 10}, // AZ 1920
    {latitude: 28, longitude: -116, color: '0068cc', size: 10}, // AK 1960
    {latitude: 27, longitude: -105.5, color: '0068cc', size: 10} // HI 1960
  ],

  // 1980
  [
    {latitude: 43.5, longitude: -71.6, color: '0068cc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '5290cc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '5290cc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '5290cc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: 'cca3b1', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '5290cc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '5290cc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '297ccc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '297ccc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '297ccc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '297ccc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '0068cc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '297ccc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '297ccc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '297ccc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '297ccc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '5290cc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: '297ccc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: '5290cc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: '297ccc', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: '5290cc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: '297ccc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: '297ccc', size: 10}, // ME 1820
    {latitude: 38.5, longitude: -92.5, color: '5290cc', size: 10}, // MO 1830
    {latitude: 35, longitude: -92.5, color: '297ccc', size: 10}, // AR 1840
    {latitude: 44, longitude: -85, color: '5290cc', size: 10}, // MI 1840
    {latitude: 28.5, longitude: -81.5, color: '0068cc', size: 10}, // FL 1850
    {latitude: 31.5, longitude: -99.5, color: '0068cc', size: 10}, // TX 1850
    {latitude: 42, longitude: -93.5, color: '5290cc', size: 10}, // IA 1850
    {latitude: 44.5, longitude: -90, color: '5290cc', size: 10}, // WI 1850
    {latitude: 36, longitude: -119, color: '297ccc', size: 10}, // CA 1850
    {latitude: 46.3, longitude: -94.4, color: '297ccc', size: 10}, // MN 1860
    {latitude: 44, longitude: -120.5, color: '0068cc', size: 10}, // OR 1860
    {latitude: 38.5, longitude: -98.5, color: '5290cc', size: 10}, // KS 1870
    {latitude: 38.5, longitude: -80.9, color: '297ccc', size: 10}, // WV 1870
    {latitude: 39.5, longitude: -117, color: '0068cc', size: 10}, // NV 1870
    {latitude: 41.5, longitude: -100, color: '5290cc', size: 10}, // NE 1870
    {latitude: 39, longitude: -105.5, color: '0068cc', size: 10}, // CO 1880
    {latitude: 47.5, longitude: -100.4, color: '5290cc', size: 10}, // ND 1890
    {latitude: 44.5, longitude: -100.4, color: '5290cc', size: 10}, // SD 1890
    {latitude: 47, longitude: -110, color: '297ccc', size: 10}, // MT 1890
    {latitude: 47.5, longitude: -121, color: '0068cc', size: 10}, // WA 1890
    {latitude: 44, longitude: -114.5, color: '0068cc', size: 10}, // ID 1890
    {latitude: 43, longitude: -107.5, color: '0068cc', size: 10}, // WY 1890
    {latitude: 39.5, longitude: -111.5, color: '0068cc', size: 10}, // UT 1900
    {latitude: 35.5, longitude: -97, color: '297ccc', size: 10}, // OK 1910
    {latitude: 34.6, longitude: -106, color: '0068cc', size: 10}, // NM 1920
    {latitude: 34, longitude: -112, color: '0068cc', size: 10}, // AZ 1920
    {latitude: 28, longitude: -116, color: 0068cc'297ccc', size: 10}, // AK 1960
    {latitude: 27, longitude: -105.5, color: '0068cc', size: 10} // HI 1960
  ],

  // 1990
  [
    {latitude: 43.5, longitude: -71.6, color: '0068cc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '297ccc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '297ccc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '297ccc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '5290cc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '297ccc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '5290cc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '297ccc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '297ccc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '0068cc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '297ccc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '297ccc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '0068cc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '297ccc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '5290cc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '297ccc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '5290cc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: '5290cc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: '5290cc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: '5290cc', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: '5290cc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: '297ccc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: '297ccc', size: 10}, // ME 1820
    {latitude: 38.5, longitude: -92.5, color: '297ccc', size: 10}, // MO 1830
    {latitude: 35, longitude: -92.5, color: '5290cc', size: 10}, // AR 1840
    {latitude: 44, longitude: -85, color: '5290cc', size: 10}, // MI 1840
    {latitude: 28.5, longitude: -81.5, color: '0068cc', size: 10}, // FL 1850
    {latitude: 31.5, longitude: -99.5, color: '0068cc', size: 10}, // TX 1850
    {latitude: 42, longitude: -93.5, color: 'cca3b1', size: 10}, // IA 1850
    {latitude: 44.5, longitude: -90, color: '297ccc', size: 10}, // WI 1850
    {latitude: 36, longitude: -119, color: '0068cc', size: 10}, // CA 1850
    {latitude: 46.3, longitude: -94.4, color: '297ccc', size: 10}, // MN 1860
    {latitude: 44, longitude: -120.5, color: '0068cc', size: 10}, // OR 1860
    {latitude: 38.5, longitude: -98.5, color: '297ccc', size: 10}, // KS 1870
    {latitude: 38.5, longitude: -80.9, color: 'cca3b1', size: 10}, // WV 1870
    {latitude: 39.5, longitude: -117, color: '0068cc', size: 10}, // NV 1870
    {latitude: 41.5, longitude: -100, color: '5290cc', size: 10}, // NE 1870
    {latitude: 39, longitude: -105.5, color: '0068cc', size: 10}, // CO 1880
    {latitude: 47.5, longitude: -100.4, color: 'cca3b1', size: 10}, // ND 1890
    {latitude: 44.5, longitude: -100.4, color: '5290cc', size: 10}, // SD 1890
    {latitude: 47, longitude: -110, color: '5290cc', size: 10}, // MT 1890
    {latitude: 47.5, longitude: -121, color: '0068cc', size: 10}, // WA 1890
    {latitude: 44, longitude: -114.5, color: '297ccc', size: 10}, // ID 1890
    {latitude: 43, longitude: -107.5, color: 'cca3b1', size: 10}, // WY 1890
    {latitude: 39.5, longitude: -111.5, color: '0068cc', size: 10}, // UT 1900
    {latitude: 35.5, longitude: -97, color: '297ccc', size: 10}, // OK 1910
    {latitude: 34.6, longitude: -106, color: '0068cc', size: 10}, // NM 1920
    {latitude: 34, longitude: -112, color: '0068cc', size: 10}, // AZ 1920
    {latitude: 28, longitude: -116, color: '0068cc', size: 10}, // AK 1960
    {latitude: 27, longitude: -105.5, color: '0068cc', size: 10} // HI 1960
  ],

  // 2000
  [
    {latitude: 43.5, longitude: -71.6, color: '297ccc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '5290cc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '5290cc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '5290cc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '5290cc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '297ccc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '5290cc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '297ccc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '297ccc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '297ccc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '0068cc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '297ccc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '0068cc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '297ccc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '297ccc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '297ccc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '5290cc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: '5290cc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: '297ccc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: '297ccc', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: '297ccc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: '297ccc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: '5290cc', size: 10}, // ME 1820
    {latitude: 38.5, longitude: -92.5, color: '297ccc', size: 10}, // MO 1830
    {latitude: 35, longitude: -92.5, color: '297ccc', size: 10}, // AR 1840
    {latitude: 44, longitude: -85, color: '5290cc', size: 10}, // MI 1840
    {latitude: 28.5, longitude: -81.5, color: '0068cc', size: 10}, // FL 1850
    {latitude: 31.5, longitude: -99.5, color: '0068cc', size: 10}, // TX 1850
    {latitude: 42, longitude: -93.5, color: '5290cc', size: 10}, // IA 1850
    {latitude: 44.5, longitude: -90, color: '297ccc', size: 10}, // WI 1850
    {latitude: 36, longitude: -119, color: '297ccc', size: 10}, // CA 1850
    {latitude: 46.3, longitude: -94.4, color: '297ccc', size: 10}, // MN 1860
    {latitude: 44, longitude: -120.5, color: '0068cc', size: 10}, // OR 1860
    {latitude: 38.5, longitude: -98.5, color: '297ccc', size: 10}, // KS 1870
    {latitude: 38.5, longitude: -80.9, color: '5290cc', size: 10}, // WV 1870
    {latitude: 39.5, longitude: -117, color: '0068cc', size: 10}, // NV 1870
    {latitude: 41.5, longitude: -100, color: '297ccc', size: 10}, // NE 1870
    {latitude: 39, longitude: -105.5, color: '0068cc', size: 10}, // CO 1880
    {latitude: 47.5, longitude: -100.4, color: '5290cc', size: 10}, // ND 1890
    {latitude: 44.5, longitude: -100.4, color: '297ccc', size: 10}, // SD 1890
    {latitude: 47, longitude: -110, color: '297ccc', size: 10}, // MT 1890
    {latitude: 47.5, longitude: -121, color: '0068cc', size: 10}, // WA 1890
    {latitude: 44, longitude: -114.5, color: '0068cc', size: 10}, // ID 1890
    {latitude: 43, longitude: -107.5, color: '297ccc', size: 10}, // WY 1890
    {latitude: 39.5, longitude: -111.5, color: '0068cc', size: 10}, // UT 1900
    {latitude: 35.5, longitude: -97, color: '297ccc', size: 10}, // OK 1910
    {latitude: 34.6, longitude: -106, color: '0068cc', size: 10}, // NM 1920
    {latitude: 34, longitude: -112, color: '0068cc', size: 10}, // AZ 1920
    {latitude: 28, longitude: -116, color: '297ccc', size: 10}, // AK 1960
    {latitude: 27, longitude: -105.5, color: '297ccc', size: 10} // HI 1960
  ],

  // 2010
  [
    {latitude: 43.5, longitude: -71.6, color: '297ccc', size: 5}, // NH 1790
    {latitude: 42.4, longitude: -72, color: '297ccc', size: 5}, // MA 1790
    {latitude: 41.7, longitude: -71.5, color: '5290cc', size: 5}, // RI 1790
    {latitude: 41.6, longitude: -72.7, color: '5290cc', size: 5}, // CT 1790
    {latitude: 43, longitude: -75, color: '5290cc', size: 10}, // NY 1790
    {latitude: 40.2, longitude: -74.4, color: '5290cc', size: 5}, // NJ 1790
    {latitude: 41, longitude: -78, color: '5290cc', size: 10}, // PA 1790
    {latitude: 39, longitude: -75.4, color: '0068cc', size: 5}, // DE 1790
    {latitude: 39.2, longitude: -76.6, color: '297ccc', size: 5}, // MD 1790
    {latitude: 37.8, longitude: -78.5, color: '297ccc', size: 10}, // VA 1790
    {latitude: 35.5, longitude: -78.5, color: '0068cc', size: 10}, // NC 1790
    {latitude: 33.8, longitude: -80.8, color: '0068cc', size: 10}, // SC 1790
    {latitude: 32.9, longitude: -83.5, color: '0068cc', size: 10}, // GA 1790
    {latitude: 44.2, longitude: -72.7, color: '5290cc', size: 5}, // VT 1800
    {latitude: 37.8, longitude: -84.5, color: '297ccc', size: 10}, // KY 1800
    {latitude: 35.8, longitude: -86.2, color: '297ccc', size: 10}, // TN 1800
    {latitude: 40.1, longitude: -82.7, color: '5290cc', size: 10}, // OH 1810
    {latitude: 31.2, longitude: -92.3, color: '5290cc', size: 10}, // LA 1820
    {latitude: 40, longitude: -86.2, color: '297ccc', size: 10}, // IN 1820
    {latitude: 33, longitude: -89.8, color: '5290cc', size: 10}, // MS 1820
    {latitude: 40, longitude: -89.3, color: '5290cc', size: 10}, // IL 1820
    {latitude: 33, longitude: -86.8, color: '297ccc', size: 10}, // AL 1820
    {latitude: 45.5, longitude: -69, color: '5290cc', size: 10}, // ME 1820
    {latitude: 38.5, longitude: -92.5, color: '297ccc', size: 10}, // MO 1830
    {latitude: 35, longitude: -92.5, color: '297ccc', size: 10}, // AR 1840
    {latitude: 44, longitude: -85, color: '5290cc', size: 10}, // MI 1840
    {latitude: 28.5, longitude: -81.5, color: '0068cc', size: 10}, // FL 1850
    {latitude: 31.5, longitude: -99.5, color: '0068cc', size: 10}, // TX 1850
    {latitude: 42, longitude: -93.5, color: '5290cc', size: 10}, // IA 1850
    {latitude: 44.5, longitude: -90, color: '5290cc', size: 10}, // WI 1850
    {latitude: 36, longitude: -119, color: '297ccc', size: 10}, // CA 1850
    {latitude: 46.3, longitude: -94.4, color: '297ccc', size: 10}, // MN 1860
    {latitude: 44, longitude: -120.5, color: '0068cc', size: 10}, // OR 1860
    {latitude: 38.5, longitude: -98.5, color: '5290cc', size: 10}, // KS 1870
    {latitude: 38.5, longitude: -80.9, color: 'cca3b1', size: 10}, // WV 1870
    {latitude: 39.5, longitude: -117, color: '0068cc', size: 10}, // NV 1870
    {latitude: 41.5, longitude: -100, color: '297ccc', size: 10}, // NE 1870
    {latitude: 39, longitude: -105.5, color: '0068cc', size: 10}, // CO 1880
    {latitude: 47.5, longitude: -100.4, color: '297ccc', size: 10}, // ND 1890
    {latitude: 44.5, longitude: -100.4, color: '297ccc', size: 10}, // SD 1890
    {latitude: 47, longitude: -110, color: '297ccc', size: 10}, // MT 1890
    {latitude: 47.5, longitude: -121, color: '0068cc', size: 10}, // WA 1890
    {latitude: 44, longitude: -114.5, color: '0068cc', size: 10}, // ID 1890
    {latitude: 43, longitude: -107.5, color: '297ccc', size: 10}, // WY 1890
    {latitude: 39.5, longitude: -111.5, color: '0068cc', size: 10}, // UT 1900
    {latitude: 35.5, longitude: -97, color: '297ccc', size: 10}, // OK 1910
    {latitude: 34.6, longitude: -106, color: '297ccc', size: 10}, // NM 1920
    {latitude: 34, longitude: -112, color: '0068cc', size: 10}, // AZ 1920
    {latitude: 28, longitude: -116, color: '297ccc', size: 10}, // AK 1960
    {latitude: 27, longitude: -105.5, color: '297ccc', size: 10} // HI 1960
  ]


];
