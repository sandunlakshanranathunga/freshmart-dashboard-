// Cost by Quarter (Bar Chart)
const ctx4 = document.getElementById('costByQuarter');
new Chart(ctx4, {
  type: 'bar',
  data: {
    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
    datasets: [{
      label: 'Total Cost',
      data: [2.1, 2.3, 2.2, 2.4], // replace with your actual quarterly values
      backgroundColor: '#e74c3c'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});

// Cost vs Sales by Branch (Line Chart)
const ctx5 = document.getElementById('costVsSales');
new Chart(ctx5, {
  type: 'line',
  data: {
    labels: ['Colombo 07', 'Nugegoda', 'Kandy', 'Negombo', 'Galle'],
    datasets: [
      {
        label: 'Total Cost',
        data: [1.8, 1.5, 1.3, 1.2, 1.0], // replace with branch cost data
        borderColor: '#e74c3c',
        tension: 0.3,
        fill: false
      },
      {
        label: 'Net Sales',
        data: [2.5, 2.0, 1.8, 1.5, 1.2], // replace with branch sales data
        borderColor: '#27ae60',
        tension: 0.3,
        fill: false
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});

// Cost Breakdown by Category (Pie Chart)
const ctx6 = document.getElementById('costByCategory');
new Chart(ctx6, {
  type: 'pie',
  data: {
    labels: ['Rice & Grains', 'Beverages', 'Dairy', 'Snacks'],
    datasets: [{
      data: [3.0, 2.0, 2.5, 1.5], // replace with category cost data
      backgroundColor: ['#f39c12', '#2980b9', '#27ae60', '#8e44ad']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'right' }
    }
  }
});
