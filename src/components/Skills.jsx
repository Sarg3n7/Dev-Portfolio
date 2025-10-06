import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

/* Map skill names -> icon URLs (Devicon CDN).
   You can later self-host: /public/icons/<file>.svg and swap the URLs. */
const iconMap = {
  // Languages
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",

  // Framework & Libraries
  Flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  FastAPI: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  Tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "React.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  Redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "Socket.IO": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",

  // Database
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",

  // Tools & DevOps
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  "CI/CD (GHA/Jenkins)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg",
  Kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  "Docker Swarm": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
};

const skillsData = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "Java", "C#", "HTML5", "CSS3"],
  },
  {
    category: "Framework & Libraries",
    skills: ["Flask", "FastAPI", "Tailwind", "React.js", "Node.js", "Express.js", "Redux", "Socket.IO"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "SQL", "PostgreSQL"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Postman", "CI/CD (GHA/Jenkins)", "Kubernetes", "Docker Swarm"],
  },
];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredSkills, setFilteredSkills] = useState(skillsData);

  useEffect(() => {
    if (activeFilter === "All") setFilteredSkills(skillsData);
    else setFilteredSkills(skillsData.filter((g) => g.category === activeFilter));
  }, [activeFilter]);

  const filters = ["All", "Languages", "Framework & Libraries", "Database", "Tools & DevOps"];

  return (
    <div className="section-container bg-[hsl(var(--muted))]" id="skills">
      <h2 className="section-title text-center mb-4">Skills</h2>
      <p className="text-center text-xl text-[hsl(var(--muted-foreground))] mb-8">
        Tools I reach for daily.
      </p>

      {/* Filters */}
      <div className="tabs justify-center mb-12">
        {filters.map((filter) => {
          const active = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn("tab", active && "tab--active")}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* Grids */}
      <div className="max-w-6xl mx-auto">
        {filteredSkills.map((group, i) => (
          <div key={i} className="mb-12 last:mb-0">
            <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--primary))]">{group.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {group.skills.map((name, idx) => {
                const icon = iconMap[name];
                return (
                  <div
                    key={idx}
                    className="skill-card text-center animate-fade-in-scale"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <div className="flex items-center justify-center mb-3">
                      {icon ? (
                        <img
                          src={icon}
                          alt={`${name} logo`}
                          className="h-12 w-12 object-contain"
                          loading="lazy"
                        />
                      ) : (
                        <div className="h-12 w-12 rounded-lg bg-[hsl(var(--muted))]" />
                      )}
                    </div>
                    <p className="font-semibold text-sm">{name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;





















// import { useState, useEffect } from "react";
// import {
//   Code,
//   Database,
//   Server,
//   Cloud,
//   Braces,
//   FileCode,
//   GitBranch,
// } from "lucide-react";
// import { cn } from "@/lib/utils"; /* 🆕 */

// const skillsData = [
//   /* Languages */
//   {
//     category: "Languages",
//     skills: [
//       { name: "Python", icon: Code },
//       { name: "JavaScript", icon: Code },
//       { name: "Java", icon: Code },
//       { name: "C#", icon: Code },
//       { name: "HTML5", icon: FileCode },
//       { name: "CSS3", icon: FileCode },
//     ],
//   },
//   /* Framework & Libraries */
//   {
//     category: "Framework & Libraries",
//     skills: [
//       { name: "Flask", icon: Server },
//       { name: "FastAPI", icon: Server },
//       { name: "Tailwind", icon: FileCode },
//       { name: "React.js", icon: Braces },
//       { name: "Node.js", icon: Server },
//       { name: "Express.js", icon: Server },
//       { name: "Redux", icon: Braces },
//       { name: "Socket.IO", icon: Server },
//     ],
//   },
//   /* Database */
//   {
//     category: "Database",
//     skills: [
//       { name: "MongoDB", icon: Database },
//       { name: "SQL", icon: Database },
//       { name: "PostgreSQL", icon: Database },
//     ],
//   },
//   /* Tools & DevOps */
//   {
//     category: "Tools & DevOps",
//     skills: [
//       { name: "Git", icon: GitBranch },
//       { name: "GitHub", icon: GitBranch },
//       { name: "Docker", icon: Cloud },
//       { name: "Postman", icon: Server },
//       { name: "CI/CD (GHA/Jenkins)", icon: GitBranch },
//       { name: "Kubernetes", icon: Cloud },
//       { name: "Docker Swarm", icon: Cloud },
//     ],
//   },
// ];

// const Skills = () => {
//   const [activeFilter, setActiveFilter] = useState("All"); /* 🔁 default All */
//   const [filteredSkills, setFilteredSkills] = useState(skillsData); /* 🔁 show all initially */

//   useEffect(() => {
//     if (activeFilter === "All") {                  /* 🆕 */
//       setFilteredSkills(skillsData);
//     } else {
//       setFilteredSkills(skillsData.filter((g) => g.category === activeFilter));
//     }
//   }, [activeFilter]);

//   const filters = [
//     "All",                                          /* 🆕 */
//     "Languages",
//     "Framework & Libraries",
//     "Database",
//     "Tools & DevOps",
//   ];

//   return (
//     <div className="section-container bg-[hsl(var(--muted))]" id="skills">
//       <h2 className="section-title text-center mb-4">Skills</h2>
//       <p className="text-center text-xl text-[hsl(var(--muted-foreground))] mb-8">
//         Tools I reach for daily.
//       </p>

//       {/* Filter Tabs */}
//       <div className="tabs justify-center mb-12">
//         {filters.map((filter) => {
//           const active = activeFilter === filter;
//           return (
//             <button
//               key={filter}
//               onClick={() => setActiveFilter(filter)}
//               className={cn("tab", active && "tab--active")}
//             >
//               {filter}
//             </button>
//           );
//         })}
//       </div>

//       {/* Skills Grid */}
//       <div className="max-w-6xl mx-auto">
//         {filteredSkills.map((group, groupIndex) => (
//           <div key={groupIndex} className="mb-12 last:mb-0">
//             <h3 className="text-2xl font-bold mb-6 text-[hsl(var(--primary))]">
//               {group.category}
//             </h3>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//               {group.skills.map((skill, skillIndex) => {
//                 const Icon = skill.icon;
//                 return (
//                   <div
//                     key={skillIndex}
//                     className="skill-card text-center cursor-pointer animate-fade-in-scale"
//                     style={{ animationDelay: `${skillIndex * 0.05}s` }}
//                   >
//                     <Icon className="w-12 h-12 mx-auto mb-3 skill-card__icon" />
//                     <p className="font-semibold text-sm">{skill.name}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Skills;
