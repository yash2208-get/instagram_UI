import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <div className="body">
                <nav className="navbar">
                    <div className="nav-wrapper">
                        <img src={"./img/instagram_logo.png"} className="brand-img" alt="" />
                        <input type="text" className="search-box" placeholder="search" />
                        <div className="nav-items">
                        <Link to="/Home"><img src={"./img/Home_icon.png"} className="icon" alt="" /></Link>
                            <img src={"./img/search.png"} className="icon" alt="" />
                            <img src={"./img/video.png"} className="icon" alt="" />
                            <img src={"./img/like.png"} className="icon" alt="" />
                            <Link to="/profile"><img src={"./img/user.png"} className="icon" alt="" /></Link>
                            <div className="icon user-profile"></div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar