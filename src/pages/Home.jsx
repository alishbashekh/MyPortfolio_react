import Hero from "../Components/Hero";
import Skills from "../Components/Skills";
import ProjectSection from "../Components/ProjectSection";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";

const Home = ({ dark }) => {

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <Hero dark={dark} />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Skills dark={dark} />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ProjectSection dark={dark} />
      </motion.div>

      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Footer dark={dark} />
      </motion.div>
    </>
  );
};

export default Home;
