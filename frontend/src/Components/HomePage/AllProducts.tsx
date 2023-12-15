import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ProductsBox from "./ProductsBox";
import "../../styles/Components/NavBar/ProductsBox/style.css";

interface Product {
  id: string;
  price: number;
  unit: string;
  description: string;
}

const generateId = () => uuidv4();

const AllProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    { id: generateId(), price: 300, unit: "(kg)", description: "Lorem ipsum dolor sit." },
    { id: generateId(), price: 100, unit: "(kg)", description: "Lorem ipsum dolor sit." },
    { id: generateId(), price: 100, unit: "(kg)", description: "Lorem ipsum dolor sit." },
    { id: generateId(), price: 100, unit: "(kg)", description: "Lorem ipsum dolor sit." },
    { id: generateId(), price: 100, unit: "(kg)", description: "Lorem ipsum dolor sit." },
    { id: generateId(), price: 100, unit: "(kg)", description: "Lorem ipsum dolor sit." },
    { id: generateId(), price: 100, unit: "(kg)", description: "Lorem ipsum dolor sit." },
    { id: generateId(), price: 100, unit: "(kg)", description: "Lorem ipsum dolor sit." },
  ]);

  return (
    <div className="allproducts">
      {products.map((product) => (
        <ProductsBox
          key={product.id}
          id={product.id}
          price={product.price}
          unit={product.unit}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default AllProducts;
