import Hero from "../Components/Hero";
import Skills from "../Components/Skills";
import ProjectSection from "../Components/ProjectSection";


const Home = ({ dark }) => {
  return (
    <>
      <Hero dark={dark} />
      <Skills dark={dark} />
      <ProjectSection dark={dark} />
    </>
  );
};

export default Home;
