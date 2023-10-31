
let salesList = document.getElementById('sales-list');
let seattleList = document.createElement('ul');
salesList.appendChild(seattleList);
// object for the Seattle location
const seattle = {
    name: 'Seattle',
    minCustomersPerHour: 23,
    maxCustomersPerHour: 65,
    avgCookiesPerCustomer: 6.3,
    cookiesSoldPerHour: [],
    totalCookiesSold: 0,
  
    // Function to generate random customers and calculate cookies sold per hour
    simulateHourlySales: function () {
      for (let hour = 6; hour <= 19; hour++) { // 6am to 7pm
        let customers = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
        let cookies = Math.round(customers * this.avgCookiesPerCustomer);
        this.cookiesSoldPerHour.push(`${hour}am: ${cookies} cookies`);
        this.totalCookiesSold += cookies;
      }
      this.displaySalesData();
    },
  
    // Function to display sales data in the browser
    displaySalesData: function () {
      let salesList = document.getElementById('sales-list');
      let locationTitle = document.createElement('h2');
      locationTitle.textContent = this.name;
      salesList.appendChild(locationTitle);
  
      let hourlyList = document.createElement('ul');
      for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
       let listItem = document.createElement('li');
        listItem.textContent = this.cookiesSoldPerHour[i];
        hourlyList.appendChild(listItem);
      }
  
      let totalListItem = document.createElement('li');
      totalListItem.textContent = `Total: ${this.totalCookiesSold} cookies`;
      hourlyList.appendChild(totalListItem);
  
      salesList.appendChild(hourlyList);
    }
  };
  
  // Call the simulateHourlySales method to generate and display sales data
  seattle.simulateHourlySales();