import "../../styles/Components/NavBar/ProductsBox/style.css";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";

interface Product {
    id: number;
    image: string;
    titre: string;
    price: number;
}

interface CardProps {
    item: Product[];
}

const Card: React.FC<CardProps> = ({ item }) => {

    return (
        <div className='container__cards'>
            <div className="row">
                {item.map((val) => (
                    <Link key={val.id} to={`/product/${val.id}`} className="product">
                    <div  className='product'>
                        <div className="top__card">
                            <FaShoppingBasket className="panier" />
                        </div>
                        <div className="body__card">
                            <div>
                                <img src={val.image} alt="Produits alimentaires" />
                            </div>
                        </div>
                        <div className="footer__card">
                            <div className="top">
                                <div className="price">
                                    <h3>
                                        {val.titre} (kg)
                                    </h3>
                                    <p>{val.price} F CFA</p>
                                </div>
                            </div>
                            <button type="button">
                                Achetez
                            </button>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Card;
