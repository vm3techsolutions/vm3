'use client';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function AboutSection() {
  return (
    <div className="bg-[#1e1f23] text-white py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/assets/homeaboutimg.jpg" // replace with actual path
            alt="Team Working"
            width={600}
            height={400}
            className=" w-full object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="text-[#FEC63F] font-semibold text-xl">ABOUT US</h3>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Right Approach Will 
            Inspire You To Make It Happen
          </h2>
          <p className="text-white">
            We focus on innovative software development solutions using latest trends.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <Feature title="People Focused" desc="This core value emphasizes the importance of human relationships and development." />
            <Feature title="Accountability" desc="Accountability ties directly to delivering on commitments and striving for excellence." />
            <Feature title="Integrity" desc="Executing asignments with best and latest technology and trends with usefull business analysis for business." />
            <Feature title="Security" desc="Assuring customer data protection, employee privacy, & app security demonstrates VM3's commitment to safeguarding sensitive information." />
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="flex items-start gap-5 mt-">
      <div className="min-w-[40px] min-h-[40px] bg-[#FEC63F] rounded-full flex items-center justify-center mt-1">
        <ArrowRight className="text-black" size={20} />
      </div>
      <div>
        <h4 className="font-semibold text-white text-xl">{title}</h4>
        <p className="text-md text-white ">{desc}</p>
      </div>
    </div>
  );
}
