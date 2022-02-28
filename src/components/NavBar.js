import './styles/navbar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

const Navbar = ()=>{
    return(
        <nav className="navBar">
            <div className="divLogo">
                <Link to="/"> <img src="/images/logonegro.png" className="logoNav" alt="logo"/> </Link>
            </div>
            <div className="menu">
                <ul className="menuLista">
                    <Link to="/category/carteras"><li className="itemLista">Carteras</li></Link>
                    <Link to="/category/bandoleras"><li className="itemLista">Bandoleras</li></Link>
                    <Link to="/category/mochilas"><li className="itemLista">Mochilas</li></Link>
                </ul>
            </div>
            <div>
                <CartWidget  />
            </div>
        </nav>
    );
};



export default Navbar