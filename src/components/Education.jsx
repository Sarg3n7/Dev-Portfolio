// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { GraduationCap, Award } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const educationData = [
//   {
//     institution: "SSN College of Engineering",
//     degree: "B.Tech in Information Technology",
//     year: "2021 - 2025",
//     grade: "CGPA: 7.2",
//     location: "Chennai, India",
//     icon: GraduationCap,
//   },
//   {
//     institution: "Delhi Public School, Ranchi",
//     degree: "AISSCE (Class XII)",
//     year: "2019 - 2021",
//     grade: "94.8%",
//     location: "Ranchi, India",
//     icon: Award,
//   },
// ];

// const Education = () => {
//   const timelineRef = useRef(null);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     // Draw timeline
//     gsap.fromTo(
//       timelineRef.current,
//       { width: "0%" },
//       {
//         width: "100%",
//         duration: 1.5,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: timelineRef.current,
//           start: "top 80%",
//         },
//       }
//     );

//     // Animate cards
//     cardsRef.current.forEach((card, index) => {
//       if (card) {
//         gsap.fromTo(
//           card,
//           { opacity: 0, y: 40 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//             ease: "power3.out",
//             delay: 0.5 + index * 0.2,
//             scrollTrigger: {
//               trigger: card,
//               start: "top 85%",
//             },
//           }
//         );
//       }
//     });
//   }, []);

//   return (
//     <div className="section-container">
//       <h2 className="text-center mb-4">Education</h2>
//       <p className="text-center text-xl text-muted-foreground mb-16">
//         Foundations that forged my engineering instincts.
//       </p>

//       {/* Timeline */}
//       <div className="relative max-w-5xl mx-auto">
//         <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2 hidden md:block">
//           <div
//             ref={timelineRef}
//             className="h-full bg-primary"
//             style={{ width: "0%" }}
//           />
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 gap-8 relative">
//           {educationData.map((edu, index) => {
//             const Icon = edu.icon;
//             return (
//               <div
//                 key={index}
//                 ref={(el) => (cardsRef.current[index] = el)}
//                 className="card hover:scale-105 transition-transform duration-300"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-primary/10 rounded-full">
//                     <Icon className="w-6 h-6 text-primary" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-2xl font-bold mb-2">{edu.institution}</h3>
//                     <p className="text-lg text-muted-foreground mb-2">
//                       {edu.degree}
//                     </p>
//                     <div className="flex flex-wrap gap-3 mt-4">
//                       <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
//                         {edu.year}
//                       </span>
//                       <span className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-semibold">
//                         {edu.grade}
//                       </span>
//                     </div>
//                     <p className="text-sm text-muted-foreground mt-3">
//                       {edu.location}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Certifications */}
//         <div className="mt-12 text-center">
//           <h3 className="text-2xl font-bold mb-4">Certifications</h3>
//           <div className="flex flex-wrap justify-center gap-4">
//             <span className="px-6 py-3 bg-accent/10 text-accent rounded-full font-semibold">
//               OCI 2025 AI Foundations
//             </span>
//             <span className="px-6 py-3 bg-accent/10 text-accent rounded-full font-semibold">
//               OCI Generative AI Professional
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;



// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { GraduationCap, Award } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger);

// const educationData = [
//   {
//     institution: "SSN College of Engineering",
//     degree: "B.Tech in Information Technology",
//     year: "2021 - 2025",
//     grade: "CGPA: 7.2",
//     location: "Chennai, India",
//     icon: GraduationCap,
//   },
//   {
//     institution: "Delhi Public School, Ranchi",
//     degree: "AISSCE (Class XII)",
//     year: "2019 - 2021",
//     grade: "94.8%",
//     location: "Ranchi, India",
//     icon: Award,
//   },
// ];

// const Education = () => {
//   const timelineRef = useRef(null);
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     // Draw timeline
//     gsap.fromTo(
//       timelineRef.current,
//       { width: "0%" },
//       {
//         width: "100%",
//         duration: 1.5,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: timelineRef.current,
//           start: "top 80%",
//         },
//       }
//     );

//     // Animate cards
//     cardsRef.current.forEach((card, index) => {
//       if (card) {
//         gsap.fromTo(
//           card,
//           { opacity: 0, y: 40 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//             ease: "power3.out",
//             delay: 0.5 + index * 0.2,
//             scrollTrigger: {
//               trigger: card,
//               start: "top 85%",
//             },
//           }
//         );
//       }
//     });
//   }, []);

//   return (
//     // 🆕 add anchor id to match menu link and Final structure
//     <div className="section-container" id="education"> {/* 🆕 */}
//       <h2 className="text-center mb-4">Education</h2>
//       <p className="text-center text-xl text-muted-foreground mb-16">
//         Foundations that forged my engineering instincts.
//       </p>

//       {/* Timeline */}
//       <div className="relative max-w-5xl mx-auto">
//         <div className="absolute top-1/2 left-0 w-full h-1 bg-muted -translate-y-1/2 hidden md:block">
//           <div
//             ref={timelineRef}
//             className="h-full bg-primary"
//             style={{ width: "0%" }}
//           />
//         </div>

//         {/* Cards */}
//         <div className="grid md:grid-cols-2 gap-8 relative">
//           {educationData.map((edu, index) => {
//             const Icon = edu.icon;
//             return (
//               <div
//                 key={index}
//                 ref={(el) => (cardsRef.current[index] = el)}
//                 className="card hover:scale-105 transition-transform duration-300"
//               >
//                 <div className="flex items-start gap-4">
//                   <div className="p-3 bg-primary/10 rounded-full">
//                     <Icon className="w-6 h-6 text-primary" />
//                   </div>
//                   <div className="flex-1">
//                     <h3 className="text-2xl font-bold mb-2">{edu.institution}</h3>
//                     <p className="text-lg text-muted-foreground mb-2">
//                       {edu.degree}
//                     </p>
//                     <div className="flex flex-wrap gap-3 mt-4">
//                       {/* 🔁 CHANGED: gold and grey chips like Final */}
//                       <span className="chip--gold">{edu.year}</span> {/* 🆕 */}
//                       <span className="chip--grey">{edu.grade}</span> {/* 🆕 */}
//                     </div>
//                     <p className="text-sm text-muted-foreground mt-3">
//                       {edu.location}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Certifications */}
//         <div className="mt-12 text-center">
//           <h3 className="text-2xl font-bold mb-4">Certifications</h3>
//           <div className="flex flex-wrap justify-center gap-4">
//             {/* 🔁 CHANGED: teal pill badges to match Final */}
//             <span className="pill pill--teal">OCI 2025 AI Foundations</span> {/* 🆕 */}
//             <span className="pill pill--teal">OCI Generative AI Professional</span> {/* 🆕 */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;




import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { GraduationCap, Award, University } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    institution: "SSN College of Engineering, Chennai",
    degree: "B.Tech in Information Technology",
    year: "2021 - 2025",
    grade: "CGPA: 7.2",
    location: "Chennai, India",
    icon: GraduationCap,
  },
  {
    institution: "Delhi Public School, Ranchi",
    degree: "AISSCE (Class XII)",
    year: "2019 - 2021",
    grade: "94.8%",
    location: "Ranchi, India",
    icon: Award,
  },
];

/* 🆕 add certification links (replace '#' with your actual credential URLs) */
const certifications = [
  { label: "OCI 2025 AI Foundations Associate", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=A2317259342B7C3526E892488CE67DC1BE7FCC202F999FDCE0844F66520773B2" },           /* 🆕 */
  { label: "OCI 2025 Generative AI Professional", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8D2E5EDB524E497DF5EA0AE6E250AEB0112146D41215CE49021472451C3BC8E3" },     /* 🆕 */
  { label: "OCI 2025 Certified DevOps Professional", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=8C998AA0B9148452F13059EEE13EC7A3421F576405C04163E3D990F75D4DD335" },     /* 🆕 */
];

const Education = () => {
  const timelineRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      timelineRef.current,
      { width: "0%" },
      { width: "100%", duration: 1.5, ease: "power3.out", scrollTrigger: { trigger: timelineRef.current, start: "top 80%" } }
    );

    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.5 + index * 0.2, scrollTrigger: { trigger: card, start: "top 85%" } }
        );
      }
    });
  }, []);

  return (
    <div className="section-container" id="education"> {/* 🆕 */}
      <h2 className="section-title text-center mb-4">Education</h2> {/* 🆕 */}
      <p className="text-center text-xl text-[hsl(var(--muted-foreground))] mb-16"> {/* 🔁 */}
        Foundations that forged my engineering instincts.
      </p>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-[hsl(var(--muted))] -translate-y-1/2 hidden md:block"> {/* 🔁 */}
          <div ref={timelineRef} className="h-full bg-[hsl(var(--primary))]" style={{ width: "0%" }} /> {/* 🔁 */}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 relative">
          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className="card hover:scale-105 transition-transform duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[hsl(var(--primary))/0.10] rounded-full"> {/* 🔁 */}
                    <Icon className="w-6 h-6 text-[hsl(var(--primary))]" />       {/* 🔁 */}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{edu.institution}</h3>
                    <p className="text-lg text-[hsl(var(--muted-foreground))] mb-2"> {/* 🔁 */}
                      {edu.degree}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-4">
                      <span className="chip--gold">{edu.year}</span>  {/* 🆕 */}
                      <span className="chip--grey">{edu.grade}</span>  {/* 🆕 */}
                    </div>
                    <p className="text-sm text-[hsl(var(--muted-foreground))] mt-3"> {/* 🔁 */}
                      {edu.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((c) => (
              <a
                key={c.label}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="pill pill--teal"   /* 🆕 clickable + hover shadow via CSS */
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;