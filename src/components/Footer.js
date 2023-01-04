import {Link } from "react-router-dom";
import '../Footer.css';

export default function Footer(){
    return(
        <div>
            <footer>
                <div className="logo-socials">
                    <img src={require("../archilyas-logo.png")} alt="logo"/>
                    <div className="socials">
                        <a><i className="fa-brands fa-square-behance"></i></a>
                        <a href="https://www.instagram.com/ilysmmdli/"><i className="fa-brands fa-instagram"></i></a>
                        <a><i className="fa-brands fa-square-facebook"></i></a>
                    </div>
                </div>
                <div className="terms">
                    <ul>
                        <Link to="/">
                            <a><li>Ana Səhifə</li></a>
                        </Link>
                        <Link to="/#haqqimda">
                            <a><li>Haqqımda</li></a>
                        </Link>
                        <Link to="/layiheler">
                            <a><li>Layihələr</li></a>
                        </Link>
                        <Link to="/blog">
                            <a><li>Blog</li></a>
                        </Link>
                        <Link to="/elaqe">
                            <a><li>Əlaqə</li></a>
                        </Link>
                    </ul>
                </div>
                <div className="footer-contact">
                    <div className="email">
                        <i className="fa-solid fa-envelope"></i>
                        <a href="mailto:archilyas.design@gmail.com"><p>archilyas.design@gmail.com</p></a>
                    </div>
                    <div className="phone">
                        <i className="fa-solid fa-phone"></i>
                        <a href="tel:+994506702759"><p>+994 50 670 2759</p></a>
                    </div>
                    <div className="location">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>Baku,Azerbaijan</p>
                    </div>
                    <div className="footer-mobile-icons">
                        <a href="mailto:archilyas.design@gmail.com"><i className="fa-solid fa-envelope"></i></a>
                        <a href="tel:+994506702759"><i className="fa-solid fa-phone"></i></a>
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                </div>
            </footer>
            <div className="credit">
                <p>Copyright &copy; 2022-2023 Archilyas.com <br/><span>Made by <a target="_blank" rel="noreferrer"  href="https://www.github.com/Cannibalhulk">Shukur Huseynli</a></span></p>
            </div>
        </div>
    );
}