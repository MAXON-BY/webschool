class ServiceProducts {
	constructor(containerProducts, productsCatalog) {
		this.container = document.querySelector(containerProducts);
		this.productsCatalog = productsCatalog;
		this.create();
	}
	create(){
		var html = '';
		for(var i=0; i<this.productsCatalog.length; i++) {
			html += `
				<div class="item">
					<div class="name">${this.productsCatalog[i].name}</div>
					<div class="img" style="background-image: url(${this.productsCatalog[i].img})"></div>
					<div class="price">${this.productsCatalog[i].price.toLocaleString()} USD</div>
					<button class="btn">Добавить в корзину</button>
				</div>
			`;
		}
		this.container.innerHTML = html;
	}
	actions() {
		//
	}
}

var serviceProducts = new ServiceProducts('.container-products', productsCatalog);
