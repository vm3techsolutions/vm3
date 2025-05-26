'use client';

import React, { useState } from 'react';

const seoPlans = [
  {
    name: "Basic SEO",
    features: [
      "5 Target Keywords",
      "On-Page Optimization",
      "Meta Tag Setup",
      "Google Search Console Setup",
      "1 Report/month"
    ],
    basePrice: 999,
    addons: [
      { name: "Keyword Research", price: 300 },
      { name: "Technical Audit", price: 500 }
    ]
  },
  {
    name: "Standard SEO",
    features: [
      "10 Target Keywords",
      "On & Off-Page SEO",
      "Backlink Building",
      "Technical SEO Fixes",
      "2 Reports/month"
    ],
    basePrice: 2499,
    addons: [
      { name: "Blog Optimization", price: 600 },
      { name: "GMB Management", price: 400 }
    ]
  },
  {
    name: "Advanced SEO",
    features: [
      "20+ Keywords",
      "Comprehensive SEO Strategy",
      "Content Marketing",
      "Local + Technical SEO",
      "Weekly Progress Reports"
    ],
    basePrice: 4999,
    addons: [
      { name: "Competitor Analysis", price: 800 },
      { name: "Landing Page Optimization", price: 700 }
    ]
  }
];

export default function SEOCards() {
  const [selectedAddons, setSelectedAddons] = useState({});

  const toggleAddon = (planIndex, addonIndex) => {
    setSelectedAddons(prev => {
      const selected = prev[planIndex] || [];
      if (selected.includes(addonIndex)) {
        return { ...prev, [planIndex]: selected.filter(i => i !== addonIndex) };
      } else {
        return { ...prev, [planIndex]: [...selected, addonIndex] };
      }
    });
  };

  const calculateTotal = (planIndex) => {
    const plan = seoPlans[planIndex];
    const addons = selectedAddons[planIndex] || [];
    const addonTotal = addons.reduce((sum, i) => sum + plan.addons[i].price, 0);
    return plan.basePrice + addonTotal;
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">

         <h1 className="text-4xl font-extrabold text-center mb-12 text-black drop-shadow">
       SEO Packages
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {seoPlans.map((plan, planIndex) => (
          <div key={planIndex} className="bg-white shadow-md rounded-2xl p-6 border-2 border-blue-200">
            <h2 className="text-2xl font-bold mb-1 text-[#3B82F6]">{plan.name}</h2>
            <ul className="mb-4 space-y-1 text-gray-700 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <div className="text-lg font-semibold mb-2 text-[#3B82F6]">
              ₹{calculateTotal(planIndex).toLocaleString()}/month
            </div>

            <div className="mb-3">
              <p className="font-medium text-sm mb-1">Recommended Add-ons:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                {plan.addons.map((addon, addonIndex) => {
                  const checkboxId = `addon-${planIndex}-${addonIndex}`;
                  return (
                    <li key={addonIndex} className="flex items-center">
                      <input
                        type="checkbox"
                        id={checkboxId}
                        className="mr-2"
                        checked={selectedAddons[planIndex]?.includes(addonIndex) || false}
                        onChange={() => toggleAddon(planIndex, addonIndex)}
                      />
                      <label htmlFor={checkboxId}>
                        {addon.name} (+₹{addon.price})
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>

            <button className="mt-4 w-full bg-[#593249] text-white py-2 rounded-xl hover:bg-[#402439] transition">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
