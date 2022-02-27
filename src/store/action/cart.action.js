export const AddToCart = (cartItem) => {
	return {
		type: 'AddToCart',
		payload: cartItem,
	};
};

export const RemoveFromCart = (id) => {
	return {
		type: 'RemoveFromCart',
		payload: { id: id },
	};
};
export const INCREASE =(id)=>{
	return{
	  type:"INCREASE",
	  payload:{id:id},
	};
};
export const DECREASE =(id)=>{
	return{
		type:'DECREASE',
		payload:{id:id}
	};
};
export const CLEARALL =(id)=>{
	return{
		type:'CLEARALL',
		payload:{id:id}
	};
};