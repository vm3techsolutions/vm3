import Image from "next/image";
import { CalendarDays, FileText } from "lucide-react";

export default function EventCard() {
  return (
    <section className="py-20 mx-auto">
      <div className="max-w-xl bg-white shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row items-center p-4 gap-1 border border-gray-200 sm:ml-20">
        
        {/* Left Image */}
        <div className="w-full md:w-2/3">
          <Image
            src="/assets/Event.jpeg" 
            alt="Event"
            width={320}
            height={320}
            className="rounded-lg object-cover w-80 h-80"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/3 space-y-2">
          {/* Date Row */}
          <div className="flex items-center gap-2 text-gray-600">
            <CalendarDays className="w-5 h-5 text-blue-500" />
            <span>15 Dec 2023</span>
          </div>

          {/* File Row */}
          <div className="flex items-center gap-2 text-gray-600">
            <FileText className="w-5 h-5 text-green-500" />
            <span>Event</span>
          </div>

          {/* Event Title */}
          <h3 className="text-lg font-semibold text-gray-800">
            Hattrick: Knowledge Sharing Session
          </h3>
        </div>
      </div>
    </section>
  );
}
