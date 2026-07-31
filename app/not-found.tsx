import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0F0A07] px-6">
      <div className="max-w-xl text-center">

        <p className="mb-3 text-sm uppercase tracking-[0.4em] text-[#C8A86B]">
          AFFRAA OUD
        </p>

        <h1 className="mb-4 font-display text-7xl font-light text-white">
          404
        </h1>

        <h2 className="mb-6 font-display text-3xl text-white">
          Page Not Found
        </h2>

        <p className="mb-10 leading-8 text-gray-400">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-[#C8A86B] px-8 py-3 font-medium text-black transition hover:scale-105"
        >
          Return Home
        </Link>

      </div>
    </main>
  );
}