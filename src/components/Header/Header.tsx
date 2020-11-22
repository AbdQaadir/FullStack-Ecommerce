import React from 'react';
import {Link} from 'react-router-dom';
import { HeaderDiv } from './Header.styles';

function Header() {
    return (
        <HeaderDiv>
            <p>brand</p>
            <nav>
                <ul>
                    <li><Link to="/">Shop</Link></li>
                    <li><Link to="/">Footwears</Link></li>
                    <li><Link to="/">BackPacks</Link></li>
                    <li><Link to="/">Faq</Link></li>
                    <li><Link to="/">About</Link></li>
                </ul>
            </nav>
            <button>My Account</button>
        </HeaderDiv>
    )
}

export default Header
