// Profit by Category (Donut Chart)
const ctx7 = document.getElementById('profitByCategory');
new Chart(ctx7, {
  type: 'doughnut',
  data: {
    labels: ['Beverages', 'Household', 'Personal Care', 'Snacks', 'Rice & Grains', 'Bakery', 'Dairy', 'Fresh Produce'],
    datasets: [{
      data: [181, 195, 198, 250, 272, 318, 400, 186],
      backgroundColor: ['#f39c12','#2980b9','#27ae60','#8e44ad','#c0392b','#16a085','#d35400','#7f8c8d']
    }]
  }
});

// Profit by Branch (Bar Chart)
const ctx8 = document.getElementById('profitByBranch');
new Chart(ctx8, {
  type: 'bar',
  data: {
    labels: ['Colombo 07', 'Nugegoda', 'Kandy', 'Negombo', 'Galle'],
    datasets: [{
      label: 'Profit',
      data: [500, 400, 350, 300, 250],
      backgroundColor: '#27ae60'
    }]
  }
});

// Sales vs Profit by Product (Scatter Plot)
const ctx9 = document.getElementById('salesVsProfitProducts');
new Chart(ctx9, {
  type: 'scatter',
  data: {
    datasets: [{
      label: 'Products',
      data: [
        {x: 1.2, y: 0.3}, // Example product
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
