"use client"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-card/50 border-y border-border">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground mb-6">
              I'm SALLY WYNTER, a dedicated animation and video editing specialist. I create compelling visual content
              that captures attention and tells powerful stories through expert animation techniques and precision video
              editing.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              From character animation to commercial edits, I bring creativity and technical excellence to every
              project. My work combines artistic vision with professional polish to deliver outstanding results.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">8+</p>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>

          <div
            className="relative h-96 rounded-xl overflow-hidden border border-border animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            <img
              src="/professional-portrait-animator-creative-studio.jpg"
              alt="SALLY WYNTER"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
