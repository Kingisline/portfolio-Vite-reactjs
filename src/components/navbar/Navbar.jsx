import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss"
import {motion} from "framer-motion"


const Navbar = () => {
    return (
        <div className="navbar">

        {/* Sidebar */}
        <Sidebar/>


        <div className="wrapper">
            <motion.span initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration:0.5, }}>Kakashi</motion.span>
            <div className="social">
            <a href="https://www.linkedin.com/in/kalaivanan-c-86a140285/"><img src={import.meta.env.BASE_URL + "./linkedin.png"} alt=""/></a>
            <a href="https://www.instagram.com/ppl_call_me_as_bad_capton?igsh=NG1tYmpsYW5jcWY="><img src={import.meta.env.BASE_URL +"./instagram.png"} alt=""/></a>
            <a href="https://youtube.com/@ctrlalttech-k7j?si=L2CU2veKi0uFh6lF"><img src={import.meta.env.BASE_URL +"./youtube.png" }alt=""/></a>
            <a href="https://github.com/Kingisline"><img src={import.meta.env.BASE_URL +"./github.png"} alt=""/></a>

        </div>
        </div>

        </div>
    )
}



export default Navbar;