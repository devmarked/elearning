"use client";

import type { NextPage } from "next";
import styles from "../howitwork.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HowItWork: NextPage = () => {
  return (
    <div className={styles.howItWork}>
      <div className={styles.innerContent}>
        <div className={styles.heading}>
          <div className={styles.over}>
            <div className={styles.over1235Course}>Over 1,235+ Course</div>
          </div>
          <div className={styles.howItWork1}>
            <div className={styles.howItWorkContainer}>
              <span>{`How It `}</span>
              <span className={styles.work}>Work?</span>
            </div>
            <img className={styles.howItWorkChild} alt="" src="/work.svg" />
          </div>
        </div>
        <div className={styles.innerContents} data-aos="fade-right">
          <div className={styles.findYourCourse}>
            <img className={styles.findYourCourseChild} alt="" src="/fyc.svg" />
            <div className={styles.content}>
              <div className={styles.over}>
                <img
                  className={styles.searchicon1}
                  alt=""
                  src="/searchicon.svg"
                />
              </div>
              <div className={styles.innerText}>
                <div className={styles.findYourCourse1}>Find Your Course</div>
                <div className={styles.itHasSurvivedContainer}>
                  <p className={styles.itHasSurvived}>
                    It has survived not only five centuries but also
                  </p>
                  <p className={styles.itHasSurvived}>
                    the leap into electronic typesetting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.innerContentsChild}
            alt=""
            src="/how-arrow.svg"
          />
          <div className={styles.bookASeat}>
            <img
              className={styles.bookASeatChild}
              alt=""
              src="/bookaseat.svg"
            />
            <div className={styles.content1}>
              <div className={styles.bookASeat1}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/bookaseaticon.svg"
                />
              </div>
              <div className={styles.innerText}>
                <div className={styles.findYourCourse1}>Book A Seat</div>
                <div className={styles.itHasSurvivedContainer}>
                  <p className={styles.itHasSurvived}>
                    It has survived not only five centuries but also
                  </p>
                  <p className={styles.itHasSurvived}>
                    the leap into electronic typesetting.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.innerContentsChild}
            alt=""
            src="/how-arrow.svg"
          />
          <div className={styles.getCertificate}>
            <div className={styles.content2}>
              <div className={styles.getCertificate1}>
                <img className={styles.icon} alt="" src="/gsicon.svg" />
              </div>
              <div className={styles.innerText}>
                <div className={styles.findYourCourse1}>Get Certificate</div>
                <div className={styles.itHasSurvivedContainer}>
                  <p className={styles.itHasSurvived}>
                    It has survived not only five centuries but also
                  </p>
                  <p className={styles.itHasSurvived}>
                    the leap into electronic typesetting.
                  </p>
                </div>
              </div>
            </div>
            <img
              className={styles.getCertificateChild}
              alt=""
              src="/getcert.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
