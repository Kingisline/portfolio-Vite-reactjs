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
    img: "https://private-user-images.githubusercontent.com/98681319/403225063-80ee2fe1-539a-4d84-b76f-dace0c826808.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTM0OTU1ODUsIm5iZiI6MTc1MzQ5NTI4NSwicGF0aCI6Ii85ODY4MTMxOS80MDMyMjUwNjMtODBlZTJmZTEtNTM5YS00ZDg0LWI3NmYtZGFjZTBjODI2ODA4LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTA3MjYlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwNzI2VDAyMDEyNVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUyODJlMTZkMGMwMmZkNGMzNzU4NjA1MzFkYzY2M2U0NDNlNjViNzMwMWQ5YTYxODAyOTA3ZjgzNTNhNDgyNDMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.p9lr-b4zOxokJ8r5iGsBPTOh-DCPGyBOdw1qwOXaFS8",
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
