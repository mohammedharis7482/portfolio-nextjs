import Image from "next/image";
import Link from "next/link";

export default function TurfBookingPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-white/40 text-sm mb-6">
            Mobile App UI/UX
          </p>

          <h1 className="text-6xl md:text-8xl font-bold leading-none mb-8">
            Turf Booking
            <br />
            Application
          </h1>

          <p className="text-white/60 text-lg max-w-3xl leading-relaxed">
            A modern turf booking mobile application designed
            to simplify sports reservations, scheduling,
            booking management, and user experience through
            clean UI systems and intuitive interactions.
          </p>
        </div>

        {/* Glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[140px]" />
      </section>

      {/* Banner Image */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <div className="relative rounded-[40px] overflow-hidden border border-white/10">
            <Image
              src="/projects/turf-booking.jpg"
              alt="Turf Booking"
              width={1600}
              height={900}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Info */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-6">
              Overview
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Building a Seamless
              Sports Booking Experience
            </h2>

            <p className="text-white/60 leading-relaxed">
              The project focused on creating a premium,
              user-friendly sports turf booking experience
              for mobile users. The design system was built
              with clarity, usability, and modern UI trends
              while ensuring smooth booking interactions.
            </p>
          </div>

          <div className="space-y-10">
            <div>
              <p className="text-white/40 mb-2">Role</p>
              <p className="text-xl">
                UI/UX Designer
              </p>
            </div>

            <div>
              <p className="text-white/40 mb-2">Tools</p>
              <p className="text-xl">
                Figma, Prototyping, Design Systems
              </p>
            </div>

            <div>
              <p className="text-white/40 mb-2">Duration</p>
              <p className="text-xl">
                Case Study Project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screens */}
      <section className="px-6 mb-32">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-white/40 mb-12">
            UI Showcase
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-[30px] overflow-hidden border border-white/10">
              <Image
                src="/projects/turf-booking.jpg"
                alt=""
                width={800}
                height={1000}
                className="w-full h-auto"
              />
            </div>

            <div className="rounded-[30px] overflow-hidden border border-white/10">
              <Image
                src="/projects/turf-booking.jpg"
                alt=""
                width={800}
                height={1000}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-32">
        <div className="max-w-5xl mx-auto rounded-[40px] border border-white/10 bg-white/[0.03] p-16 text-center">
          <h2 className="text-5xl font-bold mb-6">
            View Full Case Study
          </h2>

          <p className="text-white/60 max-w-2xl mx-auto mb-10">
            Explore the complete design thinking, process,
            and mobile UI experience behind this project.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.behance.net/gallery/241703089/PlaySphere-Turf-Booking-App"
              target="_blank"
              className="px-8 py-4 rounded-full bg-white text-black font-medium hover:scale-105 transition"
            >
              Behance Case Study
            </a>

            <Link
              href="/"
              className="px-8 py-4 rounded-full border border-white/10 hover:bg-white hover:text-black transition"
            >
              Back Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}