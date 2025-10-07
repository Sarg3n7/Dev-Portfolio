// import { TrendingUp, Zap, Shield } from "lucide-react";

// const statsData = [
//   { label: "Efficiency Boost", value: "+40%", icon: TrendingUp },
//   { label: "Faster UI", value: "+30%", icon: Zap },
//   { label: "Security Improvement", value: "+90%", icon: Shield },
// ];

// const About = () => {
//   return (
//     <div className="section-container">
//       <h2 className="text-center mb-4">About</h2>
//       <p className="text-center text-xl text-muted-foreground mb-16">
//         From Ranchi to real-world systems.
//       </p>

//       <div className="max-w-4xl mx-auto">
//         {/* Story */}
//         <div className="card mb-12">
//           <p className="text-lg leading-relaxed mb-6">
//             I'm a full-stack developer who thrives on building secure, scalable systems
//             that solve real problems. During my .NET internship at JAP-IT, I implemented
//             role-based access control that cut unauthorized access attempts by 90% and
//             optimized load times by 30%—proof that clean architecture and attention to
//             security create measurable impact.
//           </p>
//           <p className="text-lg leading-relaxed">
//             Today, I focus on MERN-stack applications, microservices, and AI integrations
//             that feel effortless to users but are rock-solid under the hood. Whether it's
//             real-time features with Socket.IO or deploying containerized services with
//             Docker and Kubernetes, I'm driven by one goal: ship products that work reliably
//             and scale gracefully.
//           </p>
//         </div>

//         {/* Stats */}
//         <div className="grid md:grid-cols-3 gap-6">
//           {statsData.map((stat, index) => {
//             const Icon = stat.icon;
//             return (
//               <div
//                 key={index}
//                 className="card text-center hover:scale-105 transition-transform duration-300"
//               >
//                 <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
//                 <p className="text-4xl font-bold text-primary mb-2">
//                   {stat.value}
//                 </p>
//                 <p className="text-muted-foreground font-medium">{stat.label}</p>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;






import { TrendingUp, Zap, Shield } from "lucide-react";

const statsData = [
  { label: "Efficiency Boost", value: "+40%", icon: TrendingUp },
  { label: "Faster UI", value: "+30%", icon: Zap },
  { label: "Security Improvement", value: "+90%", icon: Shield },
];

const About = () => {
  return (
    <div className="section-container" id="about"> {/* 🆕 id for anchors */}
      <h2 className="section-title text-center mb-4">About</h2> {/* 🆕 spacing above title */}
      <p className="text-center text-xl text-[hsl(var(--muted-foreground))] mb-16"> {/* 🔁 token-safe */}
        From ideas to intelligent systems
      </p>

      <div className="max-w-4xl mx-auto">
        {/* Story */}
        <div className="card mb-12">
          {/* 🆕 Photo floated to the top-right; collapses nicely on small screens */}

          <img
            src="/profile/me.jpg"            /* 🆕 place your photo at public/me.jpg or change this path */
            alt="Shashwat Shivam"   /* 🆕 */

            className="float-left w-30 sm:w-35 md:w-40 rounded-xl border mr-6 mb-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,146,60,0.8)] hover:scale-105" /* 🆕 text wraps beside image with intense orange glow and scale on hover */
          />

          <p className="text-md font-semibold leading-relaxed mb-6">
            I’m a full-stack developer who enjoys turning messy ideas into clean, functional products. I like my code the way I like my playlists — wellorganized, fast, and with just the right amount of chaos.
          </p>
          <p className="text-md font-semibold leading-relaxed clear-right md:clear-none"> {/* 🆕 ensure proper flow under image on small screens */}
            I build things that are simple on the surface and smart under the hood from dynamic MERN apps to scalable systems and AI integrations that quietly do the heavy lifting. I care about good architecture, smooth UX, and shipping projects that don’t just work, but feel right. If it’s secure, efficient, and makes someone’s day easier, that’s my kind of win.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6">
          {statsData.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="card text-center hover:scale-105 transition-transform duration-300">
                <Icon className="w-12 h-12 mx-auto mb-4 text-[hsl(var(--primary))]" /> {/* 🔁 token-safe */}
                <p className="text-4xl font-bold text-[hsl(var(--primary))] mb-2"> {/* 🔁 */}
                  {stat.value}
                </p>
                <p className="text-[hsl(var(--muted-foreground))] font-medium"> {/* 🔁 */}
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
