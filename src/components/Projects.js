import { Carousel } from "@mantine/carousel";
import { MantineProvider } from "@mantine/core";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../Projects.css";

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
      <div className="">
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
            <img src={require("../images/villa-1/hazir-2.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={require("../images/villa-1/hazir3.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={require("../images/villa-1/hazir-render2.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={require("../images/villa-1/hazir-render4.jpg")} alt="img" />
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
            <img src={require("../images/hamam-otagi/bath-hazir-1.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={require("../images/hamam-otagi/bath-hazir-2.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={require("../images/hamam-otagi/hazir-1.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={require("../images/hamam-otagi/render1.jpg")} alt="img" />
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
            <img src={require("../images/sifaris-hamam/hazir-hamam.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={require("../images/sifaris-hamam/hazir2.jpg")} alt="img" />
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
            <img src={require("../images/sifaris-yataq-otagi/hazir.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={require("../images/sifaris-yataq-otagi/hazir4.jpg")} alt="img" />
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
            <img src={require("../images/sifarisler-interyer-2/hazir-render 2.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={require("../images/sifarisler-interyer-2/hazir-render 3.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={require("../images/sifarisler-interyer-2/hazir-render.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide>
            <img src={require("../images/sifarisler-interyer-2/hazir-render1.jpg")} alt="img" />
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
            <img src={require("../images/sifarisler-interyer-3/foto1.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide className="p">
            <img src={require("../images/sifarisler-interyer-3/foto2.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide className="p">
            <img src={require("../images/sifarisler-interyer-3/foto3.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide className="p">
            <img src={require("../images/sifarisler-interyer-3/foto4.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide className="p">
            <img src={require("../images/sifarisler-interyer-3/foto5.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide className="p">
            <img src={require("../images/sifarisler-interyer-3/foto6.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide className="p">
            <img src={require("../images/sifarisler-interyer-3/foto7.jpg")} alt="img" />
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
            <img src={require("../images/interyer-3-temir-prosesi/1.jpeg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide className="p">
            <img src={require("../images/interyer-3-temir-prosesi/2.jpeg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide className="p">
            <img src={require("../images/interyer-3-temir-prosesi/3.jpeg")} alt="img" />
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
            <img src={require("../images/yataq-otagi-interyer/hazir343.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide className="p">
            <img src={require("../images/yataq-otagi-interyer/hazr.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide className="p">
            <img src={require("../images/yataq-otagi-interyer/yataq-otagi-hazir-2.jpg")} alt="img" />
          </Carousel.Slide>
          <Carousel.Slide className="p">
            <img src={require("../images/yataq-otagi-interyer/yataq-otagi-hazir2.jpg")} alt="img" />
          </Carousel.Slide>
        </Carousel>
        <Footer/>
      </div>
    </ MantineProvider>
  );
}
