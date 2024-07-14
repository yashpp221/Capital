const ctx = document.getElementById('capitalChart').getContext('2d');
const capitalData = {
  labels: [], // Time, Date, Year will be added dynamically
  datasets: [{
    label: 'Capital (in Rs)',
    data: [],
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 2,
    fill: false
  }]
};

const config = {
  type: 'line',
  data: capitalData,
  options: {
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'minute'
        },
        title: {
          display: true,
          text: 'Time, Date, Year'
        }
      },
      y: {
        min: 10000000, // 1 crore in Rs
        max: 150000000, // 15 crores in Rs
        title: {
          display: true,
          text: 'Capital (in Rs)'
        }
      }
    }
  }
};

const capitalChart = new Chart(ctx, config);

async function fetchData() {
  // Fetch data from the server (replace with your actual data source)
  const response = await fetch('data.json');
  const data = await response.json();
  const now = new Date();

  // Update labels and data
  capitalChart.data.labels.push(now);
  capitalChart.data.datasets[0].data.push(data.capital);

  // Remove old data points to keep the graph within a time range
  if (capitalChart.data.labels.length > 60) { // Keep data of last 60 minutes
    capitalChart.data.labels.shift();
    capitalChart.data.datasets[0].data.shift();
  }

  capitalChart.update();
}

// Fetch data every minute
setInterval(fetchData, 60000);
fetchData(); // Initial fetch
