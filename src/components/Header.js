import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import HeaderImage from '../img/logo.svg'
function Header() {
    const [languages,setLanguages]= useState([]);
    setLanguages(["Tamil","Telugu"])
    console.log(languages);
    return <header className="header">
        <div className="header__wrap">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header__content">
                            <Link href="index.html" className="header__logo">
                                <img src={HeaderImage} alt="" />
                            </Link>
                          
                            <ul className="header__nav">
                                
                                <NavLink link="/languages" name="Languages" data={languages} />
                            </ul>
                            
                            {/* <div className="header__auth">
                                <button className="header__search-btn" type="button">
                                    <i className="icon ion-ios-search"></i>
                                </button>

                                <a href="signin.html" className="header__sign-in">
                                    <i className="icon ion-ios-log-in"></i>
                                    <span>sign in</span>
                                </a>
                            </div> */}

                            {/* <button className="header__btn" type="button">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button> */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
        {/* <form action="#" className="header__search">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="header__search-content">
                            <input type="text" placeholder="Search for a movie, TV Series that you are looking for" />

                                <button type="button">search</button>
                        </div>
                    </div>
                </div>
            </div>
        </form> */}
       
    </header>
}
export default Header;