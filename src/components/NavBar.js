import './styles/navbar.css';
import Logo from './images/logonegro.png';
import CartWidget from './CartWidget';

const Navbar = ()=>{
    return(
        <nav className="navBar">
            <div className="divLogo">
                <img src={Logo} className="logoNav" alt="logo"/>
            </div>
            <div className="menu">
                <ul className="menuLista">
                    <li className="itemLista">Carteras</li>
                    <li className="itemLista">Bandoleras</li>
                    <li className="itemLista">Mochilas</li>
                </ul>
            </div>
            <div className="cart">
                <CartWidget  />
            </div>
        </nav>
    );
};

export default Navbar