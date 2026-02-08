export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-medium mb-8">
          <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
          Transforming Ideas into Digital Reality
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
          We Build
          <span className="text-primary-500"> Innovative </span>
          Digital Solutions
        </h1>

        {/* Tagline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Etheus Systems delivers cutting-edge software development, cloud solutions,
          and digital transformation services that drive business growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-full sm:w-auto bg-primary-500 text-white px-8 py-4 rounded-xl hover:bg-primary-600 transition-colors font-semibold text-lg shadow-lg shadow-primary-500/25"
          >
            Start Your Project
          </a>
          <a
            href="#portfolio"
            className="w-full sm:w-auto border-2 border-border text-foreground px-8 py-4 rounded-xl hover:border-primary-500 hover:text-primary-500 transition-colors font-semibold text-lg"
          >
            View Our Work
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border max-w-2xl mx-auto">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-foreground">50+</div>
            <div className="text-muted-foreground text-sm sm:text-base">Projects Delivered</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-foreground">98%</div>
            <div className="text-muted-foreground text-sm sm:text-base">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-foreground">5+</div>
            <div className="text-muted-foreground text-sm sm:text-base">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
