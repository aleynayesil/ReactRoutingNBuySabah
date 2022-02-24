import React, { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { cardBasketState } from "../store/action/shop.action";
function Basket({ ...props }) {
  const basketState = useSelector((store) => store.basketState.status);
  console.log("BasketState", basketState);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(cardBasketState(false));
  };
  return (
    <>
      <Offcanvas onHide={handleClose} show={basketState} {...props}>
        <Offcanvas.Header>
          <a className="btn btn-danger" onClick={() => handleClose()}>
            <i class="bi bi-x-circle-fill"></i>
          </a>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
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
