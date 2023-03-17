import type { NextPage } from "next";
import styles from "../feedback.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Feedback: NextPage = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    className: "center",
    initialSlide: 0,
    dotsClass: styles.button__bar,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.feedback}>
      <div className={styles.headingParent}>
        <div className={styles.heading}>
          <div className={styles.studentTestimonial}>Student Testimonial</div>
          <div className={styles.feedbackFromStudent}>
            <div className={styles.feedbackFromStudentContainer}>
              <span>{`Feedback From `}</span>
              <span className={styles.student}>Student</span>
            </div>
            <img
              className={styles.feedbackFromStudentChild}
              alt=""
              src="/student.svg"
            />
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: "1110px",
          width: "100%",
        }}
      >
        <Slider {...settings}>
          <div>
            <div className={styles.feedbackCard}>
              <div className={styles.innerContent}>
                <div className={styles.profile}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/ellipse.svg"
                    />
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/profile.png"
                    />
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/quote.svg"
                    />
                  </div>
                </div>
                <div className={styles.starParent}>
                  <div className={styles.star}>
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/gray-star.svg"
                    />
                  </div>
                  <div className={styles.loremIpsumHasContainer}>
                    <span className={styles.loremIpsumHasContainer1}>
                      <p className={styles.loremIpsumHas}>
                        Lorem Ipsum has been the industry's standard dummy text
                        since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make type specimen book has
                        survived not five centuries but also the leap into
                        electronic.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.name}>
                  <div className={styles.saraAlexander}>Sara Alexander</div>
                  <div className={styles.productDesignerUsa}>
                    Product Designer, USA
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.feedbackCard}>
              <div className={styles.innerContent}>
                <div className={styles.profile}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/ellipse.svg"
                    />
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/profile.png"
                    />
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/quote.svg"
                    />
                  </div>
                </div>
                <div className={styles.starParent}>
                  <div className={styles.star}>
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/gray-star.svg"
                    />
                  </div>
                  <div className={styles.loremIpsumHasContainer}>
                    <span className={styles.loremIpsumHasContainer1}>
                      <p className={styles.loremIpsumHas}>
                        Lorem Ipsum has been the industry's standard dummy text
                        since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make type specimen book has
                        survived not five centuries but also the leap into
                        electronic.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.name}>
                  <div className={styles.saraAlexander}>Sara Alexander</div>
                  <div className={styles.productDesignerUsa}>
                    Product Designer, USA
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.feedbackCard}>
              <div className={styles.innerContent}>
                <div className={styles.profile}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/ellipse.svg"
                    />
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/profile.png"
                    />
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/quote.svg"
                    />
                  </div>
                </div>
                <div className={styles.starParent}>
                  <div className={styles.star}>
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/gray-star.svg"
                    />
                  </div>
                  <div className={styles.loremIpsumHasContainer}>
                    <span className={styles.loremIpsumHasContainer1}>
                      <p className={styles.loremIpsumHas}>
                        Lorem Ipsum has been the industry's standard dummy text
                        since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make type specimen book has
                        survived not five centuries but also the leap into
                        electronic.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.name}>
                  <div className={styles.saraAlexander}>Sara Alexander</div>
                  <div className={styles.productDesignerUsa}>
                    Product Designer, USA
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.feedbackCard}>
              <div className={styles.innerContent}>
                <div className={styles.profile}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/ellipse.svg"
                    />
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/profile.png"
                    />
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/quote.svg"
                    />
                  </div>
                </div>
                <div className={styles.starParent}>
                  <div className={styles.star}>
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/gray-star.svg"
                    />
                  </div>
                  <div className={styles.loremIpsumHasContainer}>
                    <span className={styles.loremIpsumHasContainer1}>
                      <p className={styles.loremIpsumHas}>
                        Lorem Ipsum has been the industry's standard dummy text
                        since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make type specimen book has
                        survived not five centuries but also the leap into
                        electronic.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.name}>
                  <div className={styles.saraAlexander}>Sara Alexander</div>
                  <div className={styles.productDesignerUsa}>
                    Product Designer, USA
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.feedbackCard}>
              <div className={styles.innerContent}>
                <div className={styles.profile}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/ellipse.svg"
                    />
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/profile.png"
                    />
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/quote.svg"
                    />
                  </div>
                </div>
                <div className={styles.starParent}>
                  <div className={styles.star}>
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/gray-star.svg"
                    />
                  </div>
                  <div className={styles.loremIpsumHasContainer}>
                    <span className={styles.loremIpsumHasContainer1}>
                      <p className={styles.loremIpsumHas}>
                        Lorem Ipsum has been the industry's standard dummy text
                        since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make type specimen book has
                        survived not five centuries but also the leap into
                        electronic.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.name}>
                  <div className={styles.saraAlexander}>Sara Alexander</div>
                  <div className={styles.productDesignerUsa}>
                    Product Designer, USA
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.feedbackCard}>
              <div className={styles.innerContent}>
                <div className={styles.profile}>
                  <div className={styles.ellipseParent}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/ellipse.svg"
                    />
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/profile.png"
                    />
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/quote.svg"
                    />
                  </div>
                </div>
                <div className={styles.starParent}>
                  <div className={styles.star}>
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/yellow-star.svg"
                    />
                    <img
                      className={styles.starChild}
                      alt=""
                      src="/gray-star.svg"
                    />
                  </div>
                  <div className={styles.loremIpsumHasContainer}>
                    <span className={styles.loremIpsumHasContainer1}>
                      <p className={styles.loremIpsumHas}>
                        Lorem Ipsum has been the industry's standard dummy text
                        since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make type specimen book has
                        survived not five centuries but also the leap into
                        electronic.
                      </p>
                    </span>
                  </div>
                </div>
                <div className={styles.name}>
                  <div className={styles.saraAlexander}>Sara Alexander</div>
                  <div className={styles.productDesignerUsa}>
                    Product Designer, USA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>

      {/* <div className={styles.elipse}>
          <img className={styles.elipseChild} alt="" src="/ellipse-dg.svg" />
          <img className={styles.elipseChild} alt="" src="/ellipse-g.svg" />
          <img className={styles.elipseChild} alt="" src="/ellipse-g.svg" />
        </div> */}
    </div>
  );
};

export default Feedback;
