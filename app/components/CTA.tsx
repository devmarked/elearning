import type { NextPage } from "next";
import styles from "../cta.module.css";

const CTA: NextPage = () => {
  return (
    <div className={styles.cta}>
      <div className={styles.cta1}>
        <div className={styles.content}>
          <div className={styles.text}>
            <div className={styles.startYourFavourite}>
              Start your favourite course
            </div>
            <div className={styles.youCanJoinContainer}>
              <p className={styles.youCanJoin}>You can join with Edule</p>
              <p className={styles.youCanJoin}>
                <span>{`as `}</span>
                <span className={styles.aInstructor}>a instructor?</span>
              </p>
            </div>
            <img className={styles.textChild} alt="" src="/instructor.svg" />
          </div>
          <a href="" style={{ textDecoration: "none" }}>
            <div className={styles.dropinformationbutton}>
              <div className={styles.dropInformation}>Drop Information</div>
            </div>
          </a>
        </div>
        <img className={styles.arrowIcon} alt="" src="/cta-arrow.svg" />
        <img className={styles.vectorIcon} alt="" src="/cta-left.svg" />
        <img className={styles.vectorIcon1} alt="" src="/cta-right.svg" />
      </div>
    </div>
  );
};

export default CTA;
