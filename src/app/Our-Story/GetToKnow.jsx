'use client';
import Image from 'next/image';

export default function OurSolutions() {
  return (
    <section className="w-full px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* Left Image - 30% on desktop */}
        <div className="w-full md:w-1/3">
          <Image
            src="/assets/solution-img.jpg" 
            alt="Team Discussion"
            width={600}
            height={400}
            className="rounded-md w-full h-auto object-cover"
          />
        </div>

        {/* Right Text - 70% on desktop */}
        <div className="w-full md:w-2/3">
        <h2 className="text-[#FEC63F] text-xl font-semibold mb-2"> GET TO KNOW US        </h2>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">The Best Tailored Software Solutions</h2>
          <p className="text-lg mb-4 text-gray-700">
            VM3 Tech Solutions LLP began its journey as a passionate digital and social media marketing company, empowering businesses to connect with their audiences and grow their online presence. Over the years, we’ve achieved milestones in crafting impactful campaigns and delivering measurable results for our clients.
          </p>
          <p className="text-lg mb-4 text-gray-700">
            However, as the digital landscape evolved, so did we. Recognizing the growing demand for cutting-edge technology solutions, we expanded our horizons beyond marketing. Today, VM3 Tech Solutions stands as a full-fledged software development company, dedicated to creating robust, scalable, and innovative digital products. Our expertise also extends to cloud infrastructure solutions, enabling businesses to adopt secure, reliable, and efficient cloud environments for seamless operations and growth.
          </p>
          <p className="text-lg mb-4 text-gray-700">
            Our evolution is driven by one core belief: technology has the power to transform lives and businesses. Whether it’s designing intuitive user experiences (UI/UX), building high-performance applications, streamlining workflows with custom software, or deploying scalable cloud solutions, our focus has shifted to delivering end-to-end software solutions that empower organisations to thrive in the digital age.
          </p>
          <p className="text-lg mb-4 text-gray-700">
          With a commitment to quality, innovation, and client success, we continue to help businesses of all sizes bridge the gap between ideas and impactful digital solutions. As we embrace this new chapter, our mission remains the same – to provide value-driven services that propel our clients toward growth and excellence.

         </p>

         <p className="text-lg text-gray-700">
         Let’s innovate and grow together.
                  </p>
        </div>
      </div>
    </section>
  );
}
