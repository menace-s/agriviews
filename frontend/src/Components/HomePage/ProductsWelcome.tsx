import React, { useState } from "react";
import "../../styles/Components/NavBar/ProductsWelcome/style.css";
import videoBg from "../../assets/videos/presentation.mp4";
import { FiSearch } from "react-icons/fi";
import Data, { Product } from './../HomePage/Data';
import Card from './Card';




const ProductsWelcome: React.FC = () => {
  const [searchItem, setSearchItem] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<Product[]>([]);


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchItem(term);

    const filtered = Data.filter((item: Product) =>
      item.titre.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredItems(filtered);
  };

  return (
    <div className="products__welcome">
      <div className="box__video">
        <video src={videoBg} autoPlay muted loop />
        <div className="box__content">
          <h1>Avec AgriDigital, </h1>
          <p className="welcome">Explorez notre gamme étendue de produits pour trouver ce que vous cherchez.</p>
          <form>
            <input
              type="text"
              name="search"
              id="search"
              value={searchItem}
              onChange={handleSearchChange}
              placeholder="Recherchez un produit ici..."
            />
            <button title="button de recherche" type="submit"><FiSearch /></button>
          </form>
        </div>
      </div>
      {filteredItems.length > 0 && (
        <div className="search-results">
          <Card item={filteredItems} />
        </div>
      )}
    </div>
  );
};

export default ProductsWelcome;
