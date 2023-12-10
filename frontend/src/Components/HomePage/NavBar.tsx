import { Link } from "react-router-dom"
import '../../styles/Components/NavBar/style.css'
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsBasket } from "react-icons/bs";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";



const NavBar = () => {

    const [mobile, setMobile] = useState(false)

    return (
        <header className="nav-container">
            <div className="nav-content">
                <nav className="nav-container">
                    <Link to="/home" className="logo">AgriDigital</Link>
                    <ul className={mobile ? " mobile-menu-links" : "ul"} onClick={() => setMobile(false)}>
                        <li>
                            <Link to="/home" className="hover:text-orange transition-colors links">Acceuil</Link>
                        </li>
                        <li>
                            <Link to="/products" className="hover:text-orange transition-colors links">Produits</Link>
                        </li>
                        <li>
                            <Link to="/agriviews" className="hover:text-orange transition-colors links">Agriviews</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-orange transition-colors links">Contacts</Link>
                        </li>
                    </ul>
                    <div className="box-full">
                        <div className="icons">
                            <Link to=""><IoSearchOutline /></Link>
                            <Link to=""><FaRegHeart /></Link>
                            <div className="info">
                                <h4 className="info-bule">00</h4>
                                <BsBasket />
                            </div>
                        </div>
                        <div className="profil">
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsfGVufDB8fDB8fHww" alt="Image de profil" className="img" />
                        </div>
                    </div>
                    <div className="mobile-menu" onClick={() => setMobile(!mobile)}>
                        {
                            mobile ? <RxCross2 /> : <IoMenu />
                        }

                    </div>
                </nav>
            </div>
        </header>
    )
}

export default NavBar
