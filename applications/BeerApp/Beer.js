function updatevalue( event) {
	var selectElement = document.getElementById('beerType');	
	document.getElementById('beerTypeSelected').innerHTML = selectElement.value;
}

function validatenumber( event){
	var element = event.target;
	var val = parseInt(element.value);
	if ( Number.isNaN(val)) {
		event.preventDefault()
			element.value = "";
	}	
}
function checkInventory(){
	var beerType = document.getElementById('beerType').value;
	var beerQty = document.getElementById('quantity').value;
	alert("we are out of stock for " + beerType + " - " + beerQty);
}
