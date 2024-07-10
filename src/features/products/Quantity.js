import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  quantityValue,
  reset,
  quantityIncrement,
  quantityDecrement,
} from "./cartQuantity";

const Quantity = () => {
  const selector = useSelector(quantityValue)
  const dispatch = useDispatch();

  const [item, setItem] = useState([]);
  const API_URL = `${process.env.PUBLIC_URL}/db.json`;

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setItem(response.data.products))
      .catch((err) => console.log(err));
  }, []);

  function handleDelete() {
    dispatch(reset());
  }
  return (
    <div>
      <div className="content">
        <div>
          <div className="image">
            <img
              src="https://m.media-amazon.com/images/I/61-r9zOKBCL._SX679_.jpg"
              alt="pic"
            />

            <div className="detail">
              <div className="about">
                <h1>{item.length && item[0].title}</h1>
                <h3>Brand: {item.length && item[0].brand}</h3>
                <p className="des">{item.length && item[0].description}</p>

                <h6>Category: {item.length && item[0].category}</h6>
              </div>
              <div className="quantity">
                <div className="inner-quantity">
                  <button
                    onClick={() =>
                      dispatch(
                        quantityDecrement())}
                  >
                    -
                  </button>
                  <span>{selector}</span>
                  <button
                    onClick={() =>
                      dispatch(
                        quantityIncrement())}
                  >
                    +
                  </button>
                </div>
                <h3 className="price">
                  <span>&#x24;</span>
                  {item.length && item[0].price}
                </h3>
                <br />
                <h1 className="underh1" onClick={handleDelete}>Remove</h1>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
      <div>
        <div className="pricing">
          <h6>SUBTOTAL</h6>
          <p>
            <span>&#x24;</span>
            {item.length && item[0].price * selector}
          </p>
          <h6>SHIPPING</h6>
          <p>FREE</p>
        </div>
        <hr />
        <div className="pricing">
          <h6>TOTAL</h6>
          <p>
            <span>&#x24;</span>
            {item.length && item[0].price * selector}
            <br />
            <span className="under">Get Daily Cash with Nespola Card</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Quantity;
