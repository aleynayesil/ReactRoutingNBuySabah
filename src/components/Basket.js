import React, { useEffect, useState } from "react";
import { Button, ButtonGroup, Card, ListGroup, ListGroupItem, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cardBasketState } from "../store/action/shop.action";
import { RemoveFromCart,INCREASE,DECREASE,CLEARALL } from '../store/action/cart.action';


function Basket({ ...props }) {
   const basketState = useSelector((store) => store.basketState.status);
 
  const cartState = useSelector((store)=>store.cartState.cartItems);
  const totalPrice = useSelector((store)=>store.cartState.total);

  //  const basketQuantity = useSelector((store) => store.cartState.cartItems);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(cardBasketState(false));
  };
  const removeToCard=(id)=>{
    dispatch(RemoveFromCart(id,cartState));
  }
  const increase=(id)=>{
    dispatch(INCREASE(id,cartState.quantity));
  }
  const decrease=(id)=>{
    dispatch(DECREASE(id,cartState.quantity));
  }
  const clearAll=(id)=>{
    dispatch(CLEARALL(id));
  }


  return (
    <>      
      <Offcanvas onHide={handleClose} show={basketState} {...props}>
        <Offcanvas.Header>
          <a className="btn btn-dark btn-sm rounded-circle" onClick={() => handleClose()}>
          <i class="bi bi-x-lg"></i>
          </a>
          <Offcanvas.Title>Shopping Basket</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Card>
          <ListGroup variant="flush">
            {cartState && cartState.map((cartItems)=>{
              return(
                 <ListGroup.Item>{cartItems.name}
            <a onClick={()=>removeToCard(cartItems.id)} className="float-end btn btn-danger btn-sm ms-2"><i class="bi bi-trash3"></i></a>
              <ButtonGroup className="float-end">
              <a onClick={()=>increase(cartItems.id) }className="btn btn-secondary btn-sm"><i class="bi bi-plus"></i></a>
              <span className="p-1 bg-secondary text-light">{cartItems.quantity}</span>
              <a onClick={()=>decrease(cartItems.id) }  className="btn btn-secondary btn-sm"><i class="bi bi-dash"></i></a>
              </ButtonGroup>
            </ListGroup.Item>
              );
              })}
          </ListGroup>
          <Card.Footer className="text-end text-dark"><span className="text-muted">{totalPrice}</span>
          <a onClick={()=>clearAll()} className="btn btn-sm btn-outline-dark float-start">Clear All</a>
           </Card.Footer>
      </Card>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );

}


   
function Example() {
  return (
    <>
      {["end"].map((placement, idx) => (
        <Basket key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}
export default Example;
