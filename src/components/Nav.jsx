import React, { useState } from "react";
import styles from "../styles/nav.module.css";
import Navmodal from "./comps/Navmodal";
import { FaBars } from "react-icons/fa";
import { Links } from "./contents";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="flex justify-between py-[0.5rem] px-[1.3rem] text-white text-[1.5rem] bg-[url('components/images/Moon.svg')] items-center">
      <div className={styles.logo}>
        <a href="/">{"<Fortune/>"}</a>
      </div>
      <div className={styles.socials}>
        <ul>
          {Links.map((link, idx) => (
            <div key={idx}>
              <li>
                <a target="_blank" rel="noreferrer" href={link.url}>
                  <link.icons />
                </a>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <button className={styles.modalbtn} onClick={toggle}>
        <FaBars />
      </button>
      <Navmodal show={isOpen} onClose={toggle} />
    </div>
  );
}

export default Nav;
