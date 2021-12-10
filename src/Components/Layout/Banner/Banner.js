import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Banner = ({ isCarousel, title }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      {isCarousel ? (
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          transitionDuration={500}
          infinite={true}
        >
          <div>
            <img src="/assets/img-1.jpg" style={{ width: "100%", height: "700px" }} />
          </div>
          <div>
            <img src="/assets/img-2.jpg" style={{ width: "100%", height: "700px" }} />
          </div>
          <div>
            <img src="/assets/img-3.jpg" style={{ width: "100%", height: "700px" }} />
          </div>
          
        </Carousel>
      ) : (
        <div
          style={{
            backgroundImage: "url('/assets/home_jet_footer.jpg')",
            color: "white",
            height: "500px",
          }}
        >
          <div className="container">
            <div className="row text-start" style={{ paddingTop: "200px" }}>
              <div className="col">
                <h1 style={{color:"#fff"}}>{title}</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
