import { Link } from "react-router-dom";

import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import telegram from "../assets/icons/telegram.svg";
import twitter from "../assets/icons/twitter.svg";
import youtube from "../assets/icons/youtube.svg";

import appstore from "../assets/icons/appstore.svg";
import googleplay from "../assets/icons/googleplay.svg";
import appgallary from "../assets/icons/appgallary.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__left">
            <Link to="/" className="footer__logo-link">
              <img
                src="https://qalampir.uz/assets/brand/Symbol.svg"
                alt=""
                className="footer__logo"
              />
            </Link>
          </div>
          <div className="footer__right">
            <div className="footer__top">
              <div className="footer__top-left">
                <ul className="footer__list">
                  <li className="footer__item">
                    <Link className="footer__link" to="/sayt-haqida">
                      Sayt haqida
                    </Link>
                  </li>
                  <li className="footer__item">
                    <Link className="footer__link" to="/bizdes">
                      Bizdes
                    </Link>
                  </li>
                  <li className="footer__item">
                    <Link className="footer__link" to="/aloqa">
                      Aloqa
                    </Link>
                  </li>
                  <li className="footer__item">
                    <Link className="footer__link" to="/arxiv">
                      Arxiv
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="footer__icons">
                <img src={facebook} alt="" className="footer__icon" />
                <img src={instagram} alt="" className="footer__icon" />
                <img src={telegram} alt="" className="footer__icon" />
                <img src={twitter} alt="" className="footer__icon" />
                <img src={youtube} alt="" className="footer__icon" />
              </div>
            </div>
            <div className="footer__middle">
              <p className="footer__text">
                QALAMPIR.UZ.
                <br />
                Веб-сайт ОАВ сифатида 2018 йил 26 октябрь куни Ўзбекистон
                Республикаси Президенти Администрацияси ҳузуридаги Ахборот ва
                оммавий коммуникациялар агентлигидан 1089 рақам билан рўйхатга
                олинган.
                <br />
                <br />
                Муассис: “QALAMPIR” МЧЖ.
                <br />
                <br />
                Таҳририят манзили: Тошкент шаҳри, Беруний кўчаси, 88-уй.
                <br />
                Электрон манзил: info@qalampir.uz
              </p>
              <div className="footer__action-icons">
                <img src={appstore} alt="" className="footer__action-icon" />
                <img src={googleplay} alt="" className="footer__action-icon" />
                <img src={appgallary} alt="" className="footer__action-icon" />
              </div>
            </div>
            <div className="footer__bottom">
              <div className="footer__span-div">
                <span className="footer__span">16+</span>
              </div>
              <span className="footer__bottom-span">
                © Copyright 2025 Qalampir - Ҳақиқат аччиқ бўлади.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
