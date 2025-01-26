import React from "react";
import styles from "../../styles/project.module.css";
import { PersonalProjects } from "../contents";

function Project() {
  return (
    <div className={styles.project}>
      <div className={styles.title}>Personal Projects</div>
      <div className={styles.pdesc}>
        <div>Here are some of the personal projects that I have done</div>
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 auto-cols-auto  ">
        {PersonalProjects.map((proj, idx) => (
          <div
            key={idx}
            className={`{styles.pbox}  w-[350px] text-center md:w-[460px] shadow-sm  shadow-[#4a5466] mb-[2rem]  `}
          >
            <img
              className="object-contain w-[460px]  md:w-[460px] text-center"
              src={proj.images}
              alt={proj.name}
            />
            <div
              className="text-[#4a5466] text-center text-[1.5rem] font-bold leading-[3]"
            >
              {proj.name}
            </div>
            <div className="text-[#4a5466] text-center leading-[3]">{proj.description}</div>
            <div className={styles.link}>
              <a href={proj.link}>Link</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
