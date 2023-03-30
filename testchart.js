import Chart from 'chart.js/auto'
(async function() {
    const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
      ];
      //graph config stuff
      const barcfg = {
        type: 'bar',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count)
            }
          ]
        }
      }
      const linecfg = {
        type: 'line',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count)
            }
          ]
        }
      }
      const doughnutcfg = {
        type: 'doughnut',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count)
            }
          ]
        }
      }
      const bubblecfg = {
        type: 'bubble',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count)
            }
          ]
        }
      }
  chartGen('bar', barcfg);
  chartGen('line', linecfg);
  chartGen('doughnut', doughnutcfg)
  chartGen('bubble', bubblecfg);
  chartGen('polar', polarcfg);
  function chartGen(element, cfg){
    new Chart(
    document.getElementById(element),
    cfg
)}
})();
//element: what element on the html side to change
//cfg: array with config paramaters
