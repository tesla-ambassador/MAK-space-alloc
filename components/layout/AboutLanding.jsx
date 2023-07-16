import Link from "next/link";

export default function AboutLanding() {
  return (
    <div
      className="bg-aboutLandingBg bg-cover bg-center bg-no-repeat
     relative min-h-screen
     after:absolute after:bg-white after:left-0 after:top-0 after:bottom-0 after:right-0 after:h-full after:w-full after:opacity-20"
    >
      <div className="relative z-50 isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-black sm:text-6xl">
              Your Event. Your Space. Booked in Seconds!
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Welcome to our cutting-edge event space booking app, where finding
              the ideal venue for your next gathering is a breeze. Discover a
              diverse range of spaces across Makerere University!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/dash"
                className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
