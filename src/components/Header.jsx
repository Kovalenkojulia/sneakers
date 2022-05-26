import React from "react";
import { Link } from "react-router-dom";

import { useCart } from "../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img alt="Logo" width={40} height={40} src="/img/logo.png" />
          <div>
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img alt="Card" width={18} height={18} src="/img/card.svg" />
          <span>{totalPrice} $</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="favorites">
            <img
              alt="Favorites"
              width={18}
              height={18}
              src="/img/heart-header.svg"
            />
          </Link>
          <Link to="orders">
            <img alt="User" width={18} height={18} src="/img/user.svg" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
