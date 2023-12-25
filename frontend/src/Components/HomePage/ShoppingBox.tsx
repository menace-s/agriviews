import React, { ChangeEvent } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "../../styles/Components/NavBar/ProductPage/style.css";

interface Item {
  id: number;
  image: string;
  titre: string;
  price: number;
  quantity: number;
}

interface RootState {
  cart: Item[];
}

const ShoppingBox: React.FC = () => {
  const storeState = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const indexItem = storeState.cart.findIndex((obj) => obj.id === id);

    const objUpdated = {
      ...storeState.cart[indexItem],
      quantity: Number(event.target.value)
    };

    dispatch({
      type: "UPDATEITEM",
      payload: objUpdated
    });
  };

  let totalPrice: number = 0;
  if (storeState.cart.length !== 0) {
    for (const item of storeState.cart) {
      const itemPrice = item.price * item.quantity;
      totalPrice += itemPrice;
    }
  }

  return (
    <div className="global-container">
      <p className="heading-cart">Votre panier : </p>
      <ul className="cart-list">
        {storeState.cart.map((item) => (
          <li key={item.id}>
            <img src={item.image} alt="image du produit" />
            <div className="bloc-cart-infos">
              <h4>{item.titre}</h4>
              <p>Prix: {item.price}F CFA</p>
            </div>
            <div className="bloc-input">
              <label htmlFor="quantityInput">quantité</label>
              <input
                type="number"
                id="quantityInput"
                value={item.quantity}
                onChange={(e) => handleChange(e, item.id)}
              />
            </div>
          </li>
        ))}
      </ul>
      <p className="total-price">Total : {`${totalPrice.toFixed(2)} F CFA`}</p>
      <button type="button" className="btn-cart">
        Procéder au paiement
      </button>
    </div>
  );
};

export default ShoppingBox;
