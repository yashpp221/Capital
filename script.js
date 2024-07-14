const ctx = document.getElementById('capitalChart').getContext('2d');

const capitalData = {
  labels: [], // Time, Date, Year will be added dynamically
  datasets: [{
    label: 'Capital (in Rs)',
    data: [],
    borderColor: 'rgba(75, 192, 192, 1)',
    backgroundColor: 'rgba(75, 192, 192, 0.2)',
    borderWidth: 2,
    fill: true,
    tension: 0.4
  }]
};

const config = {
  type: 'line',
  data: capitalData,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sunita Fashion Capital in Rs Coin'
      }
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'minute',
          displayFormats: {
            minute: 'HH:mm'
          }
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
        },
        ticks: {
          callback: function(value, index, values) {
            return value.toLocaleString('en-IN', { style: 'currency', currency: 'INR', minimumFractionDigits: 0 });
          }
        }
      }
    }
  }
};

const capitalChart = new Chart(ctx, config);

async function fetchData() {
  // Simulating fetching data from the server (replace with your actual data source)
  const capital = Math.floor(Math.random() * (150000000 - 10000000 + 1) + 10000000); // Random capital value between 1 crore and 15 crores
  const now = new Date();

  // Update labels and data
  capitalChart.data.labels.push(now);
  capitalChart.data.datasets[0].data.push(capital);

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
