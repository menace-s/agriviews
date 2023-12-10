import { Link } from "react-router-dom"
import "../../styles/Components/NavBar/Footer/style.css"
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer__container">
            <div className="full__box">
                <div className="item box_1">
                    <h3>AgriDigital</h3>
                    <p className="descript">
                        Lorem, ipsum dolor.<br/>
                        Nobis, saepe. Repellendus.<br/>
                        Eveniet, eum quae.
                    </p>
                    <div className="icons">
                        <Link to="#"><FaFacebook  /></Link>
                        <Link to="#"><CiInstagram /></Link>
                        <Link to="#"><FaTwitter /></Link>
                        <Link to="#"><FaTiktok /></Link>
                    </div>
                </div>
                <div className="item box_2">
                    <h3 className="foot">AgriDigital</h3>
                    <Link to="#" className="foot__para">A propos</Link>
                    <Link to="#" className="foot__para">Notre équipe</Link>
                </div>
                <div className="item box_3">
                    <h3 className="foot">Aides</h3>
                    <Link to="#" className="foot__para">Service client</Link>
                    <Link to="#" className="foot__para">Détail de la livraison</Link>
                    <Link to="#" className="foot__para">termes et conditions</Link>
                    <Link to="#" className="foot__para">Politique de confidentialité</Link>
                </div>
                <div className="item box_4">
                    <h3 className="foot">Ressources</h3>
                    <Link to="#" className="foot__para">Tutoriel de développement</Link>
                    <Link to="#" className="foot__para">Comment faire-blog</Link>
                </div>
            </div>
            <div className="copyright">
                <p>© 2024 - Tous les droits réservés par AgriDigital</p>
            </div>
        </div>
    )
}

export default Footer
