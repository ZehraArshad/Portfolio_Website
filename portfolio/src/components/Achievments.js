import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Achievement = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="achievments">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-ac wow zoomIn">
              <h2>Achievments</h2>


              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <a  href="https://www.linkedin.com/feed/update/urn:li:activity:7325234164289421312/" target="_blank" rel="noopener noreferrer">
                    <h5>Section Leader at Stanford's CIP</h5>
                  </a>
                </div>

                <div className="item">
                  <a href="https://www.linkedin.com/posts/zehraarshad_stagepresence-surfer-boilerup-activity-6962729459229634560-iU37?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAADf4ztEB6QB1gWUlBCQOvtDfJJJMnEgeOrg/" target="_blank" rel="noopener noreferrer">
                    <h5>Summer Undergraduate Scholar at Purdue University</h5>
                  </a>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
