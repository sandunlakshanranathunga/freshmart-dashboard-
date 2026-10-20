// Sales by Month (Line Chart)
const ctx1 = document.getElementById('salesByMonth');
new Chart(ctx1, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Net Sales',
      data: [1.2, 1.5, 2.0, 2.3, 2.8, 3.2],
      borderColor: '#2c3e50',
      backgroundColor: '#f39c12',
      fill: true
    }]
  }
});

// Sales by Branch (Bar Chart)
const ctx2 = document.getElementById('salesByBranch');
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Colombo 07', 'Nugegoda', 'Kandy', 'Negombo', 'Galle'],
    datasets: [{
      label: 'Sales',
      data: [2.5, 2.0, 1.8, 1.5, 1.2],
      backgroundColor: '#27ae60'
    }]
  }
});

// Sales vs Profit (Scatter Plot)
const ctx3 = document.getElementById('salesVsProfit');
new Chart(ctx3, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Products',
      data: [
        {x: 1.2, y: 0.3},
        {x: 2.0, y: 0.5},
        {x: 2.8, y: 0.7}
      ],
      backgroundColor: '#2980b9'
    }]
  },
  options: {
    scales: {
      x: {title: {display: true, text: 'Net Sales (M)'}},
      y: {title: {display: true, text: 'Profit (M)'}}
    }
  }
});
