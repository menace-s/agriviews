import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaShoppingBasket, FaRegHeart, FaHeart } from "react-icons/fa";
import "../../styles/Components/NavBar/ProductsBox/style.css";

interface ProductsBoxProps {
  id: string | number;
  price: number;
  unit: string;
  description: string;
}

const ProductsBox: React.FC<ProductsBoxProps> = ({ id, price, unit, description }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleBuyClick = () => {
    navigate(`/product/${id}`);
  };

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="product">
      <div className="top__card">
        <FaShoppingBasket className="panier" />
        {isFavorite ? (
          <FaHeart className="heart heart__red" onClick={handleFavoriteClick} />
        ) : (
          <FaRegHeart className="heart" onClick={handleFavoriteClick} />
        )}
      </div>
      <div className="body__card"></div>
      <div className="footer__card">
        <div className="top">
          <h3 className="price">
            {price} FCFA <span className="kilo">{unit}</span>
          </h3>
          <p>{description}</p>
        </div>
        <button type="button" onClick={handleBuyClick}>
          Achetez
        </button>
      </div>
    </div>
  );
};

export default ProductsBox;
