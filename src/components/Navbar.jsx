import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'
// import { SearchIcon } from '@mui/icons-material/Search';
// import {IoIosApps} from 'react-icons/fa'



function Navbar() {

    const [menuActive, setMenuActive ] = useState(false)

    const navLinks = [
        {
            title: 'Home',
            path: '/'

        },
        {
            title: 'blog',
            path: '/blog' 
        },
        {
            title: 'Advices',
            path: '/Advices'
        }
    ]
    return (
        <div>
            <nav className="navbar">

                {/* front and back arrows*/}
                <span> my spot</span><br/>

                <div className="search-box">
                    <input type="" id="" placeholder=""/>
                    {/* <i class="fa fa-search" aria-hidden="true"></i> */}
                    {/* <ion-icon ClassName="search"></ion-icon>
                    <IoIosApps/> */}
                    {/* <SearchIcon></SearchIcon> */}
                    {/* <button type="">search</button>  */}
                </div>

                <div className={`menu-container {${menuActive} && 'active}`}> 
                    <ul>
                        { navLinks.map((link,index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <ion-icon className="menu-container" onClick={() => setMenuActive(!menuActive)}>X</ion-icon>

            </nav>            
        </div>
    )
}

export default Navbar
