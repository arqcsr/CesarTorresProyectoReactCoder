import './styles/navbar.css';
import Logo from './images/logonegro.png';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = ()=>{
    return(
        <nav className="navBar">
            <div className="divLogo">
                <Link to="/"> <img src={Logo} className="logoNav" alt="logo"/> </Link>
            </div>
            <div className="menu">
                <ul className="menuLista">
                    <Link to="/category/2"><li className="itemLista">Carteras</li></Link>
                    <Link to="/category/1"><li className="itemLista">Bandoleras</li></Link>
                    <Link to="/category/3"><li className="itemLista">Mochilas</li></Link>
                </ul>
            </div>
            <div>
                <CartWidget  />
            </div>
        </nav>
    );
};



export default Navbar