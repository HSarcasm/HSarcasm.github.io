getJson();

var total = [...Array(532).keys()].map(k => ++k);

var content = document.getElementById('content');
var rowSize = 25;


function createTable (numbers) {
	for (i = 0, j = total.length; i < j; i += rowSize) {
		let temparray = total.slice(i , i + rowSize);

		createRow(temparray, numbers)
	}
}

function createRow (arr, numbers) {

	var row = document.createElement('div');
	row.setAttribute('class', 'row');
	for (let c = 0; c < arr.length; c++) {
		row.appendChild(createCell(arr[c], numbers));
	}
	content.appendChild(row);

}

function createCell (n, numbers) {

	var cell = document.createElement('div');
	var number = document.createTextNode(n);
	if (numbers.includes(n)) {
		cell.setAttribute('class', 'picked');
	}
	cell.appendChild(number);
	return cell;

}

function getJson () {

	var headers = new Headers();
		headers.append("secret-key", "$2b$10$RBJSHgsAYG.xdGZXLhTSFe3t8qYZX23HCwC8vcQ5Le/H3Z03ftE8u");
		headers.append("Cookie", "__cfduid=d69bfb46447dce1c95817e74107b131c41593385003");

	var requestOptions = {
		method: 'GET',
		headers: headers,
		redirect: 'follow'
	};

	fetch("https://api.jsonbin.io/b/5ef91f547f16b71d48a7aa07/2", requestOptions)
		.then(response => response.text())
		.then(result => createTable(JSON.parse(result)))

}