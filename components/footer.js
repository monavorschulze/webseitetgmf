import React from "react";
import { LogoImage } from "@/data";

const Footer = () => {
  const { small } = LogoImage;
  return (
    <footer className="footer_1">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-sm-6 col-md-5">
            <aside className="widget aboutwidget">
              <a href="/">
                <img src={small} alt="" />
              </a>
              <p>
                Welcome to our place. Lorem ipsum is simply free
                text dolor sit amet consectetur adipisicing elit. Tempore
                corrupti temporibus fuga earum asperiores, alias excepturi sit
                mpedit fugit laudantium.
              </p>
            </aside>
          </div>
          <div className="col-lg-4 col-sm-4 col-md-4">
            <aside className="widget contact_widgets">
              <h3 className="widget_title">Kontakt</h3>
              <p>
                Siederstraße 17, 59457 Werl
                <br />
                Deutschland
              </p>
              <p>Telefon: 02922 3901</p>
              <p>
                E: <a href="#">info@thegoodplaces.de</a>
              </p>
            </aside>
          </div>
          <div className="col-lg-3 col-sm-2 col-md-3">
            <aside className="widget social_widget">
              <h3 className="widget_title">social</h3>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-instagram"></i>Instagram
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook-square"></i>Facebook
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-linkedin"></i>Linkedin
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube-play"></i>Youtube
                  </a>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-sm-12 text-center">
            <div className="copyright">
              © copyright {new Date().getFullYear()} {" "}
              <a href="#">Made with love thegoodplaces</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
