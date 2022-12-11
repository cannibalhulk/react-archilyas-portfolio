import {Link } from "react-router-dom";
import '../Navbar.css';
import '../scrollnavbar.js'


export default function Navbar() {
  return (
    <nav id="navbar" className="navbar">
      <div className="navbar-overlay" onClick={()=>{
            const toggleMenuOpen = () => document.body.classList.toggle("open");
            toggleMenuOpen();
        }}></div>

      <button type="button" className="navbar-burger" onClick={()=>{
            const toggleMenuOpen = () => document.body.classList.toggle("open");
            toggleMenuOpen();
        }}>
        <span className="material-icons">menu</span>
      </button>
      <Link to="/">
        <a>
            <img src={require("../archilyas-logo.png")} alt="logo" />
        </a>
      </Link>
      
      <nav className="navbar-menu">
        <Link to="/">
            <a>
                <button type="button" className="active">
                    Ana Səhifə
                </button>
            </a>
        </Link>
        <Link to="/#haqqimda">
            <a href="#haqqimda">
                <button type="button">Haqqımda</button>
            </a>
        </Link>
        <Link to="/layiheler">
            <a>
                <button type="button">Layihələr</button>
            </a>
        </Link>
        <Link to="/blog">
            <a>
                <button type="button">Blog</button>
            </a>
        </Link>
        <Link to="/elaqe">
            <a>
                <button className="contact-me" type="button">
                    Əlaqə
                </button>
            </a>
        </Link>  
      </nav>
    </nav>
  );
}
