import React from "react"
import logo from '../../assets/img/logo.png'

export default function Navbar() {
   return (
      <header>
         <nav className="navbar navbar-expand navbar-light bg-black">
            <div className="container-fluid">
               <div className="navbar-collapse">
                  <img src={logo} alt="logo" height={30} />
                  <ul className="navbar-nav me-auto mb-lg-0">
                     <li className="nav-item active">
                        <a className="nav-link text-white" aria-current="page" href="/">Home</a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link text-white" href="https://github.com/tizor98" rel="noreferrer" target="_blank">About Alberto Ortiz</a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   )
}
