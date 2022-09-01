// hrd@pepcoding.com
import React, { useContext } from 'react';
import Main_Page from './web/Main_Page';
// import Contact_Page from './web/Contact_Page';
// import About_Page from './web/About_Page';
import {BrowserRouter,Routes,Route,Redirect} from 'react-router-dom'
import Sigin_Page from './web/Sigin_Page';
import Login_Page from './web/Login_Page';
import My_Profile from './web/My_Profile';
import { AuthContextProvider } from './Context_API/AuthContext';
function App() {
  return (
    <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login_Page/>}/>
        <Route path="/sigin" element={<Sigin_Page/>}/>
        <Route path="/profile" element={<My_Profile/>}/>
        <Route path="/Home" element={<Main_Page></Main_Page>}/>
      </Routes>
    </BrowserRouter>
   </AuthContextProvider>
  );
}
export default App;
