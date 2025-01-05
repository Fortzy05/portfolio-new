import React from "react";
import fortune from "../images/fortune.jpg";
import styles from "../../styles/contacts.module.css";
import { Links } from "../contents";
import { VscLocation } from "react-icons/vsc";

function Contact() {
  return (
    <div className={styles.contacts}>
      <div className={styles.contentssides}>
        <div className={styles.reach}>Reach Out to me !</div>
        <div className={styles.invit}>
          Discuss A Project or Just Want To Say Hi ? My DM's are always OPEN
        </div>
        <div className={styles.location}>
          <VscLocation /> Lagos, Nigeria
        </div>
        <div>
          <ul>
            {Links.map((link, idx) => (
              <div key={idx}>
                <li className={styles.linkicons}>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={link.url}
                    className={styles.clinks}
                  >
                    <link.icons />
                  </a>
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.imageside}>
        <img src={fortune} alt="Fortune" className={styles.cimage} />
      </div>
    </div>
  );
}

export default Contact;
