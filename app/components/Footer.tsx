import type { NextPage } from "next";
import styles from "../footer.module.css";

const Footer: NextPage = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.innerFooter}>
        <div className={styles.logoFooter}>
          <div className={styles.logo}>
            <img className={styles.vectorIcon} alt="" src="/Logo.svg" />
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
          <div className={styles.creativeWritingParent}>
            <div className={styles.caribbeanCtWrapper}>
              <div className={styles.caribbeanCt}>Caribbean Ct</div>
            </div>
            <div className={styles.haymarketVirginiaVaWrapper}>
              <div className={styles.haymarketVirginiaVa}>
                Haymarket, Virginia (VA).
              </div>
            </div>
            <div className={styles.logo}>
              <img className={styles.vectorIcon1} alt="" src="/email.svg" />
              <div className={styles.haymarketVirginiaVa}>
                address@gmail.com
              </div>
            </div>
            <div className={styles.logo}>
              <img className={styles.vectorIcon2} alt="" src="/phone.svg" />
              <div className={styles.haymarketVirginiaVa}>(970) 262-1413</div>
            </div>
            <div className={styles.socials}>
              <img className={styles.vectorIcon3} alt="" src="/facebook.svg" />
              <img className={styles.vectorIcon4} alt="" src="/twitter.svg" />
              <img className={styles.vectorIcon5} alt="" src="/instagram.svg" />
              <img className={styles.vectorIcon5} alt="" src="/linkedin.svg" />
            </div>
          </div>
        </div>
        <div className={styles.category}>
          <div className={styles.quickLinksWrapper}>
            <div className={styles.caribbeanCt}>Category</div>
          </div>
          <div className={styles.creativeWritingParent}>
            <div className={styles.haymarketVirginiaVa}>Creative Writing</div>
            <div className={styles.haymarketVirginiaVa}>Film & Video</div>
            <div className={styles.haymarketVirginiaVa}>Graphic Design</div>
            <div className={styles.haymarketVirginiaVa}>UI/UX Design</div>
            <div className={styles.haymarketVirginiaVa}>Business Analytics</div>
            <div className={styles.haymarketVirginiaVa}>Marketing</div>
          </div>
        </div>
        <div className={styles.category}>
          <div className={styles.quickLinksWrapper}>
            <div className={styles.caribbeanCt}>Quick Links</div>
          </div>
          <div className={styles.creativeWritingParent}>
            <div className={styles.haymarketVirginiaVa}>Privacy Policy</div>
            <div className={styles.haymarketVirginiaVa}>Discussions</div>
            <div className={styles.haymarketVirginiaVa}>T&C</div>
            <div className={styles.haymarketVirginiaVa}>Customer Support</div>
            <div className={styles.haymarketVirginiaVa}>Course Faq</div>
          </div>
        </div>
        <div className={styles.category}>
          <div className={styles.quickLinksWrapper}>
            <div className={styles.caribbeanCt}>Subscribe</div>
          </div>
          <div className={styles.subscribeText}>
            <div className={styles.haymarketVirginiaVa}>
              Connect with our newsletter
            </div>
          </div>
          <div className={styles.subscribeInput}>
            <div className={styles.input}>
              <div className={styles.emailHere}>Email here</div>
            </div>
            <div className={styles.subscribeButton}>
              <div className={styles.subscribeNow}>Subscribe Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
