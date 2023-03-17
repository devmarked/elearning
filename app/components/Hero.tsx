import type { NextPage } from "next";
import styles from "../hero.module.css";
import Image from "next/image";
import heroimage from "../../public/heroimage.png";
const Hero: NextPage = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.navbarcontainer}>
        <div className={styles.logocontainer}>
          <div className={styles.logo}>
            <img className={styles.logoChild} alt="" src="/Logo.svg" />
            <b className={styles.edule}>
              <span>
                <span className={styles.ed}>Ed</span>
              </span>
              <span className={styles.ule}>
                <span>u</span>
                <span className={styles.le}>Le</span>
              </span>
            </b>
          </div>
        </div>
        <div className={styles.navlinkscontainer}>
          <div className={styles.navlinks}>
            <div className={styles.home}>Home</div>
            <div className={styles.allCourse}>All Course</div>
            <div className={styles.blog}>Blog</div>
            <div className={styles.contact}>Contact</div>
          </div>
        </div>
        <div className={styles.navbuttonscontainer}>
          <div className={styles.navbuttons}>
            <div className={styles.signin}>
              <div className={styles.signIn}>Sign in</div>
            </div>
            <a href="" style={{ textDecoration: "none" }}>
              <div className={styles.signup}>
                <div className={styles.signIn}>Sign Up</div>
              </div>
            </a>
          </div>
          <img className={styles.vectorIcon} alt="" src="/hamburger.svg" />
        </div>
      </div>
      <div className={styles.hero1}>
        <div className={styles.vector1}>
          <img className={styles.vector1Child} alt="" src="/Line2.svg" />
        </div>
        <div className={styles.vector2}>
          <img className={styles.vector2Child} alt="" src="/Line1.svg" />
        </div>
        <div className={styles.heroframe}>
          <div className={styles.herotextframe}>
            <div className={styles.herotext}>
              <div className={styles.herotextlabel}>
                <div className={styles.herotextlabel1}>
                  Start your favourite course
                </div>
              </div>
              <div className={styles.herotextbig}>
                <div className={styles.nowLearningFromContainer}>
                  <p className={styles.nowLearningFrom}>Now learning from</p>
                  <p className={styles.nowLearningFrom}>anywhere, and build</p>
                  <p className={styles.nowLearningFrom}>
                    <span>{`your `}</span>
                    <span className={styles.brightCareer}>bright career.</span>
                  </p>
                </div>
                <img
                  className={styles.herotextbigChild}
                  alt=""
                  src="/brightcareer.svg"
                />
              </div>
              <div className={styles.herotextsmall}>
                <div className={styles.herotextsmall1}>
                  <p className={styles.nowLearningFrom}>
                    It has survived not only five centuries but also
                  </p>
                  <p className={styles.nowLearningFrom}>
                    the leap into electronic typesetting.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.herobuttons}>
              <a href="" style={{ textDecoration: "none", color: "white" }}>
                <div className={styles.startcourse}>
                  <div className={styles.signIn}>Start Course</div>
                </div>
              </a>
              <div className={styles.watchvideo}>
                <div className={styles.watchvideoInner}>
                  <div className={styles.groupWrapper}>
                    <div className={styles.groupWrapper}>
                      <a
                        href=""
                        style={{
                          textDecoration: "none",
                          color: "var(--color-seagreen-100)",
                        }}
                      >
                        <div className={styles.watchVideoAbout}>
                          Watch Video About Us
                        </div>
                      </a>
                      <img
                        className={styles.groupChild}
                        alt=""
                        src="/playbutton.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            className={styles.heroimage1Icon}
            data-aos="fade-up"
            alt=""
            src={heroimage}
            placeholder="blur"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
