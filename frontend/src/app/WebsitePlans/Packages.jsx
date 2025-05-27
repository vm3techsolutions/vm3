'use client';

import React from "react";

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
    addons: ["Domain & Hosting", "Logo Design"]
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
    addons: ["SEO (10 Keywords)", "Google My Business", "Social Media Setup"]
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
    addons: ["Product Upload Support", "WhatsApp Business API", "Facebook/Instagram Shop"]
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
    addons: ["SEO Audit + Execution", "Blog Writing", "Monthly Analytics Report"]
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
    addons: ["Dedicated Hosting", "DevOps Support", "Custom Integrations (ERP/CRM)"]
  }
];

export default function WebsitePlans() {
  return (
    <div className="relative w-full py-12 px-4 text-white">
      {/* Background Image */}
      
      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-black">
          Website Development Packages
        </h1>

        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-16 px-4 md:px-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className=" text-black rounded-2xl p-6 w-full md:w-[300px] border transition hover:shadow-xl hover:scale-[1.02] duration-200 relative"
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
              <div className="text-lg font-semibold mb-2 text-[#EDBA3C]">{plan.price}</div>
              <div className="mb-2">
                <p className="font-medium text-sm mb-1">Recommended Add-ons:</p>
                <ul className="text-sm list-disc list-inside text-gray-900">
                  {plan.addons.map((addon, j) => (
                    <li key={j}>{addon}</li>
                  ))}
                </ul>
              </div>
              <button
                className="mt-4 w-full py-2 rounded-xl font-semibold hover:opacity-90 transition  bg-black hover:bg-[#EDBA3C] text-white"
                // style={{ backgroundColor: '#EDBA3C', color: '#1a1a1a' }}
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
