import "./PioletTraning.css";

const PioletTraning = () => {
    return (
        <div className="traning">
            <div className="container pt-5 pb-5">
                <div className="row text-start pb-5">
                    <div className="col">
                        <h2 className="training-title">Finance Your Pilot Training with Facilities</h2>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col col-md-6">
                        <img src="/assets/01.jpg" style={{ width: "100%" }} />
                    </div>
                    <div className="col col-md-6 text-start">
                        <h3 className="training-title-2">BANK LOAN ASSISTANCE</h3>
                        <p className="paragraph-txt">FLYAFC aids students who are seeking for education loan from banks. A student can avail loan from any bank in accordance with his financial status, family background, availability of documentation etc.</p>
                        <p className="paragraph-txt">We are associated with a Recognized Bank to provide you this facility. Please contact our Admissions Office during enrolment procedure for more details and assistance on Bank Loans.</p>
                        <p className="paragraph-txt">Existing Candidates at the academy can avail education loan amid their course can approach the institute’s office admin staff.</p>
                    </div>
                </div>
                <div className="row mt-5 pt-5">
                    <div className="col col-md-6 text-start">
                        <h3 className="training-title-2">INTERNATIONAL STUDENTS</h3>
                        <p className="paragraph-txt"><strong>Flyafc Welcomes International Students!</strong> FLYAFC Welcomes International Students! We are one of largest Initial Flying Training centres with a large number of international students enrolling to make their career with us. This truly reflects the diversity of our institute itself.
                            Our Counsellor and admissions team offers advise counselling and support to international students regarding admission procedures and enrolment.</p>
                        <p><strong>Please note that an International student shall require security clearance from Indian Government (Ministry of Home Affairs, External Affairs Ministry etc.) before the enrolment.</strong></p>
                        <p className="paragraph-txt">We will be happy to assist you with all required procedure and paperwork, Our office is always happy to offer necessary assistance.</p>
                    </div>
                    <div className="col col-md-6">
                        <img src="/assets/01.jpg" style={{ width: "100%" }} />
                    </div>
                </div>
                <div className="row mt-5 pt-5">
                    <div className="col col-md-6">
                        <img src="/assets/01.jpg" style={{ width: "100%" }} />
                    </div>
                    <div className="col col-md-6 text-start">
                        <h3 className="training-title-2">SCHOLARSHIP SCHEME</h3>
                        <p className="paragraph-txt">FLYAFC is also providing assistance to those candidates who are seeking Scholarship for their CPL and who comes under SC/ST category. Central government is directly asking for the Scholarship to these candidates via centralized scholarship portal.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PioletTraning;