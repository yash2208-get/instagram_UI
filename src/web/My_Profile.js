import React, { useEffect, useState } from 'react'
import { db } from '../firebase';
import { doc, getDoc } from "firebase/firestore";
import { AuthContext } from '../Context_API/AuthContext';
import { useContext } from 'react';
import Store_add from './Store_add';
import "./CSS/Profile.css"
import Navbar from './Navbar';
// import { async } from '@firebase/util';
function My_Profile() {
    let cUser = useContext(AuthContext);
    let [loading, setLoading] = useState(true)
    let [user, setUser] = useState(null);
    useEffect(function fn() {
        (async function () {
            if (cUser) {
                const docRef = doc(db, "users", cUser.uid);
                const userObj = await getDoc(docRef);
                setUser(userObj.data());
                setLoading(false);
            }
        })()
    }, [cUser])
    return (
        <>
            {loading == true ? <div><img className='img_laoding' src={"./img/instagram-logo.gif"}></img> </div> :
                <div>
                <Navbar></Navbar>
                    <header>
                        <div className="container">
                            <div className="profile">
                                <div className="profile-image">
                                    <img src="https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces" alt="" />
                                </div>
                                <div className="profile-user-settings">
                                    <h1 className="profile-user-name">{user.Username}</h1>

                                    <button className="btn profile-edit-btn">Edit Profile</button>

                                    <button className="btn profile-settings-btn" aria-label="profile settings"><i className="fas fa-cog" aria-hidden="true"></i></button>

                                </div>

                                <div className="profile-stats">

                                    <ul>
                                        <li><span className="profile-stat-count">164</span> posts</li>
                                        <li><span className="profile-stat-count">188</span> followers</li>
                                        <li><span className="profile-stat-count">206</span> following</li>
                                    </ul>

                                </div>

                                <div className="profile-bio">

                                    <p><span className="profile-real-name">Jane Doe</span> Lorem ipsum dolor sit, amet consectetur adipisicing elit 📷✈️🏕️</p>

                                </div>
                            </div>
                        </div>
                    </header>
                    <Store_add/>
                    <main>

                        <div className="container">

                            <div className="gallery">

                                <div className="gallery-item" tabindex="0">

                                    <img src="https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop" className="gallery-image" alt="" />

                                    <div className="gallery-item-info">

                                        <ul>
                                            <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
                                            <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                                        </ul>

                                    </div>

                                </div>
                                <div className="gallery-item" tabindex="0">

                                    <img src="https://images.unsplash.com/photo-1497445462247-4330a224fdb1?w=500&h=500&fit=crop" className="gallery-image" alt="" />

                                    <div className="gallery-item-info">

                                        <ul>
                                            <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
                                            <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                                        </ul>

                                    </div>

                                </div>
                                <div className="gallery-item" tabindex="0">

                                    <img src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop" className="gallery-image" alt="" />

                                    <div className="gallery-item-info">

                                        <ul>
                                            <li className="gallery-item-likes"><span className="visually-hidden">Likes:</span><i className="fas fa-heart" aria-hidden="true"></i> 56</li>
                                            <li className="gallery-item-comments"><span className="visually-hidden">Comments:</span><i className="fas fa-comment" aria-hidden="true"></i> 2</li>
                                        </ul>

                                    </div>

                                </div>
                            </div>
                            <div className="loader"></div>
                        </div>
                    </main>
                </div>
            }
        </>
    )
}
export default My_Profile