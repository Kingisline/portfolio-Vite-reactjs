import { useRef } from "react";
import "./Services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        I specialize in building smart, connected, 
          <br /> and user-friendly applications.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>IoT Projects - eg.raspi</h2>
          <p>
          Created a motion-based controller using an MPU6050 sensor and Arduino. Used tilt angles to control movement in games like Minecraft. Learned mouse emulation, angle math, and real-time input mapping.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Gyroscopic Game Controller with MPU6050</h2>
          <p>
          Created a motion-based controller using an MPU6050 sensor and Arduino. Used tilt angles to control movement in games like Minecraft. Learned mouse emulation, angle math, and real-time input mapping.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>ML Integration on Edge Devices</h2>
          <p>
          Built a wearable device using ESP32 and MAX30102 to measure pulse and oxygen levels. Applied machine learning to predict real-time stress levels and alert users when thresholds are exceeded.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>App Development & Automation</h2>
          <p>
          Developed a local music player app in Java for Android. The app scans device storage and features playback control, album art, volume slider, and real-time progress adjustment functionality.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;