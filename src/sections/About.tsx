import Container from "@/components/layout/Container";
import FadeUp from "@/components/ui/FadeUp";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-[-120px] w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <Container>
        {/* SECTION HEADER */}
        <div className="mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">
            About Me
          </p>

          <h2 className="max-w-[700px] text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05] tracking-[-0.04em]">
            Designing Premium

            <span className="block text-white/45">
              Digital Experiences
            </span>
          </h2>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {/* BIG INTRO CARD */}
          <div className="lg:col-span-2 lg:row-span-2 rounded-[28px] md:rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 flex flex-col justify-between min-h-[480px] md:min-h-[520px]">
            <div>
              <p className="text-white/40 text-sm mb-5">
                My Journey
              </p>

              <h3 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
                UI/UX Designer,
                <br />
                Frontend Developer
                <br />
                & Full Stack Learner
              </h3>

              <p className="text-white/60 leading-relaxed text-base sm:text-lg">
                I focus on building visually premium,
                modern, and user-centered digital products.
                My workflow combines strong UI thinking,
                frontend architecture, and interactive experiences.
              </p>
            </div>

            {/* Bottom Tags */}
            <div className="flex flex-wrap gap-3 mt-10">
              {[
                "UI Design",
                "Frontend",
                "Next.js",
                "Tailwind",
                "UX Systems",
                "Motion"
              ].map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-white/70"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* CARD 1 */}
          <div className="rounded-[28px] md:rounded-[32px] border border-white/10 bg-gradient-to-br from-purple-500/10 to-transparent p-6 sm:p-7 min-h-[220px] md:min-h-[250px]">
            <p className="text-sm text-white/40 mb-5">
              Experience
            </p>

            <h3 className="text-4xl sm:text-5xl font-semibold mb-4">
              3+
            </h3>

            <p className="text-white/60 leading-relaxed">
              Years creating modern UI systems and frontend experiences.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="rounded-[28px] md:rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-6 sm:p-7 min-h-[220px] md:min-h-[250px]">
            <p className="text-sm text-white/40 mb-5">
              Projects
            </p>

            <h3 className="text-4xl sm:text-5xl font-semibold mb-4">
              20+
            </h3>

            <p className="text-white/60 leading-relaxed">
              UI/UX, dashboard, portfolio, and frontend development projects.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="lg:col-span-2 rounded-[28px] md:rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 min-h-[220px] md:min-h-[250px] flex flex-col justify-between">
            <div>
              <p className="text-sm text-white/40 mb-5">
                Current Focus
              </p>

              <h3 className="text-2xl sm:text-3xl font-semibold leading-tight mb-5">
                Learning Full Stack
                Development & AI
                Architecture
              </h3>

              <p className="text-white/60 leading-relaxed max-w-[600px]">
                Currently improving my skills in Next.js,
                backend systems, databases, authentication,
                scalable frontend architecture, and Claude AI workflows.
              </p>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="rounded-[28px] md:rounded-[32px] border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-7 min-h-[220px] md:min-h-[250px]">
            <p className="text-sm text-white/40 mb-5">
              Tools
            </p>

            <div className="space-y-4">
              {[
                "Figma",
                "React.js",
                "Next.js",
                "Tailwind CSS",
                "Framer Motion"
              ].map((tool) => (
                <div
                  key={tool}
                  className="flex items-center justify-between border-b border-white/10 pb-3"
                >
                  <span className="text-white/80">
                    {tool}
                  </span>

                  <span className="text-white/30">
                    ●
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CARD 5 */}
          <div className="rounded-[28px] md:rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-transparent p-6 sm:p-7 min-h-[220px] md:min-h-[250px]">
            <p className="text-sm text-white/40 mb-5">
              Philosophy
            </p>

            <h3 className="text-2xl sm:text-3xl font-semibold leading-snug mb-4">
              Simplicity,
              usability,
              and visual balance.
            </h3>

            <p className="text-white/60 leading-relaxed">
              I believe modern interfaces should feel clean,
              intuitive, emotionally engaging, and visually premium.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;