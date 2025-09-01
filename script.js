const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);
let allPrices = document.querySelectorAll(".price");

const getSum = () => {
	let sum = 0;
	for(let num of allPrices) {
		sum += parseInt(num.textContent);
	}
	console.log(sum);
};

getSumBtn.addEventListener("click", getSum);

