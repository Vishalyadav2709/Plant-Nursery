import React, { Component } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';

import './header.css'




export class LoginHeader  extends Component {
    
  

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }
    myClick = () => {
        alert("Please Login First🙏");
    }

    render() {
        const {toggle} = this.state;

        
       
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                   <MenuIcon></MenuIcon>
                </div>
                <div className="logo">
                    <h1><Link to="/">Plant-Wonders🌳 </Link></h1>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""} >
                    <li onClick={this.myClick}><Link to="/login">Home</Link></li>
                        <li onClick={this.myClick}><Link to="/login" >About</Link></li>
                        <li onClick={this.myClick}><Link to="/login">Contact</Link></li>
                        <li><Link to="/adminlogin">Admin Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                       
                      


                        <li className="close" onClick={this.menuToggle}>
                           <CloseIcon></CloseIcon>
                        </li>
                    </ul>
                    <div className="nav-cart">
                       
                        <Link to="/cart">
                            <img src={ShoppingCartIcon} alt="" width="20"/>
                        </Link>
                    </div>
                </nav>
            </header>
        )
    }
}

export default LoginHeader