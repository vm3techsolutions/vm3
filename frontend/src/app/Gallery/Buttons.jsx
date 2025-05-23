'use client';
import { useEffect, useState } from 'react';

export default function TabsWithJson() {
  const [tabs, setTabs] = useState([]);
  const [activeLabel, setActiveLabel] = useState(null);

  useEffect(() => {
    fetch('/Img.json')
      .then((res) => res.json())
      .then((data) => {
        setTabs(data);
        setActiveLabel(data[1].label); 
      });
  }, []);

  // Extract unique labels for tab buttons
  const uniqueLabels = [...new Set(tabs.map((tab) => tab.label))];

  // Filter tabs based on active label
  const filteredTabs = tabs.filter((tab) => tab.label === activeLabel);

  if (tabs.length === 0) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Tab Buttons */}
      <div className="flex justify-center gap-6 mb-10 flex-wrap">
        {uniqueLabels.map((label) => (
          <button
            key={label}
            onClick={() => setActiveLabel(label)}
            className={`px-6 py-2 rounded-full text-2xl font-medium shadow-md transition-all ${
              activeLabel === label ? 'bg-yellow-400 text-white scale-105' : 'bg-white text-black'
            }`}
            style={{ boxShadow: 'inset 2px 2px 2px 2px rgba(0, 0, 0, 0.4)' }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="px-4 md:px-24 space-y-12">
        {filteredTabs.map((tab, sectionIndex) => (
          <div key={sectionIndex}>
            <h2 className="text-2xl font-semibold mb-2 text-start">{tab.title}</h2>
            <h2 className="text-xl  mb-6 text-start">{tab.desc}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {tab.images.filter(src => src).map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Image ${idx + 1}`}
                  className="object-cover w-full h-80"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
