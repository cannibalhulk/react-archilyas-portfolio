import defineConfig from "../client.js";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Blog.css";

export default function Blog() {
  const [blogData, setBlog] = useState(null);
  let PROJECT_ID = "wt0rn5to";
  let DATASET = "production";
  let QUERY = encodeURIComponent(`*[_type == "post"]{
    title,
    slug,
    mainImage{
        asset->{
            _id,
            url
        },
        alt
    }
}`);  
let PROJECT_URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
  useEffect(() => {
    defineConfig
      .fetch(PROJECT_URL)
      .then((data) => setBlog(data))
      .catch(console.error);
  }, []);

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

      <main>
        <section>
          <h1>Blog Post Page</h1>
          <h2>Welcome to my blog page</h2>
          <div>
            {blogData && blogData.map((post, index) => (
                <article>
                  <Link
                    to={"/blog/" + post.slug.current}
                    key={post.slug.current}
                  >
                    <span key={index}>
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                      />
                      <span>
                        <h3>{post.title}</h3>
                      </span>
                    </span>
                  </Link>
                </article>
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}
