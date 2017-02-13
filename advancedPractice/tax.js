var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

function calculateSalesTax(salesData, taxRates) {
  var companyResults = {};
  for (var i = 0; i < salesData.length; i++) {
    if (!(salesData[i]['name'] in companyResults)) {
      companyResults[salesData[i]['name']] = {totalSales: 0, totalTaxes: 0};
    }
    var sales = 0;
    for (var j = 0; j < salesData[i]['sales'].length; j++) {
      sales += salesData[i]['sales'][j];
    }
    companyResults[salesData[i]['name']]['totalSales'] += sales;
    companyResults[salesData[i]['name']]['totalTaxes'] += sales * taxRates[salesData[i]['province']];
  }
  return companyResults;
}

var results = calculateSalesTax(companySalesData, salesTaxRates);

console.log(results);

