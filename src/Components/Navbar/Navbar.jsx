import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/Assets/logo.png';
import cart_icon from '../Assets/Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { UserContext } from '../../Context/userContext'; // Import the UserContext

export const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalCartItems } = useContext(ShopContext);
    const { user,logout } = useContext(UserContext); // Use the UserContext

    return (
        <div className='navbar'>
            <div className="navlogo">
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link> {menu === "shop" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : <></>} </li>
                <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : <></>} </li>
            </ul>
            <div className="nav-login-cart">
                
                {user ? (
                    <>
                    
                    <div className="nav-username"  >Welcome, {user.name}</div>
                    <button type="button" onClick={logout}>Logout</button>
                    </>

                    
                ) : (
                    <Link style={{ textDecoration: 'none' }} to='/login'>
                        <button>Login</button>
                    </Link>
                )}
                <Link style={{ textDecoration: 'none' }} to='/cart'>
                    <img src={cart_icon} alt="" />
                </Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    );
};
