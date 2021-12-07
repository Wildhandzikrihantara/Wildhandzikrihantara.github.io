// munculin barang
const getListBarang = () => {
	var items = [
		["001", "Keyboard Logitec", 60000, "Keyboard yang mantap untuk kantoran", "logitek.jpg"],
		["002", "Keyboard MSI", 300000, "Keyboard gaming MSI mekanik", "msi.jpg"],
		["003", "Mouse Genius", 50000, "Mouse Genius biar lebih pinter", "genius.jpeg"],
		["004", "Mouse Jerry", 30000, "Mouse yang disukai kucing", "jerry.jpg"]
	];
	const listBarang = document.getElementById('listBarang');
	const urlImg = 'assets/'
	items.forEach((item) => {
		listBarang.innerHTML += `
			<div class="col-4 mt-2">
			    <div class="card" style="width: 18rem;">
			        <img src="${urlImg}${item[4]}" class="card-img-top" height="200px" width="200px" alt="${item[1]}">
			        <div class="card-body">
			            <h5 class="card-title" id="itemName">${item[1]}</h5>
			            <p class="card-text" id="itemDesc">${item[3]}</p>
			            <p class="card-text">${item[2]}</p>
			            <a href="#" class="btn btn-primary addCart" id="addCart">Tambahkan ke keranjang</a>
			        </div>
			    </div>
			</div>
		`;
	});

};

// cart (nambah barang)
const cart = () => {
	const btnCart = document.getElementById('cart');
	const btnsAdd = document.querySelectorAll('.addCart');
	let amount = 1;
	btnsAdd.forEach((btnAdd) => {
		btnAdd.addEventListener('click', () => {
			btnCart.innerHTML = `<li class="fas fa-shopping-cart"></li> (${amount++})`;
		});
	});
};

// search bar
const formSearchItem = () => {
	const 
};

// main
const main = () => {
	getListBarang();
	cart();
	formSearchItem();
};

main();