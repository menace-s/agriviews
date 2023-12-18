import { useParams } from "react-router-dom";
import WelcomeDetails from "./WelcomeDetails";

const ProductPage: React.FC = () => {
  const { id } = useParams();

  return (

    <>
    <WelcomeDetails/>
      <div className="alone__product">
        <div className="box__img"></div>
      Page du produit avec l'ID {id}
      </div>
    </>
  )
};

export default ProductPage;
