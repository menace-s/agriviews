import AllProducts from "../../Components/HomePage/AllProducts"
import ChoiceCategories from "../../Components/HomePage/ChoiceCategories"
import NavBar from "../../Components/HomePage/NavBar"
import ProductsWelcome from "../../Components/HomePage/ProductsWelcome"


const ProductsPage = () => {
  return (
    <>
        <NavBar/>
        <ProductsWelcome/>
        <ChoiceCategories/>
        <AllProducts/>
    </>
  )
}

export default ProductsPage
