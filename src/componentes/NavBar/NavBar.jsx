import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
        <Link to="/">
          <h1>Geek N  Resin </h1>
        </Link>

        <nav>
            <ul>
                <li> 
                    <NavLink to="/categoria/2"> Posa Vasos </NavLink>
                </li>

                <li>  
                    <NavLink to="/categoria/3"> Otros </NavLink>
                </li>
                
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar