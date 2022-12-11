import Navbar from './Navbar.js'
import Footer from './Footer.js'
import {Link} from 'react-router-dom'
import logo from '../archilyas-logo.png'
import '../Home.css'
import  '../gsap/gsap.animate.js'


export default function Home(){
    return(
        <div>
            <Navbar/>
            <main>
                <div id="welcome" className="welcome">
                    <div className="welcome-flex">
                        <p>
                            <a href="tel:+994506702759"><i className="fa-solid fa-phone"></i>+994 50 670 2759</a>
                        </p>
                        <Link to="/">
                            <a>
                                <img className="logo" src={logo} alt="logo"/>
                            </a>
                        </Link>
                        
                        <p>
                            <a href="mailto:archilyas.design@gmail.com">
                                <i className="fa-solid fa-envelope"></i>archilyas.design@gmail.com
                            </a>
                        </p>
                    </div>
                    <p className="who">
                    <span className="p-1">Architect. </span>
                    <span className="p-2">Designer. </span>
                    <span className="p-3">Visualizator</span>
                    </p>
                </div>
                <section id="anaSehife">
                    <div className="home-h1">Güvənə biləcəyiniz keyfiyyət</div>
                    <Link to="/elaqe">
                        <a>
                            <div className="home-btn">
                                <p>Təklif al</p>
                            </div>
                        </a>
                    </Link>
                    
                </section>
                <section id="haqqimda">
                    <h1>Haqqımda</h1>
                    <div className="about-div">
                        <img src={require("../ilyas.png")} alt="ilyas"/>
                        <div className="about-text">Salam, mən <b><i>Azərbaycan Memarlıq İnşaat Universitetinin</i></b> 3-cü kurs tələbəsi, <u>İlyas Məmmədli</u>. İlk illərimdə dizayn kurslarını sertifikatla bitirərək bu işə atılmışam. Dəfələrlə sifariş layihələri götürüb müştərinin zövqü və istəklərinə uyğun dizaynı başa çatdırmışam.</div>
                    </div>
                </section>
                <section id="proyektlerim">
                    <h1>Layihələrim</h1>
                    <div className="project-div">
                        <img src={require('../images/sifarisler-interyer-2/hazir-render1.jpg')} alt="render"/>
                        <img src={require('../images/hamam-otagi/bath-hazir-1.jpg')} alt="render"/>
                        <img src={require('../images/sifarisler-interyer-3/foto2.jpg')} alt="render"/>
                        <img src={require('../images/yataq-otagi-interyer/yataq-otagi-hazir-2.jpg')} alt="render"/>
                        <div className="more-div">9+</div>
                    </div>
                    <Link to="/layiheler">
                        <a>
                            <div className="more-btn">Daha çox</div>
                        </a>
                    </Link>
                </section>
            </main>
            <Footer/>
        </div>
    )
    
}