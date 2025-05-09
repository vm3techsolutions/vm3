'use client';
import Image from 'next/image';

export default function OurSolutions() {
  return (
    <section className="w-full px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        

        {/* Right Text - 70% on desktop */}
        <div className="w-full md:w-3/5 pl-5">
        <h2 className="text-[#FEC63F] text-xl font-semibold mb-2">WHT CHOOSE US?       </h2>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4 py-5">We made things easier for your business</h2>
          <p className="text-lg mb-4 text-gray-700">
          We expressing a commitment to making a significant impact on the business landscape. We ensure that our strategies align with this vision, focusing on scalability, innovation, and customer satisfaction.
          </p>
          <p className="text-lg mb-4 text-gray-700">
          We expressing a commitment to making a significant impact on the business landscape. We ensure that our strategies align with this vision, focusing on scalability, innovation, and customer satisfaction.
With years of experience in the industry, our team has honed its skills in digital marketing and website development. To create outcomes that go above and beyond expectations, we keep up with the most recent trends and technologies. We are firm believers in adjusting our plans and responses to your particular needs.
We take the time to comprehend your business, your target market, and your objectives in order to make sure that our services are in line with your ambitions. Our main priority is producing tangible outcomes. We use data-driven tactics, ongoing monitoring, and optimization to make sure that the effectiveness of your digital marketing efforts and website is always rising.
          </p>
         
        </div>


        {/* Left Image - 30% on desktop */}
        <div className="w-full md:w-2/5">
          <Image
            src="/assets/WHT-Choose.jpg" 
            alt="Team Discussion"
            width={600}
            height={400}
            className="w-full h-[110vh] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
