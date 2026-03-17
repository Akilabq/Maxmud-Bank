document.addEventListener("DOMContentLoaded", function() {
  
  const mainCanvas = document.getElementById('mainBarChart');
  if (mainCanvas) {
    const ctxMain = mainCanvas.getContext('2d');
    new Chart(ctxMain, {
      type: 'bar',
      data: {
        labels: ['Mar 1 - 7', 'Mar 8 - 14', 'Mar 15 - 21', 'Mar 22 - 28', 'Final wk'],
        datasets: [{
          data: [48000, 125000, 125000, 125000, 190000],
          backgroundColor: '#EAC9FF',
          borderRadius: 8,
          borderSkipped: false,
          barPercentage: 0.6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: {
            min: 0,
            max: 200000,
            ticks: { stepSize: 50000, color: '#aaa' },
            border: { display: false },
            grid: { color: '#EFEFEF', borderDash: [5, 5] }
          },
          x: {
            border: { display: false },
            grid: { display: false },
            ticks: { color: '#aaa' }
          }
        }
      }
    });
  }

  const donutCanvas = document.getElementById('successDonutChart');
  if (donutCanvas) {
    const ctxDonut = donutCanvas.getContext('2d');
    new Chart(ctxDonut, {
      type: 'doughnut',
      data: {
        labels: ['Successful', 'Unsuccessful'],
        datasets: [{
          data: [98, 2],
          backgroundColor: ['#93C47D', '#D9EAD3'],
          borderWidth: 0,
          cutout: '75%'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: false }
        }
      }
    });
  }

});