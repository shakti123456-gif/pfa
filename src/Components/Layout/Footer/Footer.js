import React from "react";
import "./Footer.css";
import { FaMobileAlt, FaFacebookSquare } from 'react-icons/fa';
import { CgMail } from "react-icons/cg";
import { ImWhatsapp } from "react-icons/im";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


const Footer = () => {
    let navigate = useNavigate();

    const gotoPage = (page) => {
        navigate(page)
    }
    return (
        <footer>
            {/* Header Top Section */}
            <section className="footerTxt pt-5 pb-4" style={{ "backgroundImage": "url('/assets/home_jet_footer.jpg')" }}>
                <div className="container">
                    <div class="row text-start">
                        <div className="col col-md-3">
                            <h4 className="mb-4">ABOUT OUR INSTITUTE</h4>
                            <div className="aboutTxt">Pioneer Flying Academy P. Ltd is a flight training academy established in the year 2010 at Dhanipur Airstrip, Aligarh and engaged in conducting Director General of Civil Aviation, Govt. of India approved flying training courses.</div>
                        </div>
                        <div className="col col-md-3">
                            <h4 className="mb-4">CONTACT US</h4>
                            <p className="mb-3 aboutTxt">Let us help you to spread your wings</p>
                            <ul className="ulList">
                                <li>
                                    <h4 className="mobile-gamil-txt"><FaMobileAlt size={"1.2em"} color={"#e4b81e"} /> +91-88504 51664</h4></li>
                                <li>
                                    <h4 className="mobile-gamil-txt"><CgMail size={"1.2em"} color={"#e4b81e"} /> pioneerflying Academy
                                    <br />pioneerflying<br />academy@gmail.com</h4></li>
                                <li><ImWhatsapp size={"1.2em"} color={"#e4b81e"} /> &nbsp; <FaFacebookSquare size={"1.2em"} color={"#e4b81e"} /> &nbsp; <BsInstagram size={"1.2em"} color={"#e4b81e"} /> &nbsp; <BsLinkedin size={"1.2em"} color={"#e4b81e"} /></li>
                            </ul>
                        </div>
                        <div className="col col-md-3">
                            <h4 className="mb-4">QUICK LINKS</h4>
                            <p className="mb-3 aboutTxt">Experience your Dreams in Motion</p>
                            <ul className="ulList links">
                                <li onClick={() => gotoPage("/")}>Home</li>
                                <li onClick={() => gotoPage("/about")}>About Us</li>
                                <li>Happy to Apply</li>
                                <li onClick={() => gotoPage("/contact")}>Contact Us</li>
                            </ul>
                        </div>
                        <div className="col col-md-3">
                            <h4 className="mb-4">CLUB ADDRESS</h4>
                            <h6 className="mb-2">CLUB ADDRESS</h6>
                            <div className="aboutTxt">Dhanipur Airstrip, NH-91,
                                Aligarh- 202001, U.P.
                            </div>
                            <div className="mt-3 mapTxt">View on map</div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export default Footer;