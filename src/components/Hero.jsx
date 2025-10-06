import { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Particle system
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 2 - 1;
        this.speedY = Math.random() * 2 - 1;
        this.opacity = 1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity -= 0.02;
        if (this.size > 0.2) this.size -= 0.05;
      }
      draw() {
        ctx.fillStyle = `rgba(245, 158, 11, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (particlesRef.current.length < 100) {
        particlesRef.current.push(new Particle(mouseRef.current.x, mouseRef.current.y));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);
      particlesRef.current = particlesRef.current.filter((p) => {
        p.update();
        p.draw();
        return p.opacity > 0;
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    animate();

    const handleVisibilityChange = () => {
      if (document.hidden) cancelAnimationFrame(animationFrameRef.current);
      else animate();
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      canvas.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <div id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-auto"
        style={{ cursor: "crosshair" }}
      />

      {/* Content */}
      <div className="relative z-10 section-container w-full">
        {/* 🆕 2-column layout: GIF left, text right */}
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr] items-center gap-10">
          {/* GIF (left) */}
          <div className="mx-auto md:mx-0">
            <div className="relative overflow-hidden rounded-full ring-4 ring-[hsl(var(--primary))/0.2] shadow-lg w-64 h-64 ml-10 md:w-80 md:h-80">
              {/* Place your green-screen GIF at /public/hero/cat.gif */}
              <img
                src="/gifs/dev.gif"           /* 🆕 ensure file exists at public/hero/cat.gif */
                alt="typing cat"
                className="
                  w-full  object-contain
                  mix-blend-multiply
                  saturate-150 contrast-110
                "
              />
            </div>
            {/* NOTE: For a perfect background removal, export a WebM with alpha.
               The current mix-blend + filters will visually suppress most green,
               but true transparency requires alpha footage. */}
          </div>

          {/* Text (right) */}
          <div className="text-left">
            {/* 🆕 Headline in a different font but same size as before */}
            <h1
              className='mb-2 text-5xl md:text-7xl leading-[0.95] animate-fade-in font-["Bebas_Neue",sans-serif]' // 🆕
            >
              Hello! I am{" "}
              <span className="text-[hsl(var(--primary))]">SHASHWAT SHIVAM.</span>
            </h1>

            {/* 🆕 Supporting line in default font, slightly smaller */}
            <p
              className="text-2xl md:text-3xl font-semibold text-[hsl(var(--foreground))] mb-8 animate-fade-in"
              style={{ animationDelay: "0.08s" }}
            >
              I ship secure, fast, scalable{" "}
              <span className="text-[hsl(var(--primary))]">full-stack</span> apps that feel effortless.
            </p>

            {/* Subcopy */}
            <p
              className="text-lg md:text-xl text-[hsl(var(--muted-foreground))] mb-12 max-w-3xl animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Full-stack engineer focused on secure architectures, clean UX, and measurable performance.
            </p>

            {/* Actions */}
            <div
              className="flex flex-col sm:flex-row gap-6 animate-fade-in"
              style={{ animationDelay: "0.35s" }}
            >
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-ghost">Get in Touch</a>
              <a
                href="/resume/resume.pdf"
                download="Resume.pdf"
                className="btn-secondary"
                aria-label="Download Resume as PDF"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;












// import { useEffect, useRef } from "react";

// const Hero = () => {
//   const canvasRef = useRef(null);
//   const particlesRef = useRef([]);
//   const mouseRef = useRef({ x: 0, y: 0 });
//   const animationFrameRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     const dpr = window.devicePixelRatio || 1;

//     const resizeCanvas = () => {
//       const rect = canvas.getBoundingClientRect();
//       canvas.width = rect.width * dpr;
//       canvas.height = rect.height * dpr;
//       ctx.scale(dpr, dpr);
//     };

//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     // Particle system
//     class Particle {
//       constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.size = Math.random() * 3 + 1;
//         this.speedX = Math.random() * 2 - 1;
//         this.speedY = Math.random() * 2 - 1;
//         this.opacity = 1;
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;
//         this.opacity -= 0.02;
//         if (this.size > 0.2) this.size -= 0.05;
//       }

//       draw() {
//         ctx.fillStyle = `rgba(245, 158, 11, ${this.opacity})`;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }

//     const handleMouseMove = (e) => {
//       const rect = canvas.getBoundingClientRect();
//       mouseRef.current = {
//         x: e.clientX - rect.left,
//         y: e.clientY - rect.top,
//       };

//       // Create particles
//       if (particlesRef.current.length < 100) {
//         particlesRef.current.push(new Particle(mouseRef.current.x, mouseRef.current.y));
//       }
//     };

//     const animate = () => {
//       ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

//       // Update and draw particles
//       particlesRef.current = particlesRef.current.filter((particle) => {
//         particle.update();
//         particle.draw();
//         return particle.opacity > 0;
//       });

//       animationFrameRef.current = requestAnimationFrame(animate);
//     };

//     canvas.addEventListener("mousemove", handleMouseMove);
//     animate();

//     // Pause on tab blur
//     const handleVisibilityChange = () => {
//       if (document.hidden) {
//         cancelAnimationFrame(animationFrameRef.current);
//       } else {
//         animate();
//       }
//     };

//     document.addEventListener("visibilitychange", handleVisibilityChange);

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       canvas.removeEventListener("mousemove", handleMouseMove);
//       document.removeEventListener("visibilitychange", handleVisibilityChange);
//       cancelAnimationFrame(animationFrameRef.current);
//     };
//   }, []);

//   return (
//     // 🆕 add id="home" so the brand and menu can link here
//     <div id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden"> {/* 🆕 */}
//       {/* Canvas Background */}
//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full pointer-events-auto"
//         style={{ cursor: "crosshair" }}
//       />

//       {/* Content */}
//       <div className="relative z-10 section-container text-center">
//         {/* 🔁 New intro copy + highlights */}
//         <h1 className="mb-6 text animate-fade-in"> {/* 🔁 */}
//           Hello! I am{" "}
//           <span className="text-[hsl(var(--primary))] font-extrabold">SHASHWAT SHIVAM</span>. {/* 🆕 */}
//           {" "}I ship secure, fast, scalable{" "}
//           <span className="text-[hsl(var(--primary))] font-extrabold">full-stack apps</span> {/* 🆕 */}
//           {" "}that feel effortless.
//         </h1>

//         <p
//           className="text-xl md:text-2xl text-[hsl(var(--muted-foreground))] mb-12 max-w-3xl mx-auto animate-fade-in"
//           style={{ animationDelay: "0.2s" }}
//         >
//           Full-stack engineer focused on secure architectures, clean UX, and measurable performance.
//         </p>

//         {/* 🔁 Add Download Resume beside Get in Touch */}
//         <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
//           <a href="#projects" className="btn-primary">View Projects</a>
//           <a href="#contact" className="btn-ghost">Get in Touch</a>
//           <a
//             href="/resume/resume.pdf"            /* 🆕 make sure file exists at public/resume/resume.pdf */
//             download="Resume.pdf" /* 🆕 force a download with a clean filename */
//             className="btn-secondary"             /* 🆕 secondary style to keep hierarchy */
//             aria-label="Download Resume as PDF"
//           >
//             Download Resume
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
