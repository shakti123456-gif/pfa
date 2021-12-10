import "./ChooseAmbitions.css";

const ChooseAmbitions = () => {
    return (
        <div style={{ "backgroundImage": "url('/assets/home-flight.jpg')" }} className="pt-5 pb-5">
            <div className="container">
                <div className="row text-start mb-5">
                    <div className="col">
                        <h1 className="heading">WHY CHOOSE PIONEER FLYING <br /> ACEDEMY</h1>

                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4 text-end">
                        <img src="/assets/school-1.png" />
                        <h2 className="title">GREAT CAMPUS</h2>
                        <div className="desc">Our campus has been purposefully designed for flight training, with theory classrooms, simulators, aircraft maintenance and administration facilities. The aircraft parking area and the accommodation facilities are located within the campus perimeter.</div>
                    </div>
                    <div className="col-md-4"></div>
                    <div className="col-md-4 text-end">
                        <img src="/assets/airplane.png" />
                        <h2 className="title">FIVE FLYING PLANES</h2>
                        <div className="desc">Continuous availability of Multi-Engine Airplanes which guarantees uninterrupted flight training. Some of the planes used for training are as follows Cessna 152, Cessna 172, Cessna 172 R,Seneca P34,Cessna PA 34.</div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4 text-end">
                        <img src="/assets/policy-1-1.png" />
                        <h2 className="title">GREAT CAMPUS</h2>
                        <div className="desc">Our campus has been purposefully designed for flight training, with theory classrooms, simulators, aircraft maintenance and administration facilities. The aircraft parking area and the accommodation facilities are located within the campus perimeter.</div>
                    </div>
                    <div className="col-md-4">
                        <img src="/assets/plane-01.png" style={{ marginTop: "-170px", width:"100%" }} />
                    </div>
                    <div className="col-md-4 text-end">
                        <img src="/assets/certificate.png" />
                        <h2 className="title">SEVEN FLYING PLANES</h2>
                        <div className="desc">Continuous availability of Multi-Engine Airplanes which guarantees uninterrupted flight training. Some of the planes used for training are as follows Cessna 152, Cessna 172, Cessna 172 R,Seneca P34,Cessna PA 34.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChooseAmbitions;