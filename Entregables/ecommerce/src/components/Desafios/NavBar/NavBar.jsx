import { CartWidget } from "../CartWidget/CartWidget"
import './NavBar.css';
import batman_logo from '../../../assets/batman_logo.jpg';
import {NavLink, Link} from 'react-router-dom';

export const Navbar = () =>{
    return(
        <nav className='nav-container'>
            <Link to="/">
                <div>
                    <img className="nav-brand" src={batman_logo} alt="logo"/>
                </div>
            </Link>
            <div className='navegacion'>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/">Inicio</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/the_office">The Office</NavLink>
                <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/dc">DC Comics</NavLink>
                       <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                 to="/productos/seleccion">Seleccion ARG</NavLink>
            </div>
            <div>
                <CartWidget/>
            </div>
        </nav>
    )
}
