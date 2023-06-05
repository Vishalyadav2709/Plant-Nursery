import React, { Component } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';

import './header.css'




export class Header  extends Component {
    
  

    state = {
        toggle: false
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }
    setActiveLink = e => {
        // easier for me, you can change with getElementById or getElementByClassName
        const links = document.getElementsByTagName("Link"); 
    
        Array.from(links).forEach(el => el.classList.remove("aactive"));
        e.target.classList.add("aactive");
     
      };
      

    render() {
        const {toggle} = this.state;

        
       
        return (
            <header>
                <div className="menu" onClick={this.menuToggle}>
                   <MenuIcon></MenuIcon>
                </div>
                <div className="logo">
                    <h1><Link to="/" >Plant-Wonders🌳 </Link></h1>
                </div>
                <nav>
                    <ul className={toggle ? "toggle" : ""}>
                        <li ><Link to="/" onClick={this.setActiveLink} >H😄me</Link></li>
                        <li><Link to="/about" onClick={this.setActiveLink}>About</Link></li>
                        <li><Link to="/contact" onClick={this.setActiveLink}>Contact</Link></li>
                        <li><Link to="/productss" onClick={this.setActiveLink}> Plants</Link></li>
                        <li><Link to="/login" onClick={this.setActiveLink}>Logout</Link></li>
                      


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

export default Header