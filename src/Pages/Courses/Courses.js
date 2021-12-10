import React, { useEffect } from "react";
import Layout from "../../Components/Layout/Layout";
import "./Course.css";
import { scrollToTop } from "../../Utils/Common";

const Courses = () => {

  useEffect(() => {
    scrollToTop();
  }, []);
  
  return (
    <div>
      <Layout title="Course Page">
        <div className="course-sec">
          <div className="container pb-5 pt-5">
            <div className="row text-start">
              <div className="col">
                <h5 className="headline-first">(Students Pilot Licence)</h5>
              </div>
            </div>
            <div className="row text-start pb-5">
              <div className="col">
                <h2 className="headline">ELIGIBILITY GROUND CLASSES FOR SPL</h2>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col col-md-6">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <b>Choice of Course</b>
                      </td>
                      <td className="table-txt">Student Pilot License (SPL)</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Course Description</b>
                      </td>
                      <td className="table-txt">
                        Student Pilot License (SPL) is basic flying license with
                        which one can independently fly an aircraft. It is the
                        first licence in the process of acquiring a commercial
                        pilot’s licence (CPL).
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Course Duration</b>
                      </td>
                      <td className="table-txt">7 Days</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Eligibility</b>
                      </td>
                      <td className="table-txt">
                        Minimum qualification required is 10 / SSC.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Medical</b>
                      </td>
                      <td className="table-txt">
                        Class II Medical (Indian) is compulsory. You should be
                        medically fit as per the standards laid down by DGCA.
                        Link of Class II DGCA Approved Medical examiner:
                        http://www.dgca.nic.in/medical/class2-ind.htm.
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Age</b>
                      </td>
                      <td className="table-txt">16 Years</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Other Documents</b>
                      </td>
                      <td className="table-txt">
                        Police Verfication,EDGCA Enrollement,Board Verification.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="col col-md-6">
                <img
                  src="/assets/about_new1-min.png"
                  style={{ width: "100%" }}
                />
              </div>
            </div>
            <div className="row text-start">
              <div className="col">
                <button className="btn btn-dark btn-txt">Apply Now</button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Courses;
