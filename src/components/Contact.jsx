import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "@/hooks/use-toast";
import { Instagram, Linkedin, Github, Send } from "lucide-react";

const Contact = () => {
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 🆕 Send message directly to inbox via EmailJS
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_email: formData.email,
          message: formData.message,
          to_email: "shashwatshivam04@gmail.com", // 🧭 your inbox
        },
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      if (res.status === 200 || res.text === "OK") {
        toast({
          title: "Message sent successfully! ✅",
          description: "I'll get back to you soon.",
        });
        setFormData({ email: "", message: "" });
      } else {
        toast({
          title: "Failed to send message.",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Something went wrong.",
        description: "Could not send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socials = [
    { name: "Instagram", icon: Instagram, url: "https://www.instagram.com/shashwat_4/" },
    { name: "LinkedIn", icon: Linkedin, url: "https://www.linkedin.com/in/shashwat-shivam04/" },
    { name: "GitHub", icon: Github, url: "https://github.com/Sarg3n7" },
  ];

  return (
    <div id="contact" className="section-container">
      <h2 className="section-title text-center mb-4">Contact</h2>
      <p className="text-center text-xl opacity-80 mb-16">
        Got a product to ship? Let's build.
      </p>

      <div className="max-w-2xl mx-auto">
        {/* Form */}
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-6 py-4 rounded-xl placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>

          {/* Message Input */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-6 py-4 rounded-xl placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all duration-300 resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary flex items-center justify-center gap-2 mx-auto"
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                <Send size={20} />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>

        {/* Socials */}
        <div className="mt-12 pt-12 border-t border-white/15">
          <p className="text-center opacity-80 mb-6">Or connect with me on</p>
          <div className="flex justify-center gap-6">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label={social.name}
                >
                  <Icon size={24} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="opacity-60 text-sm">
            © 2025 Shashwat Shivam. Crafted with ❤️.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;








// import { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { toast } from "@/hooks/use-toast";
// import { Instagram, Linkedin, Github, Send } from "lucide-react";

// const Contact = () => {
//   const formRef = useRef(null);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     const subject = "Portfolio Contact";
//     const body = `From: ${formData.email}%0D%0A%0D%0A${formData.message}`;
//     const mailtoLink = `mailto:shashwatshivam04@gmail.com?subject=${subject}&body=${body}`;
    
//     window.location.href = mailtoLink;

//     toast({
//       title: "Opening email client...",
//       description: "Your default email app will open with the message.",
//     });

//     setIsSubmitting(false);
//     setFormData({ email: "", message: "" });
//   };

//   const socials = [
//     { name: "Instagram", icon: Instagram, url: "#" },
//     { name: "LinkedIn", icon: Linkedin, url: "#" },
//     { name: "GitHub", icon: Github, url: "#" },
//   ];

//   return (
//     <div id="contact" className="section-container"> {/* 🔁 dark section handled in CSS */}
//       <h2 className="section-title text-center mb-4">Contact</h2> {/* 🔁 add .section-title */}
//       <p className="text-center text-xl opacity-80 mb-16">
//         Got a product to ship? Let's build.
//       </p>

//       <div className="max-w-2xl mx-auto">
//         <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
//           {/* Email Input */}
//           <div>
//             <label htmlFor="email" className="block text-sm font-semibold mb-2">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-6 py-4 rounded-xl placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all duration-300"
//               placeholder="your@email.com"
//             />
//           </div>

//           {/* Message Input */}
//           <div>
//             <label htmlFor="message" className="block text-sm font-semibold mb-2">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               rows={6}
//               className="w-full px-6 py-4 rounded-xl placeholder:opacity-60 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))] transition-all duration-300 resize-none"
//               placeholder="Tell me about your project..."
//             />
//           </div>

//           {/* Submit Button */}
//           {/* 🔁 center align under message; CSS ensures full-width pill & centered content */}
//           <button type="submit" disabled={isSubmitting} className="btn-primary">
//             {isSubmitting ? (
//               "Sending..."
//             ) : (
//               <>
//                 <Send size={20} />
//                 <span>Send Message</span>
//               </>
//             )}
//           </button>
//         </form>

//         {/* Socials */}
//         <div className="mt-12 pt-12 border-t border-white/15">
//           <p className="text-center opacity-80 mb-6">Or connect with me on</p>
//           <div className="flex justify-center gap-6">
//             {socials.map((social) => {
//               const Icon = social.icon;
//               return (
//                 <a
//                   key={social.name}
//                   href={social.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="social-btn"
//                   aria-label={social.name}
//                 >
//                   <Icon size={24} />
//                 </a>
//               );
//             })}
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="mt-12 text-center">
//           <p className="opacity-60 text-sm">
//             © 2025 Shashwat Shivam. Crafted with❤️.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
