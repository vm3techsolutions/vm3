export default function ExpertiseSection() {
    return (
      <section className="bg-[#0f0f0f] text-white py-24 px-6 md:px-40">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Title */}
          <div>
          <h3 className="text-[#FEC63F] text-xl font-semibold mb-2">Expertise</h3>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Digital marketing <br /> expertise
            </h2>
          </div>
  
          {/* Right Side - Content */}
          <div className="text-gray-200 text-xl leading-relaxed">
            <p>
              Mrs. Vasanti Mulajkar certified with multiple certifications from Google: Google ads search,
              YouTube creative essentials and SEMrush Boston. She has done career counselling of 5000+ students.
              She has been recognized as a successful woman entrepreneur in multiple forums and her achievement
              news published in print media like newspapers: <span className="italic">Lokmat Samachar, Sakal, Saamana</span> and online media
              <span className="italic"> zee24news</span> on women’s day in 2019.
            </p>
          </div>
        </div>
      </section>
    );
  }
  