
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
}
const tokyo = {
    name: 'tokyo',
    minCustomersPerHour: 3,
       maxCustomersPerHour: 24,
       avgCookiesPerCustomer: 1.2,
       cookiesSoldPerHour: [],
       totalCookiesSold: 0, 
}
const dubai = {
    name: 'dubai',
    minCustomersPerHour: 11,
       maxCustomersPerHour: 38,
       avgCookiesPerCustomer: 3.7,
       cookiesSoldPerHour: [],
       totalCookiesSold: 0, 
}
const paris = {
    name: 'paris',
    minCustomersPerHour: 20,
       maxCustomersPerHour: 38,
       avgCookiesPerCustomer: 2.3,
       cookiesSoldPerHour: [],
       totalCookiesSold: 0, 
}
const lima = {
    name: 'lima',
    minCustomersPerHour: 2,
       maxCustomersPerHour: 16,
       avgCookiesPerCustomer: 4.6,
       cookiesSoldPerHour: [],
       totalCookiesSold: 0, 
}

    // Function to generate random customers and calculate cookies sold per hour
    simulateHourlySales: function() {
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

let salesList = document.getElementById('sales-list');

// Create a header row for the table
let table = document.createElement('table');
salesList.appendChild(table);

function createHeaderRow() {
    let thead = document.createElement('thead');
    let headerRow = document.createElement('tr');
    let emptyHeaderCell = document.createElement('th');
    headerRow.appendChild(emptyHeaderCell);

    for (let hour = 6; hour <= 19; hour++) {
        let headerCell = document.createElement('th');
        headerCell.textContent = `${hour}:00`;
        headerRow.appendChild(headerCell);
    }

    let totalHeaderCell = document.createElement('th');
    totalHeaderCell.textContent = 'Daily Location Total';
    headerRow.appendChild(totalHeaderCell);

    thead.appendChild(headerRow);
    table.appendChild(thead);
}

function createFooterRow() {
    let tfoot = document.createElement('tfoot');
    let footerRow = document.createElement('tr');
    let footerCell = document.createElement('td');
    footerCell.textContent = 'Totals';
    footerRow.appendChild(footerCell);

    let grandTotal = 0;

    for (let hour = 6; hour <= 19; hour++) {
        let totalCookiesSoldInHour = 0;
        for (let location of locations) {
            totalCookiesSoldInHour += location.cookiesSoldPerHour[hour - 6];
        }
        grandTotal += totalCookiesSoldInHour;

        let footerCell = document.createElement('td');
        footerCell.textContent = totalCookiesSoldInHour;
        footerRow.appendChild(footerCell);
    }

    let totalFooterCell = document.createElement('td');
    totalFooterCell.textContent = grandTotal;
    footerRow.appendChild(totalFooterCell);

    tfoot.appendChild(footerRow);
    table.appendChild(tfoot);
}

// Constructor function for a cookie stand
function CookieStand(name, minCustomersPerHour, maxCustomersPerHour, avgCookiesPerCustomer) {
    this.name = name;
    this.minCustomersPerHour = minCustomersPerHour;
    this.maxCustomersPerHour = maxCustomersPerHour;
    this.avgCookiesPerCustomer = avgCookiesPerCustomer;
    this.cookiesSoldPerHour = [];
    this.totalCookiesSold = 0;
}

// Create instances for each cookie stand
const locations = [
    new CookieStand('Seattle', 23, 65, 6.3),
    new CookieStand('Tokyo', 3, 24, 1.2),
    new CookieStand('Dubai', 11, 38, 3.7),
    new CookieStand('Paris', 20, 38, 2.3),
    new CookieStand('Lima', 2, 16, 4.6)
];

// Call the simulateHourlySales method for each location and render the table
function renderTable() {
    createHeaderRow();

    for (let location of locations) {
        location.simulateHourlySales();
        location.render();
    }

    createFooterRow();
}

renderTable();