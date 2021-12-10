import "./Courses.css";

const Courses = () => {
    return (
        <div style={{ backgroundColor: "#f5f3f1" }}>
            <div className="container pb-5 pt-5">
                <div className="row text-center mb-3">
                    <div className="col">
                        <p className="course-heading">FIND THE RIGHT COURSE FOR YOU</p>
                        {/* <div className="text-center">
                        <hr className="line" />
                        </div> */}
                        
                    </div>
                </div>
                <div className="row text-start">
                    <div className="col-md-4">
                        <div class="card hover-sec">
                            <img src="/assets/planenew-min.png" class="card-img-top" alt="..." />
                            <div class="card-body pb-5">
                                <h5 class="card-title text-center courseTitle">STUDENT PILOT LICENSE</h5>
                                <div class="card-text"><b>Age Limit:</b> Minimum 16 years</div>
                                <div class="card-text"><b>Eligibility:</b> 10th Passed (from any recognized board)</div>
                                <div class="card-text"><b>DURATION:</b> 10 Days</div>
                                <a href="#" class="btn btn-dark mt-4">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card hover-sec">
                            <img src="/assets/planenew-min.png" class="card-img-top" alt="..." />
                            <div class="card-body pb-5">
                                <h5 class="card-title text-center courseTitle">PRIVATE PILOT LICENSE</h5>
                                <div class="card-text"><b>Age Limit:</b> Minimum 17 years</div>
                                <div class="card-text"><b>Eligibility:</b> 10th Passed (from any recognized board)</div>
                                <div class="card-text"><b>DURATION:</b> Approx. 6 months, depending on student clearing DGCA examination</div>
                                <a href="#" class="btn btn-dark mt-4">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div class="card hover-sec">
                            <img src="/assets/planenew-min.png" class="card-img-top" alt="..." />
                            <div class="card-body pb-5">
                                <h5 class="card-title text-center courseTitle">COMMERCIAL PILOT LICENCE</h5>
                                <div class="card-text"><b>Age Limit:</b> Minimum  18  years</div>
                                <div class="card-text"><b>Eligibility:</b> Minimum 10+2 with Physics & Maths. </div>
                                <div class="card-text"><b>Medical</b>  he will have to qualify for Class I medical fitness before he can get CPL.</div>
                                <a href="#" class="btn btn-dark mt-4">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;