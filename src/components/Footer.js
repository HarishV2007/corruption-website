import React from 'react'
import "../Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faTelegramPlane, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer-section"  >
            <div className="container">
                <div className="footer-cta py-5">
                    <div className="row justify-content-center align-items-center">

                        <div className="col-xl-4 col-md-4 ">
                            <div className="single-cta">
                                <FontAwesomeIcon className="icon" icon={faPhone} />
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span className="fw-bolder">+91 1234567890</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4">
                            <div className="single-cta">
                                <FontAwesomeIcon className="icon" icon={faEnvelopeOpen} />
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <span className="fw-bolder">anticorruption@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content py-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo">
                                    <a href="/">
                                        <img src="/images/eng-logo.png" className="img-fluid" alt="logo" />
                                    </a>
                                </div>
                                <div className="footer-text">
                                    <p>Semmancheri, Chennai, Tamil Nadu 600119</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>

                                    <a href="https://www.facebook.com/teamkanaaOffical/" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon className="icon" icon={faFacebook} />
                                    </a>
                                    <a href="https://youtube.com/channel/UCXxDN9TaPCmlSrIJlRFePpg" target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon className="icon" icon={faYoutube} />
                                    </a>
                                    <a href='https://instagram.com/team_kanaa?utm_medium=copy_link' target="_blank" rel="noreferrer">
                                        <FontAwesomeIcon className="icon" icon={faInstagram} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/report">Report</Link></li>
                                    <li><Link to="/about">About Us </Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Query/Suggestion</h3>
                                </div>
                                <div className="footer-text mb-25">
                                    <p>Email your issues with the website or request features</p>
                                </div>
                                <div className="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Type Here" />
                                        <button>
                                            <FontAwesomeIcon className="icon" icon={faTelegramPlane} />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <div className="copyright-text">
                                <p>Copyright &copy; {year}, All Right Reserved <a href="/">Anti Corruption</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
