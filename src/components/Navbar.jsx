import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
// import { SearchIcon } from '@mui/icons-material/Search';
// import {IoIosApps} from 'react-icons/fa'
import MenuIcon from '@mui/icons-material/Menu';



function Navbar() {

    const [menuActive, setMenuActive ] = useState(false)
    const [menuToggle, setMenuToggle ] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth > 425) {
                setMenuActive(true);
                setMenuToggle(false)
            } else {
                setMenuActive(false)
            }
        }
        window.addEventListener("resize", handleResize);
        return()=> {
        window.removeEventListener("resize", handleResize);
        }
    }, [])

    const navLinks = [
        {
            title: 'Home',
            path: '/'

        },
        {
            title: 'write a blog',
            path: '/Form' 
        },
        // {
        //     title: 'Advices',
        //     path: '/Advices'
        // }
    ]
    return (
        <div>

               
                <MenuIcon className="menu-icon" onClick={() => setMenuToggle(!menuToggle)}/>
            <nav className="navbar" style={{ display: menuActive || menuToggle ? "flex" : "none"}}>
                {/* front and back arrows*/}
                <span> my spot</span><br/>

                <div className={`menu-container {${menuActive} && 'active}`}> 
                    <ul>
                        { navLinks.map((link,index) => (
                            <li key={index}>
                                <Link to={link.path}>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

              
               

            </nav>            
        </div>
    )
}

export default Navbar
