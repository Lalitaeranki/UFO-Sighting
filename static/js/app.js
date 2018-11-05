// from data.js
let tableData = data;
let tbody = d3.select("tbody");


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
   reset.on("click",function(){
    tbody.html('');
    getTable(tableData);
   });
   submit.on("click", function() {
   
     // Prevent the page from refreshing
     d3.event.preventDefault();
   
     // Select the input element and get the raw HTML node
     let searchDate = d3.select("#datetime").property("value");
     let searchCity = d3.select("#enterCity").property("value");
     let searchCountry = d3.select("#enterCountry").property("value");
     let searchState = d3.select("#enterState").property("value");
     let searchShape = d3.select("#enterShape").property("value");
   
     let filteredData = data;

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
    
    
    getTable(tableData);
    
    