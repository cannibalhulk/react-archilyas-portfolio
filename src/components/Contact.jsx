import Footer from "./Footer";
import { Link } from "react-router-dom";
import "../Contact.css";
import { motion } from 'framer-motion';
import Logo from "../archilyas-logo.png"


export default function Contact() {
  return (
    <div>
      <nav id="navbar" className="navbar-b">
        <div
          className="navbar-overlay"
          onClick={() => {
            const toggleMenuOpen = () => document.body.classList.toggle("open");
            toggleMenuOpen();
          }}
        ></div>

        <button
          type="button"
          className="navbar-burger"
          onClick={() => {
            const toggleMenuOpen = () => document.body.classList.toggle("open");
            toggleMenuOpen();
          }}
        >
          <span className="material-icons">menu</span>
        </button>
        <Link to="/">
          <a>
            <img src={Logo} alt="logo" />
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
      <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}>
        <section className="form-section">
          <div className="wrapper">
            <h2>
              Əlaqə Formu
              <span>
                <i className="fa-solid fa-file-circle-check"></i>
              </span>
            </h2>
            <form action="https://formspree.io/f/xlevdzbr" method="POST">
              <div className="dbl-field">
                <div className="field field-1">
                  <input
                    name="name"
                    id="name"
                    type="text"
                    placeholder="Adınız"
                    required
                  />
                </div>
                <div className="field">
                  <input
                    name="surname"
                    id="surname"
                    type="text"
                    placeholder="Soyadınız"
                    required
                  />
                </div>
              </div>
              <div className="dbl-field">
                <div className="field field-1">
                  <input
                    name="phone"
                    id="phone"
                    type="text"
                    placeholder="Nömrəniz"
                    required
                  />
                </div>
                <div className="field">
                  <input
                    name="email"
                    id="email"
                    type="text"
                    placeholder="E-poçtunuz"
                    required
                  />
                </div>
              </div>
              <div className="message">
                <textarea placeholder="Mesajınız" required></textarea>
              </div>
              <div className="button-area">
                <button type="Submit">
                  Göndər <i className="fa-sharp fa-solid fa-paper-plane"></i>
                </button>
              </div>
            </form>
          </div>
        </section>
        <button id="topBtn">
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </motion.main>
      <Footer />
    </div>
  );
}
