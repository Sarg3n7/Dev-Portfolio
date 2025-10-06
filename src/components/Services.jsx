const servicesData = [
  {
    title: "Full-Stack Development",
    description:
      "Your business deserves a fast, secure, and future-proof digital foundation. I build complete web applications—from databases to interfaces—that scale with your growth and keep users coming back.",
    items: [
      "Backend Engineering",
      "Frontend Excellence",
      "Database Design",
    ],
  },
  {
    title: "DevOps & Cloud Solutions",
    description:
      "Deploying software shouldn't be a gamble. I set up automated pipelines, containerized deployments, and monitoring so your app ships reliably and stays online—no matter the traffic spike.",
    items: [
      "CI/CD Pipelines",
      "Server Management",
      "Performance Tuning",
    ],
  },
  {
    title: "Security & Optimization",
    description:
      "Slow or hacked apps destroy trust. I audit your code for vulnerabilities, optimize load times, and implement authentication layers so your users feel safe and your site feels snappy.",
    items: [
      "Code Audits",
      "Pen Testing",
      "SEO Tech Stack",
    ],
  },
  {
    title: "Web & Mobile Apps",
    description:
      "A clunky interface can sink even the best ideas. I design and develop responsive web apps and Progressive Web Apps that work seamlessly across all devices—phone, tablet, or desktop.",
    items: [
      "Cross-Platform Apps",
      "PWAs",
      "E-Commerce",
    ],
  },
];

const Services = () => {
  return (
    <div className="section-container bg-muted">
      <h2 className="text-center mb-4">Services</h2>
      <p className="text-center text-xl text-muted-foreground mb-16">
        Your growth engine—reliable, secure, stress-free.
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="card hover:shadow-xl transition-all duration-300 group"
          >
            <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {service.description}
            </p>
            <ul className="space-y-3 numbered-list">
              {service.items.map((item, idx) => (
                <li key={idx} className="flex items-center text-lg font-medium">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
