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
  var date = d3.select("#datetime").property("value")
  var city = d3.select("#city").property("value")
  var state = d3.select("#state").property("value")
  var country = d3.select("#country").property("value")
  var shape = d3.select("#shape").property("value")

  var filteredData = tableData

  if (date){
    filteredData = filteredData.filter(row => row.datetime === date);
  }

  if (city){
    filteredData = filteredData.filter(row => row.city === city);
  }

  if (state){
    filteredData = filteredData.filter(row => row.state === state);
  }

  if (country){
    filteredData = filteredData.filter(row => row.country === country);
  }
  if (shape){
    filteredData = filteredData.filter(row => row.shape === shape);
  }

 

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