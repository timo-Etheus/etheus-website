import Image from "next/image";

const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    description: "A comprehensive financial analytics platform with real-time data visualization and AI-powered insights.",
    image: "/images/fintech-dashboard.webp",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "HealthTrack Mobile",
    category: "Mobile App",
    description: "Cross-platform health monitoring application with wearable device integration and telehealth features.",
    image: "/images/healthtrack-mobile.webp",
    tags: ["React Native", "Firebase", "HealthKit"],
  },
  {
    title: "LogiFlow ERP",
    category: "Enterprise Software",
    description: "End-to-end logistics management system with inventory tracking, route optimization, and analytics.",
    image: "/images/logiflow-erp.webp",
    tags: ["Vue.js", "Python", "AWS"],
  },
  {
    title: "EduLearn Platform",
    category: "E-Learning",
    description: "Interactive learning management system with live classes, progress tracking, and gamification.",
    image: "/images/edulearn-platform.webp",
    tags: ["Next.js", "WebRTC", "MongoDB"],
  },
  {
    title: "SmartRetail POS",
    category: "Retail Solution",
    description: "Modern point-of-sale system with inventory management, customer analytics, and omnichannel support.",
    image: "/images/smartretail-pos.webp",
    tags: ["Electron", "GraphQL", "Redis"],
  },
  {
    title: "CloudSecure Suite",
    category: "Security Platform",
    description: "Enterprise security monitoring platform with threat detection, compliance reporting, and incident response.",
    image: "/images/cloudsecure-suite.webp",
    tags: ["Go", "Kubernetes", "ElasticSearch"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary-500 font-semibold mb-2">Our Work</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore our portfolio of successful projects delivered across various industries.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden border border-border hover:border-primary-500 transition-all duration-300 hover:shadow-xl"
            >
              {/* Project Image */}
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 bg-background">
                <p className="text-primary-500 text-sm font-medium mb-2">{project.category}</p>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center text-primary-500 font-semibold hover:text-primary-600 transition-colors"
          >
            Want to see more? Let&apos;s talk
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
