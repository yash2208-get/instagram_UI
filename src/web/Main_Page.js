import { Link } from "react-router-dom";
import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../Context_API/AuthContext';
import Store_add from './Store_add';

import Input_box from './Input_box';
import Navbar from "./Navbar";
import "./CSS/Style.css";
function Main_Page() {
  let cuser = useContext(AuthContext)
  return (
    <>
      {cuser == null ? <div>
        <section className="page_404">
      <div className="container">
      <div className="row">	
      <div className="col-sm-12 ">
      <div className="col-sm-10 col-sm-offset-1  text-center">
      <div className="four_zero_four_bg">
        {/* <h1 className="text-center">555</h1> */}
      
      
      </div>
      
      <div className="contant_box_404">
      <h3 className="h2">
      Plase Login from
      </h3>
      
      {/* <p>the page you are looking for not avaible!</p> */}
      
      <Link to="/" className="link_404">Login</Link>
    </div>
      </div>
      </div>
      </div>
    </div>
  </section>
      </div> :
        <div>
          <Navbar></Navbar>
          <Store_add></Store_add>
          <Input_box></Input_box>
          
        </div>
      }
    </>
  )
}
export default Main_Page