class ServiceProducts {
	constructor(containerProducts, productsCatalog) {
		this.container = document.querySelector(containerProducts);
		this.productsCatalog = productsCatalog;
		this.create();
	}
	create(){
		var wrapper = document.createElement('slot');

		for(var i=0; i<this.productsCatalog.length; i++) {

			var item  = this.getElement({ tagName:'div',    className:'item' });
			var name  = this.getElement({ tagName:'div',    className:'name',  innerText:this.productsCatalog[i].name });
			var img   = this.getElement({ tagName:'div',    className:'img',   backgroundImage:`url(${this.productsCatalog[i].img})` });
			var price = this.getElement({ tagName:'div',    className:'price', innerText:this.productsCatalog[i].price.toLocaleString()+' USD' });
			var btn   = this.getElement({ tagName:'button', className:'btn',   innerText:'Добавить в корзину' });

			item.appendChild(name);
			item.appendChild(img);
			item.appendChild(price);
			item.appendChild(btn);
			wrapper.appendChild(item);
		}
		this.container.appendChild(wrapper);
	}

	getElement(options) {
		var element = document.createElement(options.tagName);
		if ('className' in options) {
			element.setAttribute('class', options.className);
		}
		if ('innerText' in options) {
			element.innerText = options.innerText;
		}
		if ('backgroundImage' in options) {
			element.style.backgroundImage = options.backgroundImage;
		}
		return element;
	}

	actions() {
		//
	}
}

var serviceProducts = new ServiceProducts('.container-products', productsCatalog);
