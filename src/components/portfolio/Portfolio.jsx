import { useRef } from "react";
import "./Portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Smartwatch Stress Detector",
    img: "https://img.freepik.com/premium-vector/smart-watch-with-straps-blank-screen-vector-illustration_718429-469.jpg?semt=ais_hybrid&w=740&q=80",
    desc: "ESP32-C3 + MAX30102 + XGBoost ML model to detect and notify high stress levels.",
    button: "https://github.com/Kingisline/esp32-Stress-Prediction-using-Machine-learning",
  },
  {
    id: 2,
    title: "VR with Gesture Control",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRkHV0PGDQIsnSoq81HyxyhAPAFBmiYx9_xQ&s",
    desc: "	A VR headset using MPU6050 for immersive head tracking, acting like a game controller.",
    button: "https://github.com/Kingisline/Virtual-Reality-with-Gesture-Control",
  },
  {
    id: 3,
    title: "Ad Blocker with Raspberry Pi",
    img: "https://imgs.search.brave.com/MFVaiqtZ8MVmGSaDhugYKDGJU0pnpc3Tc8yby5Tyfoc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/bGVhcm4uYWRhZnJ1/aXQuY29tL2Fzc2V0/cy9hc3NldHMvMDAw/LzA0NS8zMzgvbWVk/aXVtODAwL3Jhc3Bi/ZXJyeV9waV9waWhv/bGUuZ2lmPzE1MDI4/NTQ1ODY.gif",
    desc: "	A network-wide ad-blocking solution using Pi-hole on Raspberry Pi connected to home Wi-Fi.",
    button: "https://github.com/Kingisline/-Raspberry-Pi-Zero-W-Alblocker",
  },
  {
    id: 4,
    title: "Next.js College Management App",
    img: "https://miro.medium.com/v2/resize:fit:1200/1*3EzU0vwg3ByI12HYQ66h3A.png",
    desc: "A platform for managing student info, courses, and assignments with a modern UI using Next.js and Tailwind CSS, database using PostgreSQL and authentication using JWT.",
    button: "https://github.com/Kingisline/Next.js-Full-Stack-School-Management-App",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.button}> <button>See Demo</button> </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
