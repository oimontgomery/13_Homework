  var tableData = data;
  

//Table building code
function generateTable(data){

  var tbody = d3.select("tbody");

  tbody.html("");

  data.forEach(function(alienReport){
 

  // Step 2:  Use d3 to append one table row `tr` for each alien report object
  var row = tbody.append("tr")

  // Step 3:  Use `Object.entries` to console.log each weather report value
  Object.entries(alienReport).forEach(function([key, value]){

  // Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
  var cell = tbody.append("td")

  // Step 5: Use d3 to update each cell's text with
  cell.text(value);
})
})
}

generateTable(data);


function handleClick(){

// think about how to handle when someone enters an empty date!!!

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputElement);

    console.log(inputValue);

    var filteredDateSightings = tableData.filter(sighting => sighting.datetime === inputValue);

    console.log(filteredDateSightings)

    if (inputValue===null){
      generateTable(data);
    }

    else {
      generateTable(filteredDateSightings);

    }

//call generateTable function above using new filtered data


}


d3.selectAll("#filter-btn").on("click", handleClick);



