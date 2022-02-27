export const BasketService={
    addQuantity:(newItem,stateBasket)=>{
        const basket= stateBasket.find((x)=>x.id==newItem.id);
		let _total ;
		let qty;
		stateBasket.forEach((basketItem)=>{
			 qty+=Number(basket.quantity);
			 _total += Number(basketItem.price) * Number(qty);
		});
		return{
			basketItems:[...stateBasket],
			quantity:qty,
			total:_total,
		}
    }
}
