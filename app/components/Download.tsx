import type { NextPage } from "next";
// import { useCallback } from "react";
import styles from "../download.module.css";

const Download: NextPage = () => {
  // const onDownloadGooglePlayClick = useCallback(() => {
  //   window.open("https://facebook.com");
  // }, []);

  // const onDownloadOnTheAppStoreClick = useCallback(() => {
  //   window.open("https://facebook.com");
  // }, []);

  return (
    <div className={styles.download}>
      <div className={styles.app}>
        <div className={styles.innerHeadingParent}>
          <div className={styles.innerHeading}>
            <div className={styles.readyToStart}>Ready to start?</div>
            <div className={styles.downloadOurMobileContainer}>
              <p className={styles.downloadOurMobile}>
                Download our mobile app.
              </p>
              <p className={styles.downloadOurMobile}>
                for easy to start your course.
              </p>
            </div>
          </div>
          <img
            className={styles.arrowIcon}
            alt=""
            data-aos="fade-right"
            src="/download-arrow.svg"
          />
          <div className={styles.downloads} data-aos="fade-left">
            <button
              className={styles.downloadGooglePlay}
              // onClick={onDownloadGooglePlayClick}
            >
              <div className={styles.downloadGoogle}>
                <div className={styles.innerContent}>
                  <img
                    className={styles.vectorIcon}
                    alt=""
                    src="/googleplay.svg"
                  />
                  <div className={styles.downloadGoogle}>
                    <div className={styles.getItNow}>Get it now</div>
                    <div className={styles.googlePlay1}>Google Play</div>
                  </div>
                </div>
              </div>
            </button>
            <button
              className={styles.downloadOnTheAppStore}
              // onClick={onDownloadOnTheAppStoreClick}
            >
              <div className={styles.downloadGoogle}>
                <div className={styles.logo}>
                  <img className={styles.vectorIcon1} alt="" src="apple.svg" />
                  <div className={styles.downloadGoogle}>
                    <div
                      className={styles.downloadOnThe}
                    >{`Download on the `}</div>
                    <div className={styles.appStore}>App Store</div>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
