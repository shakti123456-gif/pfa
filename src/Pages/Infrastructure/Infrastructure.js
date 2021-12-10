import React, {useEffect} from "react";
import Layout from "../../Components/Layout/Layout";
import "./Infrastructure.css";
import { scrollToTop } from "../../Utils/Common";

const Infrastructure = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  
  return (
    <Layout title="Infrastructure Page">
      <div className="traning">
        <div className="container pt-5 pb-5">
          <div className="row text-center pb-5">
            <div className="col">
              <h2 className="training-title">Infrastructure </h2>
            </div>
          </div>
          <div className="row pt-4">
            <div className="col col-md-6 article">
              <img src="/assets/01.jpg" style={{ width: "100%" }} />
            </div>
            <div className="col col-md-6 text-start article">
              <h3 className="training-title-2">Airfield</h3>
              <p className="paragraph-txt">
              The 4000ft airfield in Aligarh is ideally suited for unrestricted flying training. A suitable environment with clear weather conditions is best suited for the completion of flying training in a short duration minimizing delay due to external conditions.
              </p>
            
            </div>
          </div>
          <div className="row mt-5 pt-5">
            <div className="col col-md-6 text-start article">
              <h3 className="training-title-2">Fleet</h3>
              <p className="paragraph-txt">
              Fleet of Training aircraft includes the Cessna 152 & the Cessna172S aircrafts with autopilot. All aircrafts are fitted with modern navigational aids including automatic direction finder, VOR, GPS, etc ideal for training purposes.
              </p>
            
             
            </div>
            <div className="col col-md-6 article">
              <img src="/assets/01.jpg" style={{ width: "100%" }} />
            </div>
          </div>
          <div className="row mt-5 pt-5">
            <div className="col col-md-6 article">
              <img src="/assets/01.jpg" style={{ width: "100%" }} />
            </div>
            <div className="col col-md-6 text-start article">
              <h3 className="training-title-2">Maintenance</h3>
              <p className="paragraph-txt">
              Pioneer Flying Academy has a spacious hanger with experienced maintenance and quality control personnel to ensure a high standard of maintenance, safety security, and ready availability of aircraft for unrestricted flying and training.
              </p>
            </div>
          </div>

          <div className="row mt-5 pt-5">
            <div className="col col-md-6 text-start article">
              <h3 className="training-title-2">Joy Rides</h3>
              <p className="paragraph-txt">
              Joy rides for up to 20 minutes of flying, with our experienced pilots. The students will be given a briefing about the nuances of flying and what to expect and experience when up in the air.
              </p>
            
             
            </div>
            <div className="col col-md-6 article">
              <img src="/assets/01.jpg" style={{ width: "100%" }} />
            </div>
          </div>
          <div className="row mt-5 pt-5">
            <div className="col col-md-6 article">
              <img src="/assets/01.jpg" style={{ width: "100%" }} />
            </div>
            <div className="col col-md-6 text-start article">
              <h3 className="training-title-2">Maintenance</h3>
              <p className="paragraph-txt">
              Pioneer Flying Academy has a spacious hanger with experienced maintenance and quality control personnel to ensure a high standard of maintenance, safety security, and ready availability of aircraft for unrestricted flying and training.
              </p>
            </div>
          </div>

          <div className="row mt-5 pt-5">
            <div className="col col-md-6 text-start article">
              <h3 className="training-title-2">Para Motor Flying </h3>
              <p className="paragraph-txt">
              It is a simple act unlike other flying adventure activities and involves a powered paraglider, which is formed by an engine, a propeller within a cage, and an integrated seat harness. All these are mounted on a trike with wheels. There are two attachment points in it that allow a fabric paragliding wing to be attached.
              </p>
            
             
            </div>
            <div className="col col-md-6 article">
              <img src="/assets/01.jpg" style={{ width: "100%" }} />
            </div>
          </div>
          <div className="row mt-5 pt-5">
            <div className="col col-md-6 article">
              <img src="/assets/01.jpg" style={{ width: "100%" }} />
            </div>
            <div className="col col-md-6 text-start article">
              <h3 className="training-title-2">Drone Traning </h3>
              <p className="paragraph-txt">
              Go Beyond and hone your pilot skills by harnessing our meritorious drone pilot training program to fulfill your drone dreams. Uncover your potential, and let's celebrate the quest of drones together!
              </p>
            </div>
          </div>

          <div className="row mt-5 pt-5">
            <div className="col col-md-6 text-start article">
              <h3 className="training-title-2">Sky Diving </h3>
              <p className="paragraph-txt">
              Skydiving seems thrilling or maybe even frightening at first, but overcoming that fear would be the biggest step you can take to accomplish your first skydiving experience. After you overcome the fear, tandem skydiving is the way to go for most first-timers. 
              </p>
            
             
            </div>
            <div className="col col-md-6 article">
              <img src="/assets/01.jpg" style={{ width: "100%" }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Infrastructure;
