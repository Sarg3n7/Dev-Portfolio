import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Menu from "../components/Menu";
import Hero from "../components/Hero";
import Education from "../components/Education";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "../components/About";
import Contact from "../components/Contact";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    // Chapter entrance animations
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "top 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="relative min-h-screen">
      <Menu />
      
      <section ref={addToRefs} id="home">
        <Hero />
      </section>

      <section ref={addToRefs} id="education">
        <Education />
      </section>

      <section ref={addToRefs} id="services">
        <Services />
      </section>

      <section ref={addToRefs} id="projects">
        <Projects />
      </section>

      <section ref={addToRefs} id="skills">
        <Skills />
      </section>

      <section ref={addToRefs} id="about">
        <About />
      </section>

      <section ref={addToRefs} id="contact">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
