'use client';

import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
    // Load Razorpay checkout script dynamically
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup script on unmount if needed
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

  const handlePayment = async (planIndex) => {
    try {
      const plan = seoPlans[planIndex];
      const addons = selectedAddons[planIndex] || [];
      const totalAmount = calculateTotal(planIndex);

      // Convert to paise for Razorpay (multiply by 100)
      const amountInPaise = totalAmount * 100;

      const res = await fetch('/api/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amountInPaise,
          planName: plan.name,
        }),
      });

      if (!res.ok) {
        throw new Error('Failed to create order');
      }

      const order = await res.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY,
        amount: order.amount,
        currency: 'INR',
        name: 'Your Company Name',
        description: `SEO Plan: ${plan.name}`,
        order_id: order.id,
        handler: function (response) {
          alert('Payment Successful!');
          console.log(response);
        },
        prefill: {
          name: 'Your Name',
          email: 'you@example.com',
        },
        notes: {
          plan: plan.name,
          addons: addons.map(i => plan.addons[i].name).join(', '),
        },
        theme: {
          color: '#EDBA3C',
        }
      };

      if (!window.Razorpay) {
        alert('Razorpay SDK not loaded. Please try again later.');
        return;
      }

      const rzp = new window.Razorpay(options);
      rzp.open();

    } catch (error) {
      console.error('Payment error:', error);
      alert('Something went wrong during payment. Please try again.');
    }
  };

  return (
    <div className="relative w-full py-12 px-4 text-white">
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-12 text-black drop-shadow">
          SEO Packages
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {seoPlans.map((plan, planIndex) => (
            <div key={planIndex} className=" text-black shadow-md rounded-2xl p-6 border border-[#EDBA3C] transition hover:shadow-xl hover:scale-[1.02] duration-200 relative">
              <h2 className="text-2xl font-bold mb-1 text-[#EDBA3C]">{plan.name}</h2>
              <ul className="mb-4 space-y-1 text-gray-900 text-sm">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>
              <div className="text-lg font-semibold mb-2 text-[#EDBA3C]">
                ₹{calculateTotal(planIndex).toLocaleString()}/month
              </div>

              <div className="mb-3">
                <p className="font-medium text-sm mb-1">Recommended Add-ons:</p>
                <ul className="text-sm text-gray-900 space-y-1">
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

              <button
                className="mt-4 w-full py-2 rounded-xl font-semibold hover:opacity-90 transition bg-black hover:bg-[#EDBA3C] text-white"
                onClick={() => handlePayment(planIndex)}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
