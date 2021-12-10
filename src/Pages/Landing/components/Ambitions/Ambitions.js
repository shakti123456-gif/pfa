import "./Ambitions.css";

const Ambitions = () => {
    return (
        <div>
            <div>
                <div className="row">
                    <div className="col col-md-6 p-0">
                        <img src="/assets/planenew-min.png" style={{ width: "100%", height: "100%" }} />
                    </div>
                    <div className="col col-md-6 p-0">
                        <div className="topSec" style={{ "backgroundImage": "url('/assets/home_jet_footer.jpg')" }}>
                            <h1 className="topHeading">Pioneer Flying Academy </h1>
                            <p className="descTxt">Pioneer Flying Academy trains the aspiring pilots as per the curriculum and standards laid down by Directorate General of Civil Aviation (DGCA) India and International Civil Aviation Organization (ICAO), with main focus on training pilots for airlines industry.</p>
                        </div>
                        <div className="bottomSec">
                            <p className="descTxt">PFAPL has trained students in record durations of as less as 11 months while at the same time maintaining the highest possible standards of training and education. For the last 15 years the academy has given high emphasis on providing as much actual solo flying to students as possible to boost their confidence and enable them to evolve their skills and know their limitations.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ "backgroundImage": "url('/assets/home_jet_footer.jpg')", color:"white" }} className="pt-5 pb-5">
                <div className="container">
                    <div className="row text-start">
                        <div className="col-md-3">
                            <img src="/assets/plane-3-1.png" className="mb-4" />
                            <h6 className="mb-4">100% WELL MAINTAINED AIRCRAFT</h6>
                            <p>Pioneer Flying Academy trains the aspiring pilots as per the curriculum and standards laid down by Directorate General of Civil Aviation (DGCA) India and International Civil Aviation Organization (ICAO), with main focus on training pilots for airlines industry.</p>
                        </div>
                        <div className="col-md-3">
                            <img src="/assets/card-1.png" className="mb-4" />
                            <h6 className="mb-4">5,000+ PILOTS ACCREDITED</h6>
                            <p>We are certified & approved by the Director General of Civil Aviation (DGCA) for conducting aviation courses with 12000 + pilots.</p>
                        </div>
                        <div className="col-md-3">
                            <img src="/assets/simulation.png" className="mb-4" />
                            <h6 className="mb-4">SIMULATORS TRAINING</h6>
                            <p>
                                Our mission is to fill the aviation industry with competent, safe and passionate pilots. Our team at FLYAFC are skilled professionals with several years of experience preparing students for the aviation industry.
                            </p>
                        </div>
                        <div className="col-md-3">
                            <img src="/assets/certificate-2.png" className="mb-4" />
                            <h6 className="mb-4">FULLY ACCREDITED AND SECURE</h6>
                            <p>We are fully accredited by Director General of Civil Aviation (DGCA) to provide all kinds of Aviation Services</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ambitions;