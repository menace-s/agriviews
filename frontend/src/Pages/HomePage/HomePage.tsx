import NavBar from "../../Components/HomePage/NavBar";
import Button from '../../Components/HomePage/Button'
import SectionHome from "../../Components/HomePage/SectionHome"
import Vitrines from "../../Components/HomePage/Vitrines";
import Objectifs from "../../Components/HomePage/Objectifs";
import Equipes from "../../Components/HomePage/Equipes";
import Footer from "../../Components/HomePage/Footer";

const HomePage = () => {
  return (
    <div className="home-container">
      <NavBar />
      <SectionHome/>
     <Button title="Catégories"/>
     <Vitrines/>
     <Button title="Objectifs"/>
     <Objectifs/>
     <Button title="Equipes"/>
     <Equipes/>
     <Footer/>
    </div>
  )
}

export default HomePage
