import { useState, useEffect, useRef } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import gsap from "gsap";

const menuItems = [
  { label: "Home", href: "#home", number: "01" },
  { label: "Education", href: "#education", number: "02" },
  { label: "Services", href: "#services", number: "03" },
  { label: "Projects", href: "#projects", number: "04" },
  { label: "Skills", href: "#skills", number: "05" },
  { label: "About", href: "#about", number: "06" },
  { label: "Contact", href: "#contact", number: "07" },
];

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      // Animate overlay
      gsap.fromTo(overlayRef.current, { opacity: 2, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" });

      // Stagger animate links
      gsap.fromTo(
        linksRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power3.out", delay: 0.1 }
      );

      // Trap focus
      const focusableElements = overlayRef.current.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      const handleTab = (e) => {
        if (e.key === "Tab") {
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      document.addEventListener("keydown", handleTab);
      firstElement?.focus();

      return () => document.removeEventListener("keydown", handleTab);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);
  const handleOverlayClick = (e) => { if (e.target === e.currentTarget) setIsOpen(false); };

  return (
    <>
      {/* 🆕 Brand Initials (top-left, glowing) */}
      <a
        href="#home" /* 🆕 */
        className="
          fixed top-8 left-8 z-40 px-3 py-2 rounded-full
          bg-[hsl(var(--primary))/0.10] text-[hsl(var(--primary))]
          border border-[hsl(var(--primary))/0.35]
          shadow-[0_0_24px_hsl(var(--primary)/0.50)]
          backdrop-blur-sm font-black tracking-wide
        "
        aria-label="Back to Home"
      >
        SS {/* 🆕 */}
      </a>

      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-8 right-8 z-40 p-3 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] rounded-full hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg active:scale-95" /* 🔁 token-safe colors */
        aria-label="Open menu"
      >
        <MenuIcon size={24} />
      </button>

      {/* Full-screen Overlay */}
      {isOpen && (
        <div
          ref={overlayRef}
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(var(--charcoal))/0.95] backdrop-blur-lg" /* 🔁 */
          role="dialog"
          aria-modal="true"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-8 right-8 p-3 text-[hsl(var(--cream))] hover:text-[hsl(var(--primary))] transition-colors duration-300" /* 🔁 */
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          <nav className="flex flex-col items-center gap-6">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                ref={(el) => (linksRef.current[index] = el)}
                href={item.href}
                onClick={handleLinkClick}
                className="text-[hsl(var(--cream))] text-4xl md:text-6xl font-bold hover:text-[hsl(var(--primary))] transition-colors duration-300 flex items-center gap-6 group" /* 🔁 */
              >
                <span className="text-[hsl(var(--primary))] text-2xl md:text-3xl font-light opacity-100 group-hover:opacity-100 transition-opacity">
                  {item.number}
                </span>
                <span className="link-underline text-orange-200 hover:text-[#F79F08] hover:scale-110">{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Menu;



// import { useState, useEffect, useRef } from "react";
// import { Menu as MenuIcon, X } from "lucide-react";
// import gsap from "gsap";

// const menuItems = [
//   { label: "Home", href: "#home", number: "01" },
//   { label: "Education", href: "#education", number: "02" },
//   { label: "Services", href: "#services", number: "03" },
//   { label: "Projects", href: "#projects", number: "04" },
//   { label: "Skills", href: "#skills", number: "05" },
//   { label: "About", href: "#about", number: "06" },
//   { label: "Contact", href: "#contact", number: "07" },
// ];

// const Menu = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const overlayRef = useRef(null);
//   const linksRef = useRef([]);

//   useEffect(() => {
//     if (isOpen) {
//       // Animate overlay
//       gsap.fromTo(
//         overlayRef.current,
//         { opacity: 2, scale: 0.95 },
//         { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
//       );

//       // Stagger animate links
//       gsap.fromTo(
//         linksRef.current,
//         { opacity: 0, y: 30 },
//         { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power3.out", delay: 0.1 }
//       );

//       // Trap focus
//       const focusableElements = overlayRef.current.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
//       const firstElement = focusableElements[0];
//       const lastElement = focusableElements[focusableElements.length - 1];

//       const handleTab = (e) => {
//         if (e.key === "Tab") {
//           if (e.shiftKey && document.activeElement === firstElement) {
//             e.preventDefault();
//             lastElement.focus();
//           } else if (!e.shiftKey && document.activeElement === lastElement) {
//             e.preventDefault();
//             firstElement.focus();
//           }
//         }
//       };

//       document.addEventListener("keydown", handleTab);
//       firstElement?.focus();

//       return () => document.removeEventListener("keydown", handleTab);
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === "Escape" && isOpen) setIsOpen(false);
//     };
//     document.addEventListener("keydown", handleEscape);
//     return () => document.removeEventListener("keydown", handleEscape);
//   }, [isOpen]);

//   const handleLinkClick = () => setIsOpen(false);
//   const handleOverlayClick = (e) => { if (e.target === e.currentTarget) setIsOpen(false); };

//   return (
//     <>
//       {/* 🆕 Brand Initials (top-left, glowing) */}
//       <a
//         href="#home" /* 🆕 */
//         className="
//           fixed top-8 left-8 z-40 px-3 py-2 rounded-full
//           bg-[hsl(var(--primary))/0.10] text-[hsl(var(--primary))]
//           border border-[hsl(var(--primary))/0.35]
//           shadow-[0_0_24px_hsl(var(--primary)/0.50)]
//           backdrop-blur-sm font-black tracking-wide
//         "
//         aria-label="Back to Home"
//       >
//         SS {/* 🆕 */}
//       </a>

//       {/* Menu Button */}
//       <button
//         onClick={() => setIsOpen(true)}
//         className="fixed top-8 right-8 z-40 p-3 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] rounded-full hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg active:scale-95" /* 🔁 token-safe colors */
//         aria-label="Open menu"
//       >
//         <MenuIcon size={24} />
//       </button>

//       {/* Full-screen Overlay */}
//       {isOpen && (
//         <div
//           ref={overlayRef}
//           onClick={handleOverlayClick}
//           className="fixed inset-0 z-50 flex items-center justify-center bg-[hsl(var(--charcoal))/0.95] backdrop-blur-lg" /* 🔁 */
//           role="dialog"
//           aria-modal="true"
//         >
//           <button
//             onClick={() => setIsOpen(false)}
//             className="absolute top-8 right-8 p-3 text-[hsl(var(--cream))] hover:text-[hsl(var(--primary))] transition-colors duration-300" /* 🔁 */
//             aria-label="Close menu"
//           >
//             <X size={32} />
//           </button>

//           <nav className="flex flex-col items-center gap-6">
//             {menuItems.map((item, index) => (
//               <a
//                 key={item.href}
//                 ref={(el) => (linksRef.current[index] = el)}
//                 href={item.href}
//                 onClick={handleLinkClick}
//                 className="text-[hsl(var(--cream))] text-4xl md:text-6xl font-bold hover:text-[hsl(var(--primary))] transition-colors duration-300 flex items-center gap-6 group" /* 🔁 */
//               >
//                 <span className="text-[hsl(var(--primary))] text-2xl md:text-3xl font-light opacity-70 group-hover:opacity-100 transition-opacity">
//                   {item.number}
//                 </span>

//                 {/* 🔁 Labels: slightly more visible by default; on hover → fully opaque, orange + soft glow */}
//                 <span
//                   className="
//                     link-underline
//                     opacity-95                               /* 🆕 base visibility boost */
//                     drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)] /* 🆕 subtle readability on blur */
//                     transition-all duration-200              /* 🆕 smooth */
//                     group-hover:opacity-100                  /* 🆕 full opacity on hover */
//                     group-hover:text-[hsl(var(--primary))]   /* 🆕 contrast orange on hover */
//                     group-hover:drop-shadow-[0_0_16px_hsl(var(--primary)/0.55)] /* 🆕 soft glow */
//                   "
//                 >
//                   {item.label}
//                 </span>
//               </a>
//             ))}
//           </nav>
//         </div>
//       )}
//     </>
//   );
// };

// export default Menu;

