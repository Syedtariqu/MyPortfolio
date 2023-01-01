import "./Project.css";
import { motion } from "framer-motion"
const titleVariants = {
  hidden: {
    y: 30,
    opacity: 0
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      duration: 2,
      type: 'spring',
      stiffness: 100
    }
  }
}

const Project = ({ img }) => {
  return (
    <motion.div className="p"
      variants={titleVariants}
      initial="hidden"
      whileInView="visible">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a target="_blank" rel="noreferrer">
        <img src={img} className="p-img" />
      </a>
    </motion.div>
  );
};

export default Project;