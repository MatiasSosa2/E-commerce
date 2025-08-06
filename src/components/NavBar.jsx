import CartWidget from './CartWidget'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className="barra-navegacion">
      <div className="contenedor-barra">
        {/* Logo */}
        <div className="marca">
          <h2>LA PARRILLERÍA</h2>
        </div>
        
        {/* Links */}
        <ul className="menu-navegacion">
          <li className="item-navegacion">
            <a href="#" className="enlace-navegacion">Home</a>
          </li>
          <li className="item-navegacion">
            <a href="#" className="enlace-navegacion">Carnes</a>
          </li>
          <li className="item-navegacion">
            <a href="#" className="enlace-navegacion">Parrillas</a>
          </li>
          <li className="item-navegacion">
            <a href="#" className="enlace-navegacion">Accesorios</a>
          </li>
          <li className="item-navegacion">
            <a href="#" className="enlace-navegacion">Contacto</a>
          </li>
        </ul>
        
        {/* Carrito */}
        <CartWidget />
      </div>
    </nav>
  )
}

export default NavBar
