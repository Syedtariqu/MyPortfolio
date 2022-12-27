import "./App.css"
import { motion } from "framer-motion"
const lineVariants = {
  hidden: {
    width: 0,
  },
  visible: {
    width: "50%",
    transition: {
      delay: 0.2,
      duration: 2,
      type: 'spring',
      stiffness: 120
    }
  }
}
const LineGradient = ({ width = "w-full" }) => {
  return <motion.div variants={lineVariants} initial="hidden" whileInView="visible" className={`h-3 bg ${width} rounded-md `} />;
};
export default LineGradient;