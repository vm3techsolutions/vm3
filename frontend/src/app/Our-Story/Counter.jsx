'use client';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Medal, Monitor, Factory, FileText } from 'lucide-react';

const stats = [
  { icon: <Medal className="w-8 h-8" />, number: 7, suffix: '+', label: 'Years of Experience' },
  { icon: <Monitor className="w-8 h-8" />, number: 350, suffix: '+', label: 'Projects Completed' },
  { icon: <Factory className="w-8 h-8" />, number: 200, suffix: 'K', label: 'Leads Generated' },
  { icon: <FileText className="w-8 h-8" />, number: 185, suffix: '+', label: 'Critical Cases' },
];

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true, // only trigger once
    threshold: 0.3,     // how much should be visible to trigger
  });

  return (
    <div
      ref={ref}
      className="bg-cover bg-center py-16 text-white"
      style={{ backgroundImage: "url('/assets/Experience.jpg')" }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="bg-[#FEC63F] text-black rounded-full w-14 h-14 flex items-center justify-center mb-4">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-[#FEC63F]">
              {inView && <CountUp end={stat.number} duration={2} />}{stat.suffix}
            </div>
            <div className="mt-2 text-lg font-semibold text-[#FEC63F]">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
