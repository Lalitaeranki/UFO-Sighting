// from data.js
let tableData = data;
let tbody = d3.select("tbody");

// Use d3 to update each cell's text with
function getTable(ufoEntry) {
	ufoEntry.forEach(entry => {
		var row = tbody.append("tr");
		Object.values(entry).forEach(value =>{
        var cell = row.append("td");
        cell.text(value);
	});
	});	
}
    
   let submit = d3.select("#filter-btn");
   let reset = d3.select("#reset-btn");
   // Use d3 `.on` to attach a click handler for the reset button
   reset.on("click",function(){
    tbody.html('');
    getTable(tableData);
   });
   // Use d3 `.on` to attach a click handler for the submit
   submit.on("click", function() {
   
     // Prevent the page from refreshing
     d3.event.preventDefault();
   
     /// Get references to  input field 
     let searchDate = d3.select("#datetime").property("value");
     let searchCity = d3.select("#enterCity").property("value");
     let searchCountry = d3.select("#enterCountry").property("value");
     let searchState = d3.select("#enterState").property("value");
     let searchShape = d3.select("#enterShape").property("value");
    //    reset the data
     let filteredData = data;
    //  use filters to search

	if (searchDate != ""){
    	filteredData = filteredData.filter(filterdata => filterdata.datetime === searchDate);
    }
    if (searchCity !=""){
    	filteredData = filteredData.filter(filterdata => filterdata.city.toLowerCase() === searchCity.toLowerCase());
    }
    if (searchState !=""){
        filteredData = filteredData.filter(filterdata => filterdata.state.toLowerCase() === searchState.toLowerCase());
        }
    if (searchCountry !=""){
        filteredData = filteredData.filter(filterdata => filterdata.country.toLowerCase() === searchCountry.toLowerCase());
        }
    if (searchShape !=""){
        filteredData = filteredData.filter(filterdata => filterdata.shape.toLowerCase() === searchShape.toLowerCase());
        }
   
        tbody.html('');
        getTable(filteredData);
    });
    // Render the table for the first time on page load
    getTable(tableData);
    
    