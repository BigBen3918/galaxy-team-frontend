import "./index.scss";
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { NotificationManager } from "react-notifications";
import Particle from "../components/particle/Particle";
import Input from "../components/input/Input";
import Action from "../Service/action";
import { Phone, Mail, Address, Apartment } from "../components/icons/Icons";

import Blockchain from "../assets/images/blockchain.webp";
import Unity from "../assets/images/unity.webp";
import Web from "../assets/images/web.webp";
import Logo from "../assets/images/logo.png";
// import Ataricasino from "../assets/images/ataricasino.webp";
import Cryptowolf from "../assets/images/cryptowolf.webp";
import Slashercasino from "../assets/images/slashercasino.webp";
import Gada from "../assets/images/gada.webp";
import Overworldlife from "../assets/images/slashercasino.webp";
import Energy from "../assets/images/energy-oilandgas-min.webp";
import Finance from "../assets/images/finance.webp";
import Healthcare from "../assets/images/healthcare.webp";
import Supplychain from "../assets/images/supply-chain.webp";
import Transportation from "../assets/images/transportation-min.webp";
import Insaurance from "../assets/images/insaurance-min.webp";
import Agriculture from "../assets/images/agriculture.webp";
import Retail from "../assets/images/retail.webp";

import useStore from "../useStore";

const Home = () => {
    const G = useStore();

    const [mobileView, setMobileView] = useState(false);
    const [drowdownFlag, setDrowdownFlag] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [request, setRequest] = useState("");
    const [detail, setDetail] = useState("");

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 1400
                ? setMobileView(true)
                : setMobileView(false);
        };
        setResponsiveness();
        window.addEventListener("resize", () => setResponsiveness());
    });

    function mobileMenuButton() {
        drowdownFlag ? setDrowdownFlag(false) : setDrowdownFlag(true);
    }

    const handleSend = () => {
        const validEmail = new RegExp(
            "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
        );
        const validName = new RegExp("^[a-zA-Z]");

        if (name.trim() === "") {
            NotificationManager.error("Please input name", "", 3000);
            return;
        }
        if (!validName.test(name) || name.length < 3) {
            NotificationManager.error("Name Invalid");
            return;
        }
        if (email.trim() === "") {
            NotificationManager.error("Please input email", "", 3000);
            return;
        }
        if (!validEmail.test(email)) {
            NotificationManager.error("Email Invalid", "", 3000);
            return;
        }
        if (phone.trim() === "") {
            NotificationManager.error("Please input phone", "", 3000);
            return;
        }
        if (request.trim() === "") {
            NotificationManager.error("Please input your request", "", 3000);
            return;
        }
        if (detail.trim() === "") {
            NotificationManager.error("Please input details of your project", "", 3000);
            return;
        }

        Action.requestSend({
            name: name,
            email: email,
            phone: phone,
            request: request,
            detail: detail,
        });
        initialInput();
    };

    const initialInput = () => {
        setName("");
        setEmail("");
        setPhone("");
        setRequest("");
        setDetail("");
    };

    return (
        <div className="home">
            <div className="title-section">
                <Particle />
                <div className="col-8 col-md-12 col-sm-12 container">
                    <div className="team-header">
                        <div className="logo">
                            <img src={Logo} alt="Logo" height={70} />
                        </div>
                        {!mobileView ? (
                            <div className="header-link">
                                <div>
                                    <h4>Business</h4>
                                </div>
                                <div>
                                    <h4>News</h4>
                                </div>
                                <div>
                                    <h4>Developers</h4>
                                </div>
                                <div>
                                    <h4>Community</h4>
                                </div>
                                <div>
                                    <h4>Contact Us</h4>
                                </div>
                            </div>
                        ) : (
                            <div
                                data-toggle="dropdown"
                                onClick={mobileMenuButton}
                            >
                                <GiHamburgerMenu
                                    style={{ width: "30px", height: "30px" }}
                                />
                            </div>
                        )}
                    </div>
                    <div className="team-content">
                        <h1>Galaxy Team</h1>
                        <h4>
                            Apriorit provides dedicated R&D teams with
                            unbelievable 98% client retention rate.
                            <br />
                            <br />
                            We give you much more than software programming
                            skills.
                        </h4>
                    </div>
                </div>
            </div>

            <div className="col-8 col-md-12 col-sm-12 services">
                <h2>Our Services</h2>
                <div className="items">
                    <div>
                        <img src={Blockchain} alt="Blockchain" />
                        <span>
                            <b>Blockchain Development</b>
                        </span>
                        <span>
                            Professional website design crafted by web design's
                            leading artistic minds. Caveni creates a custom
                            digital experience that engages and inspires your
                            audience.
                        </span>
                        <div>Learn More</div>
                    </div>
                    <div>
                        <img src={Unity} alt="Unity" />
                        <span>
                            <b>Game Development</b>
                        </span>
                        <span>
                            Professional website design crafted by web design's
                            leading artistic minds. Caveni creates a custom
                            digital experience that engages and inspires your
                            audience.
                        </span>
                        <div>Learn More</div>
                    </div>
                    <div>
                        <img src={Web} alt="Web" />
                        <span>
                            <b>Website Development</b>
                        </span>
                        <span>
                            Professional website design crafted by web design's
                            leading artistic minds. Caveni creates a custom
                            digital experience that engages and inspires your
                            audience.
                        </span>
                        <div>Learn More</div>
                    </div>
                </div>
            </div>

            <div className="col-11 col-md-12 col-sm-12 solutions">
                <h2>Our Solutions</h2>
                <div className="items">
                    <div>
                        <img src={Transportation} alt="atari" />
                        <div>
                            <span>
                                <b>Blockchain Development</b>
                            </span>
                            <span>
                                Professional website design crafted by web
                                design's leading artistic minds. Caveni creates
                                a custom digital experience that engages and
                                inspires your audience.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Finance} alt="gada" />
                        <div>
                            <span>
                                <b>Blockchain Development</b>
                            </span>
                            <span>
                                Professional website design crafted by web
                                design's leading artistic minds. Caveni creates
                                a custom digital experience that engages and
                                inspires your audience.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Healthcare} alt="slasher" />
                        <div>
                            <span>
                                <b>Blockchain Development</b>
                            </span>
                            <span>
                                Professional website design crafted by web
                                design's leading artistic minds. Caveni creates
                                a custom digital experience that engages and
                                inspires your audience.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Supplychain} alt="cryptowolf" />
                        <div>
                            <span>
                                <b>Blockchain Development</b>
                            </span>
                            <span>
                                Professional website design crafted by web
                                design's leading artistic minds. Caveni creates
                                a custom digital experience that engages and
                                inspires your audience.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Energy} alt="atari" />
                        <div>
                            <span>
                                <b>Blockchain Development</b>
                            </span>
                            <span>
                                Professional website design crafted by web
                                design's leading artistic minds. Caveni creates
                                a custom digital experience that engages and
                                inspires your audience.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Gada} alt="gada" />
                        <div>
                            <span>
                                <b>Blockchain Development</b>
                            </span>
                            <span>
                                Professional website design crafted by web
                                design's leading artistic minds. Caveni creates
                                a custom digital experience that engages and
                                inspires your audience.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Slashercasino} alt="slasher" />
                        <div>
                            <span>
                                <b>Blockchain Development</b>
                            </span>
                            <span>
                                Professional website design crafted by web
                                design's leading artistic minds. Caveni creates
                                a custom digital experience that engages and
                                inspires your audience.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Cryptowolf} alt="cryptowolf" />
                        <div>
                            <span>
                                <b>Blockchain Development</b>
                            </span>
                            <span>
                                Professional website design crafted by web
                                design's leading artistic minds. Caveni creates
                                a custom digital experience that engages and
                                inspires your audience.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Insaurance} alt="atari" />
                        <div>
                            <span>
                                <b>Blockchain Development</b>
                            </span>
                            <span>
                                Professional website design crafted by web
                                design's leading artistic minds. Caveni creates
                                a custom digital experience that engages and
                                inspires your audience.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Agriculture} alt="gada" />
                        <div>
                            <span>
                                <b>Blockchain Development</b>
                            </span>
                            <span>
                                Professional website design crafted by web
                                design's leading artistic minds. Caveni creates
                                a custom digital experience that engages and
                                inspires your audience.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Overworldlife} alt="slasher" />
                        <div>
                            <span>
                                <b>Blockchain Development</b>
                            </span>
                            <span>
                                Professional website design crafted by web
                                design's leading artistic minds. Caveni creates
                                a custom digital experience that engages and
                                inspires your audience.
                            </span>
                        </div>
                    </div>
                    <div>
                        <img src={Retail} alt="cryptowolf" />
                        <div>
                            <span>
                                <b>Blockchain Development</b>
                            </span>
                            <span>
                                Professional website design crafted by web
                                design's leading artistic minds. Caveni creates
                                a custom digital experience that engages and
                                inspires your audience.
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="future">
                <div className="col-8">
                    <h2>What our clients say about us</h2>
                    <span>
                        We have significant experience of work on cybersecurity
                        and data management projects for leading technology
                        vendors. Delivering expert driver development, system
                        programming, and reverse engineering skills, we assist
                        our clients with the most innovative and challenging
                        projects.
                    </span>
                </div>
            </div>

            <div className="col-8 col-md-8 col-sm-10 contactus">
                <div className="header">
                    <h2>Tell us about your project</h2>
                    <span>
                        Send us a request for proposal! We’ll get back to you
                        with details and estimations.
                    </span>
                </div>
                <div className="row content">
                    <div className="infosign">
                        <div>
                            <Input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                placeholder="Name"
                            />
                        </div>
                        <div>
                            <Input
                                type="email"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                placeholder="Email"
                            />
                            <Input
                                type="text"
                                onChange={(e) => setPhone(e.target.value)}
                                value={phone}
                                placeholder="Phone"
                            />
                        </div>
                        <div>
                            <Input
                                type="text"
                                onChange={(e) => setRequest(e.target.value)}
                                value={request}
                                placeholder="Subject of your request"
                            />
                        </div>
                        <div>
                            <Input
                                type="textarea"
                                onChange={(e) => setDetail(e.target.value)}
                                value={detail}
                                placeholder="Give us more details on your project"
                            />
                        </div>
                        <small>
                            By clicking Send you give consent to processing your
                            data
                        </small>
                        <div className="btn" onClick={handleSend}>
                            Send
                        </div>
                    </div>
                    <div className="contact">
                        <div className="bookcall">
                            <h3>Book an Exploratory Call</h3>
                            <span>
                                Do not have any specific task for us in mind but
                                our skills seem interesting?
                                <br />
                                <br />
                                Get a quick Apriorit intro to better understand
                                our team capabilities.
                            </span>
                            <div>Boot time slot</div>
                        </div>
                        <div className="info">
                            <h3>Contact Us</h3>
                            <div>
                                <div>
                                    <div>
                                        <Phone size={24} />
                                    </div>
                                    <span>+1 202-780-9339</span>
                                </div>
                                <div>
                                    <div>
                                        <Mail size={24} />
                                    </div>
                                    <span>info@galaxy.com</span>
                                </div>
                                <div>
                                    <div>
                                        <Address size={24} />
                                    </div>
                                    <span>
                                        3524 Silverside Road Suite 35B Rome, DE
                                        19810-4929 Italy
                                    </span>
                                </div>
                                <div>
                                    <div>
                                        <Apartment size={24} />
                                    </div>
                                    <span>D-U-N-S number: 117063762</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
