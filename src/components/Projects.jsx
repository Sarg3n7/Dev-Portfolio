// import { useState, useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ExternalLink } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// /* 🔁 Updated project data
//    - Added `url` for each project (replace '#' with your GitHub/live links).
//    - Second project: "AI Powered Interview Assistant" with your stack + a concise description + tags. */
// const projectsData = [
//   {
//     name: "Ride Booking Platform",
//     tech: ["React", "Node.js", "Express", "MongoDB", "Microservices"],
//     description: "JWT auth, faster response, scalable architecture",
//     images: ["/project_screenshots/Home.png", "/project_screenshots/Home.png"],
//     tags: ["Microservices", "Real-time", "Google Maps API", "Socket.IO"],
//     url: "https://github.com/Sarg3n7/Uber-Clone", /* 🆕 */
//   },
//   {
//     name: "AI Powered Interview Assistant", /* 🔁 */
//     tech: ["React", "Redux Toolkit", "Ant Design", "Google Gemini API"], /* 🔁 */
//     description:
//       "Conversational mock interviews powered by Gemini with role-specific question sets, timed sessions, AI feedback, and scoring. Includes answer history and progress tracking in a clean Ant Design UI.", /* 🆕 */
//     images: ["/project_screenshots/AI Powered Interview.png", "/project_screenshots/AI Powered Interview.png"],
//     tags: ["Generative AI", "Interview Prep", "LLM", "Web App"], /* 🆕 */
//     url: "https://github.com/Sarg3n7/AI-Powered-Interview-Assitant", /* 🆕 */
//   },
//   {
//     name: "Virtual AI Assistant",
//     tech: ["MERN", "Microservices", "Cloudinary", "Google Gemini AI"],
//     description: "Real-time voice assistant with low latency",
//     images: ["/project_screenshots/Virtual-Assistant.png", "/project_screenshots/Virtual-Assistant-2.png"],
//     tags: ["AI Integration", "Voice Recognition", "JWT", "Real-time"],
//     url: "https://github.com/Sarg3n7/Virtual-AI-Assistant", /* 🆕 */
//   },
// ];

// const Projects = () => {
//   const [hoveredProject, setHoveredProject] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [activeIndex, setActiveIndex] = useState(0);

//   const counterRef = useRef(null);
//   const progressRef = useRef(null);
//   const listRef = useRef(null);            /* 🆕 scope GSAP triggers to this list */

//   /* 🔁 Rebuilt trigger logic:
//      - Use a class selector `.project-section` instead of IDs.
//      - Wider start/end thresholds to ensure reliable section handoff.
//      - Refresh ScrollTrigger after images load to fix stale measurements.
//   */
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const sections = gsap.utils.toArray(".project-section"); /* 🆕 */

//       sections.forEach((section, i) => {
//         ScrollTrigger.create({
//           trigger: section,
//           start: "top 60%",       /* 🆕 when top of card hits 60% viewport */
//           end: "bottom 40%",      /* 🆕 until bottom crosses 40% viewport */
//           onEnter: () => setActiveIndex(i),
//           onEnterBack: () => setActiveIndex(i),
//           invalidateOnRefresh: true, /* 🆕 */
//         });
//       });
//     }, listRef);

//     // 🆕 Refresh after images load to avoid incorrect trigger bounds
//     const imgs = listRef.current?.querySelectorAll("img") ?? [];
//     let remaining = imgs.length;

//     const done = () => {
//       if (--remaining <= 0) {
//         ScrollTrigger.refresh();
//       }
//     };

//     if (remaining === 0) {
//       ScrollTrigger.refresh();
//     } else {
//       imgs.forEach((img) => {
//         if (img.complete) {
//           done();
//         } else {
//           img.addEventListener("load", done, { once: true });
//           img.addEventListener("error", done, { once: true });
//         }
//       });
//     }

//     // Also refresh once on mount just in case
//     setTimeout(() => ScrollTrigger.refresh(), 0); /* 🆕 */

//     return () => ctx.revert();
//   }, []);

//   /* keep the nice counter/progress animation */
//   useEffect(() => {
//     if (counterRef.current) {
//       gsap.to(counterRef.current, {
//         textContent: activeIndex + 1,
//         duration: 0.4,
//         snap: { textContent: 1 },
//         ease: "power2.out",
//       });
//     }
//     if (progressRef.current) {
//       gsap.to(progressRef.current, {
//         scaleX: (activeIndex + 1) / projectsData.length,
//         duration: 0.4,
//         ease: "power2.out",
//       });
//     }
//   }, [activeIndex]);

//   const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

//   return (
//     <div className="section-container" id="projects" onMouseMove={handleMouseMove}>
//       <h2 className="section-title text-center mb-4">Projects</h2>
//       <p className="text-center text-xl text-[hsl(var(--muted-foreground))] mb-16">
//         Selected builds—hover to peek.
//       </p>

//       <div className="flex gap-12 max-w-6xl mx-auto">
//         {/* Sticky Project Index */}
//         <div className="hidden lg:block sticky top-1/2 -translate-y-1/2 h-fit">
//           <div className="text-6xl font-bold text-[hsl(var(--muted-foreground))/0.30]">
//             <span ref={counterRef} className="text-[hsl(var(--primary))]">{activeIndex + 1}</span>
//             <span className="mx-1">/</span>
//             <span className="text-[hsl(var(--foreground))/0.40]">{projectsData.length}</span>
//           </div>
//           <div className="w-32 h-2 bg-[hsl(var(--muted))] mt-4 rounded-full overflow-hidden">
//             <div ref={progressRef} className="h-full bg-[hsl(var(--primary))] origin-left" style={{ transform: "scaleX(0)" }} />
//           </div>
//         </div>

//         {/* Projects List */}
//         <div className="flex-1 space-y-12" ref={listRef}> {/* 🆕 ref for GSAP context */}
//           {projectsData.map((project, index) => (
//             <div
//               key={index}
//               className="project-section group" /* 🆕 class used by GSAP */
//               onMouseEnter={() => setHoveredProject(index)}
//               onMouseLeave={() => setHoveredProject(null)}
//             >
//               {/* Clickable card */}
//               <a
//                 href={project.url || "#"}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] rounded-xl"
//                 aria-label={`Open ${project.name}`}
//               >
//                 <div className="card hover:shadow-xl transition-all duration-300 cursor-pointer">
//                   <div className="flex items-start justify-between mb-4">
//                     <h3 className="text-3xl font-bold group-hover:text-[hsl(var(--primary))] transition-colors">
//                       {project.name}
//                     </h3>
//                     <ExternalLink className="w-6 h-6 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] transition-colors" />
//                   </div>

//                   <p className="text-[hsl(var(--muted-foreground))] mb-4">
//                     {project.description}
//                   </p>

//                   {/* Tech Stack */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tech.map((tech, idx) => (
//                       <span key={idx} className="px-3 py-1 bg-[hsl(var(--muted))] text-sm rounded-full font-medium">
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Tags */}
//                   <div className="flex flex-wrap gap-2">
//                     {project.tags.map((tag, idx) => (
//                       <span key={idx} className="px-3 py-1 bg-[hsl(var(--primary))/0.10] text-[hsl(var(--primary))] text-xs rounded-full font-semibold">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* View Others (outline only, dark grey) */}
//       <div className="max-w-6xl mx-auto">
//         <div className="mt-14 flex justify-center">
//           <a
//             href="#" /* 🆕 replace with your GitHub profile */
//             target="_blank"
//             rel="noopener noreferrer"
//             className="
//               inline-flex items-center justify-center px-6 py-3 rounded-full
//               font-semibold border-2
//               border-[hsl(var(--foreground))/0.6] text-[hsl(var(--foreground))/0.85]
//               hover:-translate-y-0.5 hover:shadow-md
//               transition-all duration-200
//             "
//             aria-label="View more projects on GitHub"
//           >
//             View Others
//           </a>
//         </div>
//       </div>

//       {/* Hover Preview (Desktop) */}
//       {hoveredProject !== null && (
//         <div className="hidden lg:block fixed pointer-events-none z-50" style={{ left: mousePosition.x + 20, top: mousePosition.y + 20 }}>
//           <div className="bg-[hsl(var(--card))] rounded-xl shadow-2xl p-4 max-w-md animate-fade-in-scale">
//             <img
//               src={projectsData[hoveredProject].images[0]}
//               alt={`${projectsData[hoveredProject].name} preview`}
//               className="w-full h-48 object-cover rounded-lg"
//               loading="lazy"
//               decoding="async"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Projects;





import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, ArrowRight } from "lucide-react"; /* 🆕 added icons */

gsap.registerPlugin(ScrollTrigger);

/* project data (add your real URLs) */
const projectsData = [
  {
    name: "Ride Booking Platform",
    tech: ["React", "Node.js", "Express", "MongoDB", "Microservices"],
    description: "A full-fledged Uber-like ride booking application built with the MERN stack, featuring real-time ride updates with Socket.IO and Google Maps integration for location search and live tracking.",
    images: ["/project_screenshots/Home.png", "/project_screenshots/Home.png"],
    tags: ["Microservices", "Real-time", "Google Maps API", "Socket.IO"],
    url: "https://github.com/Sarg3n7/Uber-Clone",
  },
  {
    name: "AI Powered Interview Assistant",
    tech: ["React", "Redux Toolkit", "Ant Design", "Google Gemini API"],
    description:
      "Conversational mock interviews powered by Gemini with role-specific question sets, timed sessions, AI feedback, and scoring. Includes answer history and progress tracking in a clean Ant Design UI.",
    images: ["/project_screenshots/AI Powered Interview.png", "/project_screenshots/AI Powered Interview.png"],
    tags: ["Generative AI", "Interview Prep", "LLM", "Web App"],
    url: "https://github.com/Sarg3n7/AI-Powered-Interview-Assitant",
  },
  {
    name: "Virtual AI Assistant",
    tech: ["MERN", "Microservices", "Cloudinary", "Google Gemini AI"],
    description: "An AI-powered virtual assistant built with MERN and Google Gemini AI. It can listen to your voice, respond with speech (US accent), search on Google & YouTube, open apps like Instagram/Facebook, show weather, answer general questions, and more.",
    images: ["/project_screenshots/Virtual-Assistant.png", "/project_screenshots/Virtual-Assistant-2.png"],
    tags: ["AI Integration", "Voice Recognition", "JWT", "Real-time"],
    url: "https://github.com/Sarg3n7/Virtual-AI-Assistant",
  },
];

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = useState(0);

  const counterRef = useRef(null);
  const progressRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".project-section");

      sections.forEach((section, i) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 60%",
          end: "bottom 40%",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
          invalidateOnRefresh: true,
        });
      });
    }, listRef);

    const imgs = listRef.current?.querySelectorAll("img") ?? [];
    let remaining = imgs.length;
    const done = () => {
      if (--remaining <= 0) ScrollTrigger.refresh();
    };

    if (remaining === 0) {
      ScrollTrigger.refresh();
    } else {
      imgs.forEach((img) => {
        if (img.complete) {
          done();
        } else {
          img.addEventListener("load", done, { once: true });
          img.addEventListener("error", done, { once: true });
        }
      });
    }

    setTimeout(() => ScrollTrigger.refresh(), 0);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (counterRef.current) {
      gsap.to(counterRef.current, {
        textContent: activeIndex + 1,
        duration: 0.4,
        snap: { textContent: 1 },
        ease: "power2.out",
      });
    }
    if (progressRef.current) {
      gsap.to(progressRef.current, {
        scaleX: (activeIndex + 1) / projectsData.length,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [activeIndex]);

  const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

  return (
    <div className="section-container" id="projects" onMouseMove={handleMouseMove}>
      <h2 className="section-title text-center mb-4">Projects</h2>
      <p className="text-center text-xl text-[hsl(var(--muted-foreground))] mb-16">
        Selected builds—hover to peek.
      </p>

      <div className="flex gap-12 max-w-6xl mx-auto">
        {/* Sticky Project Index */}
        <div className="hidden lg:block sticky top-1/2 -translate-y-1/2 h-fit">
          <div className="text-6xl font-bold text-[hsl(var(--muted-foreground))/0.30]">
            <span ref={counterRef} className="text-[hsl(var(--primary))]">
              {activeIndex + 1}
            </span>
            <span className="mx-1">/</span>
            <span className="text-[hsl(var(--foreground))/0.40]">
              {projectsData.length}
            </span>
          </div>
          <div className="w-32 h-2 bg-[hsl(var(--muted))] mt-4 rounded-full overflow-hidden">
            <div
              ref={progressRef}
              className="h-full bg-[hsl(var(--primary))] origin-left"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </div>

        {/* Projects List */}
        <div className="flex-1 space-y-12" ref={listRef}>
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="project-section group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <a
                href={project.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] rounded-xl"
                aria-label={`Open ${project.name}`}
              >
                <div className="card hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-3xl font-bold group-hover:text-[hsl(var(--primary))] transition-colors">
                      {project.name}
                    </h3>
                    <ExternalLink className="w-6 h-6 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] transition-colors" />
                  </div>

                  <p className="text-[hsl(var(--muted-foreground))] mb-4">
                    {project.description}
                  </p>


                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-[hsl(var(--muted))] text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>


                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* View Others (outline only, dark grey) */}
      <div className="max-w-6xl mx-auto">
        <div className="mt-14 flex justify-center">
          <a
            href="https://github.com/Sarg3n7" /* replace with your GitHub profile */
            target="_blank"
            rel="noopener noreferrer"
            className="
              group /* 🆕 enables arrow nudge */
              inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full
              font-semibold border-2
              border-[hsl(var(--foreground))/0.6] text-[hsl(var(--foreground))/0.85]
              hover:-translate-y-0.5 hover:shadow-md
              transition-all duration-200
            "
            aria-label="View more projects on GitHub"
          >
            <Github className="w-5 h-5" aria-hidden="true" /> {/* 🆕 left icon */}
            <span>View My Other Works</span>
            <ArrowRight
              className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            /> {/* 🆕 right arrow */}
          </a>
        </div>
      </div>

      {/* Hover Preview (Desktop) */}
      {hoveredProject !== null && (
        <div
          className="hidden lg:block fixed pointer-events-none z-50"
          style={{ left: mousePosition.x + 20, top: mousePosition.y + 20 }}
        >
          <div className="bg-[hsl(var(--card))] rounded-xl shadow-2xl p-4 max-w-md animate-fade-in-scale">
            <img
              src={projectsData[hoveredProject].images[0]}
              alt={`${projectsData[hoveredProject].name} preview`}
              className="w-full h-48 object-cover rounded-lg"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
