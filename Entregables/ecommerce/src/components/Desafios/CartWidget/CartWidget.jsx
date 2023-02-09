import Carrito from '../../../assets/carrito.png';
import {Link} from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

export const CartWidget = ()=>{
    const {getTotalProducts, productCartList} = useContext(CartContext);

    return(
        <div>
            {
                productCartList.length>0 &&
                <>
                    <Link to="/cart">
                        <img src={Carrito} alt="mario" style={{width:20}}/>
                    </Link>
                    <span style={{backgroundColor: 'white', borderRadius:"50%", width:"10px", heigth:"10px", fontSize:"10px", color:"black"}}>
                        {getTotalProducts()}
                    </span>
                </>
            }
        </div>
    )
}