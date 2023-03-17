import type { NextPage } from "next";
import styles from "../courses.module.css";
import courses from "../../public/courses-image.png";
import Image from "next/image";

const Courses: NextPage = () => {
  return (
    <div className={styles.courses}>
      <div className={styles.allcoursesheader}>
        <div className={styles.sectionName}>
          <div className={styles.allCoursesOfContainer}>
            <span>{`All `}</span>
            <span className={styles.courses1}>Courses</span>
            <span> of Edule</span>
          </div>
          <img className={styles.vectorIcon} alt="" src="/courses.svg" />
        </div>
        <div className={styles.searchfield}>
          <div className={styles.search}>
            <input
              className={styles.searchYourCourses}
              type="text"
              placeholder="Search Your Courses..."
            />
            <img className={styles.vectorsearchIcon} alt="" src="/search.svg" />
          </div>
        </div>
      </div>
      <div className={styles.categories}>
        <div className={styles.categories1}>
          <button className={styles.ui}>
            <div className={styles.uiuxDesign}>UI/UX Design</div>
          </button>
          <div className={styles.development}>
            <div className={styles.dataScience}>Development</div>
          </div>
          <div className={styles.development}>
            <div className={styles.dataScience}>Data Science</div>
          </div>
          <div className={styles.development}>
            <div className={styles.dataScience}>Business</div>
          </div>
          <div className={styles.development}>
            <div className={styles.dataScience}>Financial</div>
          </div>
          <div className={styles.development}>
            <div className={styles.dataScience}>Development</div>
          </div>
          <div className={styles.development}>
            <div className={styles.dataScience}>Data Science</div>
          </div>
        </div>
      </div>
      <div className={styles.cardcontainer} data-aos="fade-right">
        <div className={styles.card}>
          <Image
            className={styles.positiveFemaleTourismWorkerIcon}
            alt=""
            src={courses}
            placeholder="blur"
            loading="lazy"
          />
          <div className={styles.cardcontent}>
            <div className={styles.profilecategory}>
              <div className={styles.profile}>
                <img
                  className={styles.profileChild}
                  alt=""
                  src="/profile.png"
                />
                <div className={styles.jasonWilliams}>Jason Williams</div>
              </div>
              <div className={styles.category}>
                <div className={styles.science}>Science</div>
              </div>
            </div>
            <div className={styles.title}>
              <div className={styles.science}>
                <p className={styles.dataScienceAnd}>
                  Data Science and Machine Learning
                </p>
                <p className={styles.dataScienceAnd}>with Python - Hands On!</p>
              </div>
            </div>
            <div className={styles.hourslectures}>
              <div className={styles.hours}>
                <img
                  className={styles.vectorsearchIcon}
                  alt=""
                  src="/search.svg"
                />
                <div className={styles.jasonWilliams}>08 hr 15 mins</div>
              </div>
              <div className={styles.lectures}>
                <img
                  className={styles.vectorsearchIcon}
                  alt=""
                  src="/book.svg"
                />
                <div className={styles.text}>
                  <div className={styles.lectures1}>29 Lectures</div>
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.button1}>
                <div className={styles.pricing}>
                  <b className={styles.b}>$285.00</b>
                  <div className={styles.div}>$440.00</div>
                </div>
                <div className={styles.rating}>
                  <div className={styles.jasonWilliams}>4.9</div>
                  <img
                    className={styles.ratingChild}
                    alt=""
                    src="/yellow-star.svg"
                  />
                  <img
                    className={styles.ratingChild}
                    alt=""
                    src="/yellow-star.svg"
                  />
                  <img
                    className={styles.ratingChild}
                    alt=""
                    src="/yellow-star.svg"
                  />
                  <img
                    className={styles.ratingChild}
                    alt=""
                    src="/yellow-star.svg"
                  />
                  <img
                    className={styles.ratingChild}
                    alt=""
                    src="/gray-star.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.positiveFemaleTourismWorkerIcon}
            alt=""
            src={courses}
            placeholder="blur"
            loading="lazy"
          />
          <div className={styles.cardcontent}>
            <div className={styles.profilecategory}>
              <div className={styles.profile}>
                <img
                  className={styles.profileChild}
                  alt=""
                  src="/profile.png"
                />
                <div className={styles.jasonWilliams}>Jason Williams</div>
              </div>
              <div className={styles.category}>
                <div className={styles.science}>Science</div>
              </div>
            </div>
            <div className={styles.title}>
              <div className={styles.science}>
                <p className={styles.dataScienceAnd}>
                  Data Science and Machine Learning
                </p>
                <p className={styles.dataScienceAnd}>with Python - Hands On!</p>
              </div>
            </div>
            <div className={styles.hourslectures}>
              <div className={styles.hours}>
                <img
                  className={styles.vectorsearchIcon}
                  alt=""
                  src="/search.svg"
                />
                <div className={styles.jasonWilliams}>08 hr 15 mins</div>
              </div>
              <div className={styles.lectures}>
                <img
                  className={styles.vectorsearchIcon}
                  alt=""
                  src="/book.svg"
                />
                <div className={styles.text}>
                  <div className={styles.lectures1}>29 Lectures</div>
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.button1}>
                <div className={styles.pricing}>
                  <b className={styles.b}>$285.00</b>
                  <div className={styles.div}>$440.00</div>
                </div>
                <div className={styles.rating}>
                  <div className={styles.jasonWilliams}>4.9</div>
                  <img
                    className={styles.ratingChild}
                    alt=""
                    src="/yellow-star.svg"
                  />
                  <img
                    className={styles.ratingChild}
                    alt=""
                    src="/yellow-star.svg"
                  />
                  <img
                    className={styles.ratingChild}
                    alt=""
                    src="/yellow-star.svg"
                  />
                  <img
                    className={styles.ratingChild}
                    alt=""
                    src="/yellow-star.svg"
                  />
                  <img
                    className={styles.ratingChild}
                    alt=""
                    src="/gray-star.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.positiveFemaleTourismWorkerIcon}
            alt=""
            src={courses}
            placeholder="blur"
            loading="lazy"
          />
          <div className={styles.cardcontent}>
            <div className={styles.profilecategory}>
              <div className={styles.profile}>
                <img
                  className={styles.profileChild}
                  alt=""
                  src="/profile.png"
                />
                <div className={styles.jasonWilliams}>Jason Williams</div>
              </div>
              <div className={styles.category}>
                <div className={styles.science}>Science</div>
              </div>
            </div>
            <div className={styles.title}>
              <div className={styles.science}>
                <p className={styles.dataScienceAnd}>
                  Data Science and Machine Learning
                </p>
                <p className={styles.dataScienceAnd}>with Python - Hands On!</p>
              </div>
            </div>
            <div className={styles.hourslectures}>
              <div className={styles.hours}>
                <img
                  className={styles.vectorsearchIcon}
                  alt=""
                  src="/search.svg"
                />
                <div className={styles.jasonWilliams}>08 hr 15 mins</div>
              </div>
              <div className={styles.lectures}>
                <img
                  className={styles.vectorsearchIcon}
                  alt=""
                  src="/book.svg"
                />
                <div className={styles.text}>
                  <div className={styles.lectures1}>29 Lectures</div>
                </div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.button1}>
                <div className={styles.pricing}>
                  <b className={styles.b}>$285.00</b>
                  <div className={styles.div}>$440.00</div>
                </div>
                <div className={styles.rating}>
                  <div className={styles.jasonWilliams}>4.9</div>
                  <img
                    className={styles.ratingChild}
                    alt=""
                    src="/yellow-star.svg"
                  />
                  <img
                    className={styles.ratingChild}
                    alt=""
                    src="/yellow-star.svg"
                  />
                  <img
                    className={styles.ratingChild}
                    alt=""
                    src="/yellow-star.svg"
                  />
                  <img
                    className={styles.ratingChild}
                    alt=""
                    src="/yellow-star.svg"
                  />
                  <img
                    className={styles.ratingChild}
                    alt=""
                    src="/gray-star.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a href="" style={{ textDecoration: "none" }}>
        <div className={styles.otherCourses}>
          <div className={styles.otherCourses1}>Other Courses</div>
        </div>
      </a>
    </div>
  );
};

export default Courses;
