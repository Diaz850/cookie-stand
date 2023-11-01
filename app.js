
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
// Constructor function for a cookie stand
function CookieStand(name, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
    this.name = name;
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.cookiesSoldPerHour = [];
    this.totalCookiesSold = 0;
}
// Method to generate random customers and calculate cookies sold per hour
CookieStand.prototype.simulateHourlySales = function () {
    for (let hour = 6; hour <= 19; hour++) { // 6am to 7pm
        let customers = Math.floor(Math.random() * (this.maxCustomersPerHour - this.minCustomersPerHour + 1)) + this.minCustomersPerHour;
        let cookies = Math.round(customers * this.avgCookiesPerCustomer);
        this.cookiesSoldPerHour.push(cookies);
        this.totalCookiesSold += cookies;
    }
    this.render();
};

// Method to display sales data in a table format
CookieStand.prototype.render = function () {
    let table = document.getElementById('sales-table');
    let row = document.createElement('tr');
    let locationData = document.createElement('td');
    locationData.textContent = this.name;
    row.appendChild(locationData);

    for (let i = 0; i < this.cookiesSoldPerHour.length; i++) {
        let cell = document.createElement('td');
        cell.textContent = this.cookiesSoldPerHour[i];
        row.appendChild(cell);
    }

    let totalCell = document.createElement('td');
    totalCell.textContent = this.totalCookiesSold;
    row.appendChild(totalCell);

    table.appendChild(row);
};
// Create instances for each cookie stand
const seattleStore = new CookieStand('Seattle', 23, 65, 6.3);
const tokyoStore = new CookieStand('Tokyo', 3, 24, 1.2);
const dubaiStore = new CookieStand('Dubai', 11, 38, 3.7);
const parisStore = new CookieStand('Paris', 20, 38, 2.3);
const limaStore = new CookieStand('Lima', 2, 16, 4.6);

// Call the simulateHourlySales method for each location
seattleStore.simulateHourlySales();
tokyoStore.simulateHourlySales();
dubaiStore.simulateHourlySales();
parisStore.simulateHourlySales();
limaStore.simulateHourlySales();