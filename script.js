let table = document.getElementsByTagName("table")[0];
let prices = document.querySelectorAll(".price");
	
const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

getSumBtn.addEventListener("click", ()=>{
	const tableRow = document.createElement("tr")
	
	const tableDataPrices = document.createElement("td");
	tableDataPrices.textContent = "Total Price";
	tableRow.appendChild(tableDataPrices);

	const totalPrice = document.createElement("td");
	totalPrice.textContent = getSum();
	tableRow.appendChild(totalPrice);
	
	table.appendChild(tableRow);
})

function getSum() {
	let sum = 0;
	for(let price of prices) {
		sum += parseInt(price.textContent)
	}
	return sum;
}
