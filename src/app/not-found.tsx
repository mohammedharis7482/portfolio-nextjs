import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl md:text-9xl font-semibold tracking-[-0.08em]">
        404
      </h1>

      <h2 className="mt-6 text-3xl md:text-5xl font-semibold tracking-[-0.04em]">
        Page Not Found
      </h2>

      <p className="mt-6 text-white/50 max-w-xl leading-relaxed">
        The page you’re looking for doesn’t
        exist or may have been moved.
      </p>

      <Link
        href="/"
        className="mt-10 h-[58px] px-8 rounded-full bg-white text-black flex items-center justify-center font-medium hover:scale-[1.03] transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
}