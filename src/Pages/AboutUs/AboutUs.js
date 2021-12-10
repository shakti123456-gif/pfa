import React from "react";
import "./AboutUs.css";
import star from "./star.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "../../Components/Layout/Layout";
import s1 from "./s1.jpeg"
import a3 from './a3.jpg'
import faiz from './faiz.jpg'
import ben1 from './ben1.jpg'
import s2 from './s2.jpeg'

export default function AboutUs() {
  return (
    <div>
      <Layout title="About Us Page">
        <div className="other">
          <div className="aboutme">
            <span>A</span>
            <span>B</span>
            <span>O</span>
            <span>U</span>
            <span>T</span>
            <span className="letter"></span>
            <span>U</span>
            <span>S</span>
          </div>
        </div>
        <div className="container1">
          <img src={star} alt="Avatar" className="image1" />
          <div className="overlay">
            <div className="text">
              <div className="text1"> 
              <p>
                PFA is a premier flying training institute in India, duly
                approved by the Director General of Civil Aviation,
                <br /> Government of India. It is located at Aligarh airfield.
                This airfield is dedicated for flying training purposes and is
                set in scenic and peaceful environs.
                <br /> It is one of the nearest possible location to New Delhi,
                the Capital of India and is well connected by rail and road with
                the major cities in India.
              </p>
              <br />
              <br />
              <p>
                PFA is approved to conduct flying training for private pilot’s
                licence (PPL) and commercial pilot’s licence (CPL).
              </p>
              <br/>
              The unique feature of our training is the practical learning of
              radio-telephony (R/T) communication procedures and phraseologies
              at our exclusive radio-telephony facility, duly approved by the
              Ministry of Communication, Government of India. R/T is an
              essential feature of flying, enabling aircraft-to-ground
              communication and control. PFA has a second base at Neemuch, in
              Madhya Pradesh.
              <br/>
              Pioneer Flying Academy trains the aspiring pilots as per the
              curriculum and standards laid down by Directorate General of Civil
              Aviation (DGCA) India and International Civil Aviation
              Organization (ICAO), with main focus on training pilots for
              airlines industry.
              <br />
              <br />
              Pioneer Flying Academy P Ltd (PFAPL) is dedicated to safety,
              efficiency and training excellence. For ground training, our
              Academy has very experienced faculty and the latest Interactive
              Board with audio-visual aids to prepare the candidates for theory
              papers. Candidates are required to clear theory papers for the
              grant of PPL/CPL. The exams are held by the Directorate General of
              Civil Aviation.
              <br/>
              <br/>
              Pioneer Flying Academy is a part of a group of companies led by
              Airlink Tours and Travels. With our experience in aviation and
              hospitality sector, we also provide training for other aviation
              services.
              <br/>
            </div>
          </div>
        </div>
      </div>
        <div className="body">
          <div className="container">
            <h1>Saroj Joshi (Founder & CEO)</h1>

            <h2>Head of Pioneer Flying Academy </h2>

            <div className="image">
              <img src={s2} alt="" width="300" height="300" />
            </div>

            <p>
            
            CMD in Pioneer Flying Academy Pvt Ltd (FTO & AOP (NSOP) & Owner Airlink Travel and Tours (IATA since1995 )
            </p>

            <a href="#" class="btn">
              {""}
              Get In Touch{" "}
            </a>
          </div>
        </div>

        <div className="other">
          <div class="aboutme">
            <span>O</span>
            <span>U</span>
            <span>R</span>

            <span className="letter"></span>
            <span>T</span>
            <span>E</span>
            <span>A</span>
            <span>M</span>
            <span>S</span>
          </div>
        </div>
        <div class="container">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img src={faiz} class="card-img-top" alt="..." width="400px" height="400px"/>
                <div class="card-body">
                  <h5 class="card-title">Faiz Khan</h5>
                  <p class="card-text">
                    Faiz khan is DGCA certify instructor
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={ben1} class="card-img-top" alt="..." width="400px" height="400px"/>
                <div class="card-body">
                  <h5 class="card-title">not update</h5>
                  <p class="card-text">
                    all information is confidational
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card">
                <img src={ben1} class="card-img-top" alt="..." width="400px" height="400px"/>
                <div class="card-body">
                  <h5 class="card-title">not update</h5>
                  <p class="card-text">
                  all information is confidational
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
