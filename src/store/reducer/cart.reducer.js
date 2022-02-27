import { CartService } from '../../services/cart.service';

const CartState = {
	cartItems: [],
	total: 0,
	quantity:null,
};

export const CartReducer = (state = CartState, action) => {
	console.log('action', action);

	switch (action.type) {
		case 'AddToCart':
			console.log('add');
			const cartObject1 = CartService.AddToCart(
				action.payload,
				state.cartItems
			);

			return {
				...state,
				cartItems: cartObject1.cartItems,
				total: cartObject1.total,
			};
		case 'RemoveFromCart':
			console.log('remove');
			const cartObject2 = CartService.RemoveFromCart(
				action.payload.id,
				state.cartItems
			);

			console.log('RemoveFromCart', cartObject2);

			return {
				...state,
				cartItems: cartObject2.cartItems,
				total: cartObject2.total,
			};
			case 'INCREASE':
			console.log('INCREASE');
			
			const cartObject3 = CartService.INCREASE(
				action.payload.id,
				state.cartItems,
			);

			console.log('increase', cartObject3);

			return {
				...state,
				cartItems:cartObject3.cartItems,
				quantity:cartObject3.quantity,
				total: cartObject3.total,
			};
			case 'DECREASE':
			console.log('DECREASE');
			
			const cartObject4 = CartService.DECREASE(
				action.payload.id,
				state.cartItems,
			);

			console.log('DECREASE', cartObject4);

			return {
				...state,
				cartItems:cartObject4.cartItems,
				quantity:cartObject4.quantity,
				total: cartObject4.total,
			};
			case 'CLEARALL':
				console.log('CLEARALL');
				
				const cartObject5 = CartService.CLEARALL(
					action.payload.id,
					state.cartItems,
				);
	
	
				return {
					...state,
					cartItems:[],
					total:0,
				};
		default:
			console.log('default');
			return state;
	}
};
