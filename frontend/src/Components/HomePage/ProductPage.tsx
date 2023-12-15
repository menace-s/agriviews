import { useParams } from "react-router-dom";

const ProductPage: React.FC = () => {
  const { id } = useParams();

  return <div>Page du produit avec l'ID {id}</div>;
};

export default ProductPage;
