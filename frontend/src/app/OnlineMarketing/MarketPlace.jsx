"use client"


export default function TestingServices() {
  return (
    <section
      className="relative bg-cover bg-center text-white py-20 px-6 md:px-10 mb-10"
      style={{ backgroundImage: 'url("/assets/benefitsbg.jpg")' }}
    >
      {/* Blue overlay */}
      <div className="absolute inset-0 bg-[#0d0230] opacity-90 z-0" />

      {/* Content on top of overlay */}
      <div className="relative z-10">
        <div className="mx-auto text-center">
          <h2 className="text-[#FEC63F] text-2xl font-semibold mb-4">MARKET PLACES</h2>
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-20 text-white">
            Explore what we’re offering
          </h1>
        </div>

       
      </div>
    </section>
  );
}
