import "../../styles/Components/NavBar/ProductsWelcome/style.css"
import videoBg from "../../assets/videos/presentation.mp4"
import { FiSearch } from "react-icons/fi";


const ProductsWelcome = () => {
  return (
    <div className="products__welcome">
    <div className="box__video">
        <video src={videoBg} autoPlay muted loop/>
        <div className="box__content">
            <h1>Avec AgriDigital, </h1>
            <p className="welcome">Explorez notre gamme étendue de produits pour trouver ce que vous cherchez.</p>
            <form>
                <input type="text" name="" id="" placeholder="Recherchez un produit ici..." />
                <button title="button de recherche" type="submit"><FiSearch /></button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default ProductsWelcome
