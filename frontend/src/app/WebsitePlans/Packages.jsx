'use client';

import React, { useState } from 'react';

const plans = [
  {
    name: "Starter Plan",
    pages: "1–5",
    type: "Static Website (HTML or Basic WordPress)",
    features: [
      "Mobile Responsive",
      "Basic SEO",
      "Contact Form",
      "Social Links",
      "1 Update/month"
    ],
    price: "₹1,499",
    basePrice: 1499,
    addons: [
      { name: "Domain & Hosting", price: 500 },
      { name: "Logo Design", price: 300 }
    ]
  },
  {
    name: "Business Plan",
    pages: "5–10",
    type: "Dynamic Website (WordPress)",
    features: [
      "Custom Design",
      "Blog Section",
      "WhatsApp Chat",
      "Google Maps",
      "2 Updates/month"
    ],
    price: "₹2,999",
    basePrice: 2999,
    addons: [
      { name: "SEO (10 Keywords)", price: 600 },
      { name: "Google My Business", price: 400 },
      { name: "Social Media Setup", price: 300 }
    ]
  },
  {
    name: "E-commerce Plan",
    pages: "Up to 50 Products",
    type: "E-commerce Website (WooCommerce)",
    features: [
      "Product Listings",
      "Cart & Checkout",
      "Payment Gateway",
      "Order/Inventory Panel",
      "2 Updates/month"
    ],
    price: "₹5,499",
    basePrice: 5499,
    addons: [
      { name: "Product Upload Support", price: 800 },
      { name: "WhatsApp Business API", price: 500 },
      { name: "Facebook/Instagram Shop", price: 700 }
    ]
  },
  {
    name: "Growth Plan",
    pages: "10–20+",
    type: "Custom Dynamic Website (WP/React/Laravel)",
    features: [
      "UI/UX Focus",
      "CRM/API Integration",
      "Advanced SEO",
      "Performance Optimization",
      "3 Updates/month"
    ],
    price: "₹9,999",
    basePrice: 9999,
    addons: [
      { name: "SEO Audit + Execution", price: 1000 },
      { name: "Blog Writing", price: 700 },
      { name: "Monthly Analytics Report", price: 500 }
    ]
  },
  {
    name: "Enterprise Plan",
    pages: "Custom",
    type: "Web App / SaaS / Portal",
    features: [
      "Custom Modules",
      "User Logins/Dashboards",
      "Automation Workflows",
      "Data Reports",
      "Priority Support"
    ],
    price: "Custom Quote",
    basePrice: 0,
    addons: [
      { name: "Dedicated Hosting", price: 2000 },
      { name: "DevOps Support", price: 1500 },
      { name: "Custom Integrations (ERP/CRM)", price: 2500 }
    ]
  }
];

export default function WebsitePlans() {
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
    const plan = plans[planIndex];
    const addons = selectedAddons[planIndex] || [];
    const addonTotal = addons.reduce((sum, i) => sum + plan.addons[i].price, 0);
    return plan.basePrice + addonTotal;
  };

  return (
    <div className="relative w-full py-12 px-4 text-white">
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-black">
          Website Development Packages
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, planIndex) => (
            <div
              key={planIndex}
              className="text-black rounded-2xl p-6 w-full md:w-[300px] border transition hover:shadow-xl hover:scale-[1.02] duration-200 relative"
              style={{ borderColor: '#EDBA3C' }}
            >
              <h2 className="text-xl font-bold mb-1 text-[#EDBA3C]">{plan.name}</h2>
              <p className="text-sm text-gray-900 mb-2">{plan.type}</p>
              <p className="text-sm mb-2">Pages: <strong>{plan.pages}</strong></p>
              <ul className="mb-4 space-y-1 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <div className="text-lg font-semibold mb-2 text-[#EDBA3C]">
                {plan.basePrice > 0 ? `₹${calculateTotal(planIndex).toLocaleString()}` : "Custom Quote"}
              </div>

              <div className="mb-2">
                <p className="font-medium text-sm mb-1">Recommended Add-ons:</p>
                <ul className="text-sm text-gray-900 space-y-1">
                  {plan.addons.map((addon, addonIndex) => {
                    const checkboxId = `web-addon-${planIndex}-${addonIndex}`;
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

              <button
                className="mt-4 w-full py-2 rounded-xl font-semibold hover:opacity-90 transition bg-black hover:bg-[#EDBA3C] text-white"
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
