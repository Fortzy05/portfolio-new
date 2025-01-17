import React from "react";
import styles from "../../styles/home.module.css";
import Lottie from "react-lottie";
import codingAnimation from "../lotties/codinglottie.json";
import resume from "../docs/resume_fortune_omorodion-frontend.pdf";
import image from "../../components/images/Moon.svg";
function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: codingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className={`${styles.home} flex text-[#fff] justify-between z-0 min-h-screen `}
    >
      <div className={`${styles.main} my-0 mx-[2rem] md:mt-[20vh] md:ml-[5rem] z-[80]`}>
        <div className={`${styles.intro} text-[3rem] text-white mb-[1rem] `}>
          <div className={styles.text}>Hi I'm Fortune</div>
        </div>
        <div className={styles.intro2}>
          <div className="text-[1.2rem]">
            I'm passionate Full Stack web developer having an experience of web
            applications with Nodejs, React.js, Next.js and Mobile Development
            development on React Native.
          </div>
        </div>
        <div className="mt-[1.4rem] p-[0.8rem] border-[#75b3be] border-[1px] md:w-[20%] w-[30%] text-[1.2rem] cursor-pointer text-[#75b3be] text-center rounded-[5px] hover:bg-[#32325d] transition-all ease-in-out duration-[0.3s]">
          <a href={resume}>Resume</a>
        </div>
      </div>
      <Lottie options={defaultOptions} />
    </div>
  );
}

export default Home;
