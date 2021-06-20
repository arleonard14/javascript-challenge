// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

var tbody = d3.select("tbody")

// Create event handlers 
button.on("click", runEnter);
makeChart(tableData)

// Complete the event handler function for the form
function runEnter() {
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = tableData.filter(row => row.datetime === inputValue);

  console.log(filteredData);
  makeChart(filteredData)
}

function makeChart(chartData) {
    tbody.html("")
    chartData.forEach (row => {
        var currRow = tbody.append ("tr")
        Object.values (row).forEach (x => {
            var cell = currRow.append("td")
            cell.text (x)
        })
    })

}