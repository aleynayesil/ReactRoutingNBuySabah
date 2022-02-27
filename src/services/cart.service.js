// cart ekleme çıkarama güncelleme adet artırma vs gibi işlemler için burada logicler yazılacak bize cart bilgisi döndürecek.

import { CLEARALL } from "../store/action/cart.action";

export const CartService = {
	AddToCart: (newCartItem, stateCartItems) => {
		const existingCartItem = stateCartItems.find((x) => x.id == newCartItem.id);

		// daha önceden sepete eklenmiş
		if (existingCartItem != undefined) {
			existingCartItem.quantity += 1;

			let _total = 0;

			stateCartItems.forEach((cartItem) => {
				_total += Number(cartItem.price) * Number(cartItem.quantity);
			});

			return {
				cartItems: [...stateCartItems],
				total: _total,
			};
		} else {
			let newCartItems = [newCartItem, ...stateCartItems];

			console.log('newCartItems', newCartItems);

			let _total = 0;

			newCartItems.forEach((cartItem) => {
				_total += Number(cartItem.price) * Number(cartItem.quantity);
			});

			return {
				cartItems: [...newCartItems],
				total: _total,
			};
		}
	},
	RemoveFromCart: (id, stateCartItems) => {
		const newCartItems = stateCartItems.filter((x) => x.id != id);

		let _total = 0;

		newCartItems.forEach((item) => {
			_total += Number(item.quantity) * Number(item.price);
		});

		console.log('newCartItems', newCartItems);

		return {
			cartItems: [...newCartItems],
			total: _total,
		};
	},
	INCREASE:(id,stateCartItems)=>{
		const newCartItems = stateCartItems.find((x) => x.id == id);	

		let _total = 0;
		if (newCartItems!=undefined) {
			newCartItems.quantity+=1;

			stateCartItems.forEach((cartItem) => {
			_total += Number(cartItem.price) * Number(cartItem.quantity);
			
			});
		}
	

		return {
			cartItems: [...stateCartItems],
			total: _total,
		};
	},
	DECREASE:(id,stateCartItems)=>{
		const newCartItems = stateCartItems.find((x) => x.id == id);	

		let _total = 0;
		if (newCartItems!=undefined) {
			if (newCartItems.quantity>1) {
				newCartItems.quantity-=1;
			}
			stateCartItems.forEach((cartItem) => {
			_total += Number(cartItem.price) * Number(cartItem.quantity);
			
			});
		}
		return {
			cartItems: [...stateCartItems],
			total: _total,
		};
	},
	CLEARALL:()=>{
			
		let _total=0;
		return {
			cartItems: [],
			total:_total,
		};
	}
};
