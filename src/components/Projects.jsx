import { Suspense } from "react";
import { Carousel } from "@mantine/carousel";
import { MantineProvider } from "@mantine/core";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../Projects.css";
import { motion } from 'framer-motion';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loading from "./Loading";
import Logo from "../archilyas-logo.png"
import img1 from "../images/villa-1/hazir-2.webp"
import img2 from "../images/villa-1/hazir3.webp"
import img3 from "../images/villa-1/hazir-render2.webp"
import img4 from "../images/villa-1/hazir-render4.webp"

import hm1 from "../images/hamam-otagi/bath-hazir-1.jpg"
import hm2 from "../images/hamam-otagi/bath-hazir-2.jpg"
import hm3 from "../images/hamam-otagi/hazir-1.jpg"
import hm4 from "../images/hamam-otagi/render1.jpg"

import sf1 from "../images/sifaris-hamam/hazir-hamam.jpg"
import sf2 from "../images/sifaris-hamam/hazir2.jpg"

import yt1 from "../images/sifaris-yataq-otagi/hazir.jpg"
import yt2 from "../images/sifaris-yataq-otagi/hazir4.jpg"

import it1 from "../images/sifarisler-interyer-2/hazir-render 2.jpg"
import it2 from "../images/sifarisler-interyer-2/hazir-render 3.jpg"
import it3 from "../images/sifarisler-interyer-2/hazir-render.jpg"
import it4 from "../images/sifarisler-interyer-2/hazir-render1.jpg"
import it5 from "../images/sifarisler-interyer-2/haziriliq 2.jpg"

import iy1 from "../images/sifarisler-interyer-3/foto1.jpg"
import iy2 from "../images/sifarisler-interyer-3/foto2.jpg"
import iy3 from "../images/sifarisler-interyer-3/foto3.jpg"
import iy4 from "../images/sifarisler-interyer-3/foto4.jpg"
import iy5 from "../images/sifarisler-interyer-3/foto5.jpg"
import iy6 from "../images/sifarisler-interyer-3/foto6.jpg"
import iy7 from "../images/sifarisler-interyer-3/foto7.jpg"

import tr1 from "../images/interyer-3-temir-prosesi/1.jpeg"
import tr2 from "../images/interyer-3-temir-prosesi/2.jpeg"
import tr3 from "../images/interyer-3-temir-prosesi/3.jpeg"

import e1 from "../images/yataq-otagi-interyer/hazir343.jpg"
import e2 from "../images/yataq-otagi-interyer/hazr.jpg"
import e3 from "../images/yataq-otagi-interyer/yataq-otagi-hazir-2.jpg"
import e4 from "../images/yataq-otagi-interyer/yataq-otagi-hazir2.jpg"



export default function Project() {
  return (
    <MantineProvider>
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
      <Suspense fallback={<Loading/>}>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
        className="">
          <Carousel
            sx={{ maxWidth: 1080, marginTop:22 }}
            mx="auto"
            radius="sm"
            withIndicators
            height={"auto"}
            width={"auto"}
            styles={{
              indicator: {
                width: 12,
                height: 4,
                transition: "width 250ms ease",
                
                "&[data-active]": {
                  width: 70,
                },
              },
            }}
            >
            <Carousel.Slide className="p">
              <LazyLoadImage src={img1} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide>
              <LazyLoadImage src={img2} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide>
              <LazyLoadImage src={img3} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide>
              <LazyLoadImage src={img4} alt="img" />
            </Carousel.Slide>
            {/* ...other slides */}
          </Carousel>
          <br/>
          <br/>
          <br/>
          <Carousel
            sx={{ maxWidth: 1080, marginTop:22 }}
            mx="auto"
            radius="sm"
            withIndicators
            height={"auto"}
            width={"auto"}
            styles={{
              indicator: {
                width: 12,
                height: 4,
                transition: "width 250ms ease",
                
                "&[data-active]": {
                  width: 70,
                },
              },
            }}
            >
            <Carousel.Slide className="p">
              <LazyLoadImage src={hm1} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide>
              <LazyLoadImage src={hm2} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide>
              <LazyLoadImage src={hm3} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide>
              <LazyLoadImage src={hm4} alt="img" />
            </Carousel.Slide>
            {/* ...other slides */}
          </Carousel>
          <br/>
          <br/>
          <br/>
          <Carousel
            sx={{ maxWidth: 1080, marginTop:22 }}
            mx="auto"
            radius="sm"
            withIndicators
            height={"auto"}
            width={"auto"}
            styles={{
              indicator: {
                width: 12,
                height: 4,
                transition: "width 250ms ease",
                
                "&[data-active]": {
                  width: 70,
                },
              },
            }}
            >
            <Carousel.Slide className="p">
              <LazyLoadImage src={sf1} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide>
              <LazyLoadImage src={sf2} alt="img" />
            </Carousel.Slide>
            {/* ...other slides */}
          </Carousel>
          <br/>
          <br/>
          <br/>
          <Carousel
            sx={{ maxWidth: 1080, marginTop:22 }}
            mx="auto"
            radius="sm"
            withIndicators
            height={"auto"}
            width={"auto"}
            styles={{
              indicator: {
                width: 12,
                height: 4,
                transition: "width 250ms ease",
                
                "&[data-active]": {
                  width: 70,
                },
              },
            }}
            >
            <Carousel.Slide className="p">
              <LazyLoadImage src={yt1} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide>
              <LazyLoadImage src={yt2} alt="img" />
            </Carousel.Slide>
            {/* ...other slides */}
          </Carousel>
          <br/>
          <br/>
          <br/>
          <Carousel
            sx={{ maxWidth: 1080, marginTop:22 }}
            mx="auto"
            radius="sm"
            withIndicators
            height={"auto"}
            width={"auto"}
            styles={{
              indicator: {
                width: 12,
                height: 4,
                transition: "width 250ms ease",
                
                "&[data-active]": {
                  width: 70,
                },
              },
            }}
            >
            <Carousel.Slide className="p">
              <LazyLoadImage src={it1} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide>
              <LazyLoadImage src={it2} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide>
              <LazyLoadImage src={it3} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide>
              <LazyLoadImage src={it4} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide>
              <LazyLoadImage src={it5} alt="img" />
            </Carousel.Slide>
          </Carousel>
          <br/>
          <br/>
          <br/>
          <Carousel
            sx={{ maxWidth: 1080, marginTop:22 }}
            mx="auto"
            radius="sm"
            withIndicators
            height={"auto"}
            width={"auto"}
            styles={{
              indicator: {
                width: 12,
                height: 4,
                transition: "width 250ms ease",
                
                "&[data-active]": {
                  width: 70,
                },
              },
            }}
            >
            <Carousel.Slide className="p">
              <LazyLoadImage src={iy1} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide className="p">
              <LazyLoadImage src={iy2} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide className="p">
              <LazyLoadImage src={iy3} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide className="p">
              <LazyLoadImage src={iy4} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide className="p">
              <LazyLoadImage src={iy5} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide className="p">
              <LazyLoadImage src={iy6} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide className="p">
              <LazyLoadImage src={iy7} alt="img" />
            </Carousel.Slide>
          </Carousel>
          <br/>
          <br/>
          <br/>
          <Carousel
            sx={{ maxWidth: 1080, marginTop:22 }}
            mx="auto"
            radius="sm"
            withIndicators
            height={"auto"}
            width={"auto"}
            styles={{
              indicator: {
                width: 12,
                height: 4,
                transition: "width 250ms ease",
                
                "&[data-active]": {
                  width: 70,
                },
              },
            }}
            >
            <Carousel.Slide className="p">
              <LazyLoadImage src={tr1} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide className="p">
              <LazyLoadImage src={tr2} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide className="p">
              <LazyLoadImage src={tr3} alt="img" />
            </Carousel.Slide>
          </Carousel>
          <br/>
          <br/>
          <br/>
          <Carousel
            sx={{ maxWidth: 1080, marginTop:22 }}
            mx="auto"
            radius="sm"
            withIndicators
            height={"auto"}
            width={"auto"}
            styles={{
              indicator: {
                width: 12,
                height: 4,
                transition: "width 250ms ease",
                
                "&[data-active]": {
                  width: 70,
                },
              },
            }}
            >
            <Carousel.Slide className="p">
              <LazyLoadImage src={e1} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide className="p">
              <LazyLoadImage src={e2} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide className="p">
              <LazyLoadImage src={e3} alt="img" />
            </Carousel.Slide>
            <Carousel.Slide className="p">
              <LazyLoadImage src={e4} alt="img" />
            </Carousel.Slide>
          </Carousel>
          <Footer/>
        </motion.div>
      </Suspense>
    </ MantineProvider>
  );
}
