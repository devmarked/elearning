import type { NextPage } from "next";
import styles from "../blog.module.css";

const Blog: NextPage = () => {
  return (
    <div className={styles.blog}>
      <div className={styles.heading}>
        <div className={styles.latestNews}>Latest News</div>
        <div className={styles.title}>
          <div className={styles.educationalTipsContainer}>
            <span>{`Educational Tips & `}</span>
            <span className={styles.tricks}>Tricks</span>
          </div>
          <img className={styles.titleChild} alt="" src="/tricks.svg" />
        </div>
      </div>
      <div className={styles.blogCards} data-aos="zoom-in">
        <div className={styles.blogCard}>
          <div className={styles.blogCardContent}>
            <div className={styles.button}>
              <div className={styles.readMore}>Read More</div>
            </div>
            <div className={styles.durationlecture}>
              <div className={styles.duration}>
                <img className={styles.vectorIcon} alt="" src="/time.svg" />
                <div className={styles.hr15Mins}>08 hr 15 mins</div>
              </div>
              <div className={styles.lectures}>
                <img className={styles.vectorIcon1} alt="" src="/book.svg" />
                <div className={styles.hr15Mins}>29 Lectures</div>
              </div>
            </div>
            <div className={styles.title1}>
              <div className={styles.dataScienceAndContainer}>
                <p className={styles.dataScienceAnd}>
                  Data Science and Machine Learning
                </p>
                <p className={styles.dataScienceAnd}>
                  with Python - Hands On! 1
                </p>
              </div>
            </div>
            <div className={styles.name}>
              <div className={styles.name1}>
                <img className={styles.imageIcon} alt="" src="/profile.png" />
                <div className={styles.hr15Mins}>Jason Williams</div>
              </div>
              <div className={styles.category}>
                <div className={styles.dataScienceAndContainer}>Science</div>
              </div>
            </div>
            <div className={styles.image}>
              <img className={styles.imageChild} alt="" src="/blog.jpg" />
            </div>
          </div>
        </div>
        <div className={styles.blogCard}>
          <div className={styles.blogCardContent}>
            <div className={styles.button}>
              <div className={styles.readMore}>Read More</div>
            </div>
            <div className={styles.durationlecture}>
              <div className={styles.duration}>
                <img className={styles.vectorIcon} alt="" src="/time.svg" />
                <div className={styles.hr15Mins}>08 hr 15 mins</div>
              </div>
              <div className={styles.lectures}>
                <img className={styles.vectorIcon1} alt="" src="/book.svg" />
                <div className={styles.hr15Mins}>29 Lectures</div>
              </div>
            </div>
            <div className={styles.title1}>
              <div className={styles.dataScienceAndContainer}>
                <p className={styles.dataScienceAnd}>
                  Data Science and Machine Learning
                </p>
                <p className={styles.dataScienceAnd}>
                  with Python - Hands On! 1
                </p>
              </div>
            </div>
            <div className={styles.name}>
              <div className={styles.name1}>
                <img className={styles.imageIcon} alt="" src="/profile.png" />
                <div className={styles.hr15Mins}>Jason Williams</div>
              </div>
              <div className={styles.category}>
                <div className={styles.dataScienceAndContainer}>Science</div>
              </div>
            </div>
            <div className={styles.image}>
              <img className={styles.imageChild} alt="" src="/blog.jpg" />
            </div>
          </div>
        </div>
        <div className={styles.blogCard}>
          <div className={styles.blogCardContent}>
            <div className={styles.button}>
              <div className={styles.readMore}>Read More</div>
            </div>
            <div className={styles.durationlecture}>
              <div className={styles.duration}>
                <img className={styles.vectorIcon} alt="" src="/time.svg" />
                <div className={styles.hr15Mins}>08 hr 15 mins</div>
              </div>
              <div className={styles.lectures}>
                <img className={styles.vectorIcon1} alt="" src="/book.svg" />
                <div className={styles.hr15Mins}>29 Lectures</div>
              </div>
            </div>
            <div className={styles.title1}>
              <div className={styles.dataScienceAndContainer}>
                <p className={styles.dataScienceAnd}>
                  Data Science and Machine Learning
                </p>
                <p className={styles.dataScienceAnd}>
                  with Python - Hands On! 1
                </p>
              </div>
            </div>
            <div className={styles.name}>
              <div className={styles.name1}>
                <img className={styles.imageIcon} alt="" src="/profile.png" />
                <div className={styles.hr15Mins}>Jason Williams</div>
              </div>
              <div className={styles.category}>
                <div className={styles.dataScienceAndContainer}>Science</div>
              </div>
            </div>
            <div className={styles.image}>
              <img className={styles.imageChild} alt="" src="/blog.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
