import React, { useEffect, useState } from 'react'
import "./CSS/Login.css"
import { Link } from "react-router-dom";
import { auth } from '../firebase';
import {signInWithEmailAndPassword, signOut,onAuthStateChanged} from "firebase/auth";
import { async } from '@firebase/util';
const Login_Page = () => {
    const [email,setEmail]=useState("");
    const [passsw,setPassword]=useState("");
    const [Usert,setUser]=useState(null);
    const [loard,setLoard]=useState(false);
    const [error,setError]=useState("");
    
    const Email_Click=(e)=>{
        setEmail(e.target.value);
    }
    const Password=(e)=>{
        setPassword(e.target.value)
    }
    const Logout= async function(){
        await signOut(auth);
        setUser(null);
    }
    const Button_Click = async function()
    {
        try
        {
            setLoard(true);
            let  userCard= await signInWithEmailAndPassword(auth, email,passsw);
            // console.log(userCard.user);
            setUser(userCard.user)
        }catch(err){
            setError(err.message);
            setTimeout(()=>{
                setError(" ");
            },4000)
        }
        setLoard(false);
    }
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
            //   const uid = user.uid;
              setUser(user);
              // ...
            } else {
                setUser(null);
            }
            
          });
    },[])
  return (
    <>
        <div className="Contact" id='Contact'>
                <div className="wrapper1">
                    <header><img src={"./img/instagram_logo.png"}></img>
                    </header>
                    {
                                error != "" ? <h5>Error is {error}</h5>:loard==true? <h4>....Loading</h4>:Usert != null ? <><h4> User is {Usert.uid}</h4> <button onClick={Logout}>Logout</button></>:
                            <>                   
                    <form>
                        <div className="field email">
                            <div className="input-area">
                                <input type="email" placeholder="Email Address" onChange={Email_Click} />
                                <i className="icon fas fa-envelope"></i>
                                <i className="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                            <div className="error-txt"></div>
                        </div>
                        
                        
                        <div className="field email">
                            <div className="input-area">
                                <input type="password" placeholder="Password" onChange={Password}/>
                                <i className="icon fas fa-lock"></i>
                                <i className="error error-icon fas fa-exclamation-circle"></i>
                            </div>
                            <div className="error-txt"></div>
                        </div>
                        
                        
                        <input type="button" value="Log In" onClick={Button_Click}/>
                    </form>
                    </>
                }
                    <div className="pass-txt"><a href="#">Forgot password?</a></div>
                    <div className="sign-txt">Not yet member? <Link to="/sigin">Sign Up</Link></div>
                </div>
            </div>
            
        
    </>
  )
}

export default Login_Page