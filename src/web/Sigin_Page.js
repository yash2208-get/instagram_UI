import { Link } from "react-router-dom";
import React, { useState } from 'react'
import { auth,db } from '../firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc  } from "firebase/firestore";
import "./CSS/Login.css"
const Sigin_Page = () => {
    const [email,setEmail]=useState("");
    const [passsw,setPassword]=useState("");
    const [Username,setUserName]=useState("");
    const [phone,setPhone]=useState();
    const [Usert,setUser]=useState(null);
    const [loard,setLoard]=useState(false);
    const [error,setError]=useState("");
    const Button_Click=async function(){
        try
        {
            setLoard(true);
            let  userCard= await createUserWithEmailAndPassword(auth,email,passsw);
            await setDoc(doc(db,"users",userCard.user.uid),{
                email,
                Username,
                phone,
                relids:[],
                profileimg:"",
                userId:userCard.user.uid
            });

        }catch(err){
            setError(err.message);
            setTimeout(()=>{
                setError(" ");
            },4000)
        }
        setLoard(false);
    }
    return (
        <>
            <div className="Contact">
                <div className="wrapper1">
                    <header><img src={"./img/instagram_logo.png"}></img>
                    <p>
                    Sign up to see photos and videos from your friends.

                    </p>
                    </header>
                    {
                                error != "" ? <h5>Error is {error}</h5>:loard==true? <h4>....Loading</h4>:Usert != null ? <h4> User is {Usert.uid}</h4> :
                            <>
                    <form>
                        <div className="field email">
                            <div className="input-area">
                                <input type="email" placeholder="Email Address" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                                <i className="icon fas fa-envelope"></i>
                                <i className="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                            <div className="error-txt"></div>
                        </div>
                        <div className="field email">
                            <div className="input-area">
                                <input type="text" placeholder="Full Name" onChange={(e)=>{setUserName(e.target.value)}} value={Username} />
                                <i className="icon fas fa-user"></i>
                                <i className="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                            <div className=" error-txt"></div>
                        </div>
                        <div className="field email">
                            <div className="input-area">
                                <input type="number" placeholder="Phone Number" onChange={(e)=>{setPhone(e.target.value)}} value={phone} />
                                <i className="icon fas fa-phone"></i>
                                <i className="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                            <div className=" error-txt"></div>
                        </div>
                        <div className="field email">
                            <div className="input-area">
                                <input type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}} value={passsw} />
                                <i className="icon fas fa-lock"></i>
                                <i className="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                            <div className="error-txt"></div>
                        </div>
                        <div className="field password">
                            <div className="input-area">
                                <input type="password" placeholder="Confirm password" />
                                <i className="icon fas fa-lock"></i>
                                <i className="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                            <div className="error-txt"></div>
                        </div>
                        {/* <div className="pass-txt"><a href="#">Forgot password?</a></div> */}
                        <p className="Footer_pager">People who use our service may have uploaded your contact information to Instagram. Learn More</p>
                        <p className="Footer_pager">By signing up, you agree to our Terms , Privacy Policy and Cookies Policy .</p>
                        <input type="button" value="Sign up" onClick={Button_Click}/>
                    </form>
                    </>
                    }
                    <div className="sign-txt">Not yet member? <Link to="/">Login now</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Sigin_Page