import './Footer.scss';
import  logo from '../../images/logo.png'
import send from '../../images/send.png'
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <footer className="footer"  id='contact'>
            <div className="footer__container">
                <div className="footer__block">
                    <img className="footer__logo" src={logo} alt="logo" />
                    <p className="footer__paragraph">lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh elit. Duis sed odio sit amet auctror a ornare odio non mauris vitae erat in elit</p>

                    <ul className="footer__items">
                        <li className="footer__item"><Link to="/" className="footer__link">HELP</Link></li>
                        <li className="footer__item"><Link to="/" className="footer__link">TERMS &amp; CONDITION</Link></li>
                        <li className="footer__item"><Link to="/" className="footer__link">PRIVACY</Link></li>
                    </ul>

                </div>

                <div className="footer__block">
                    <h3 className="footer__title">OUR STUDIO</h3>
                    <address className="footer__address-container">
                        <div className="footer__address-icon  geo"></div>
                        <p className="footer__address">
                            Ruko cucruk, Jl. Radio luar dalem jos
                            No.12 - 13, Kalideres - Jakarta Barat
                            11480 - Indonesia
                        </p>
                    </address>
                    <div className="footer__tel-container">
                        <div className="footer__address-icon tel"></div>
                        <Link className="footer__tel" to="tel:622122243333">(+62) 21-2224 3333</Link>
                    </div>
                </div>

                <div className="footer__block">
                    <h3 className="footer__title">STAY IN TOUCH</h3>
                    <form className="footer__form">
                        <input className="footer__input" type="email" placeholder="Subscribe our newsletter"/>
                        <button className="footer__submit-btn" type="submit"><img src={send}  alt="button" /></button>
                    </form>
                    <ul className="footer__social-items">
                        <li className="footer__social-item"><Link className="footer__social-link" to="#"><div className="footer__social-icon facebook"></div></Link></li>
                        <li className="footer__social-item"><Link className="footer__social-link" to="#"><div className="footer__social-icon twitter"></div></Link></li>
                        <li className="footer__social-item"><Link className="footer__social-link" to="#"><div className="footer__social-icon dribble"></div></Link></li>
                        <li className="footer__social-item"><Link className="footer__social-link" to="#"><div className="footer__social-icon instagram"></div></Link></li>
                        <li className="footer__social-item"><Link className="footer__social-link" to="#"><div className="footer__social-icon google"></div></Link></li>
                        <li className="footer__social-item"><Link className="footer__social-link" to="#"><div className="footer__social-icon youtube"></div></Link></li>
                    </ul>
                    <span className="footer__copyright">Copyright © 2021 - Tajem Creative</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;