import React, { useState } from 'react'
import "./CSS/Style.css";
const Post_add = () => {
    let [playing,setPlaying]=useState(false);
    return (
        <>
            <section class="main" id='main'>
                <div class="wrapper">
                    <div class="left-col">
                        <div class="post">
                            <div class="info">
                                <div class="user">
                                    <div class="profile-pic">

                                        <img src={"https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"} alt="" /></div>
                                    <p class="username">modern_web_channel</p>
                                </div>
                                <img src={"img/option.PNG"} class="options" alt="" />
                            </div>
                            <video class="post-image" onMouseOver={(e)=>{
                                if(playing){
                                    e.currentTarget.pause();
                                    setPlaying(false)
                                }
                                else{
                                    e.currentTarget.play();
                                    setPlaying(true)
                                }
                            }}
                            
                            >
                                            <source src="./video/p1.mp4" type="video/mp4" />
                                            <source src="movie.ogg" type="video/ogg" />
                                        </video>
                            <div class="post-content">
                                <div class="reaction-wrapper">
                                    <img src={"img/like.PNG"} class="icon" alt="" />
                                    <img src={"img/comment.PNG"} class="icon" alt="" />
                                    <img src={"img/send.PNG"} class="icon" alt="" />
                                    <img src={"img/save.PNG"} class="save icon" alt="" />
                                </div>
                                <p class="likes">1,012 likes</p>
                                <p class="description"><span>username </span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?</p>
                                <p class="post-time">2 minutes ago</p>
                            </div>
                            <div class="comment-wrapper">
                                <img src={"img/like.PNG"} class="icon" alt="" />
                                <input type="text" class="comment-box" placeholder="Add a comment" />
                                <button class="comment-btn">post</button>
                            </div>
                        </div>
                        <div class="post">
                            <div class="info">
                                <div class="user">
                                    <div class="profile-pic"><img src={"https://images.unsplash.com/photo-1513721032312-6a18a42c8763?w=152&h=152&fit=crop&crop=faces"} alt="" /></div>
                                    <p class="username">modern_web_channel</p>
                                </div>
                                <img src={"img/like.PNG"} class="options" alt="" />
                            </div>
                            <img src={"https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=500&fit=crop"} class="post-image" alt="" />
                            <div class="post-content">
                                <div class="reaction-wrapper">
                                    <img src={"img/like.PNG"} class="icon" alt="" />
                                    <img src={"img/like.PNG"} class="icon" alt="" />
                                    <img src={"img/like.PNG"} class="icon" alt="" />
                                    <img src={"img/like.PNG"} class="save icon" alt="" />
                                </div>
                                <p class="likes">1,012 likes</p>
                                <p class="description"><span>username </span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur tenetur veritatis placeat, molestiae impedit aut provident eum quo natus molestias?</p>
                                <p class="post-time">2 minutes ago</p>
                            </div>
                            <div class="comment-wrapper">
                                <img src="img/smile.PNG" class="icon" alt="" />
                                <input type="text" class="comment-box" placeholder="Add a comment" />
                                <button class="comment-btn">post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Post_add