const projects = [
  {
    title: "FinTech Dashboard",
    category: "Web Application",
    description: "A comprehensive financial analytics platform with real-time data visualization and AI-powered insights.",
    image: "bg-gradient-to-br from-blue-500 to-purple-600",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "HealthTrack Mobile",
    category: "Mobile App",
    description: "Cross-platform health monitoring application with wearable device integration and telehealth features.",
    image: "bg-gradient-to-br from-green-500 to-teal-600",
    tags: ["React Native", "Firebase", "HealthKit"],
  },
  {
    title: "LogiFlow ERP",
    category: "Enterprise Software",
    description: "End-to-end logistics management system with inventory tracking, route optimization, and analytics.",
    image: "bg-gradient-to-br from-orange-500 to-red-600",
    tags: ["Vue.js", "Python", "AWS"],
  },
  {
    title: "EduLearn Platform",
    category: "E-Learning",
    description: "Interactive learning management system with live classes, progress tracking, and gamification.",
    image: "bg-gradient-to-br from-pink-500 to-rose-600",
    tags: ["Next.js", "WebRTC", "MongoDB"],
  },
  {
    title: "SmartRetail POS",
    category: "Retail Solution",
    description: "Modern point-of-sale system with inventory management, customer analytics, and omnichannel support.",
    image: "bg-gradient-to-br from-cyan-500 to-blue-600",
    tags: ["Electron", "GraphQL", "Redis"],
  },
  {
    title: "CloudSecure Suite",
    category: "Security Platform",
    description: "Enterprise security monitoring platform with threat detection, compliance reporting, and incident response.",
    image: "bg-gradient-to-br from-slate-600 to-slate-800",
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
              {/* Project Image Placeholder */}
              <div className={`h-48 ${project.image} flex items-center justify-center`}>
                <div className="w-16 h-16 bg-white/20 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
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
