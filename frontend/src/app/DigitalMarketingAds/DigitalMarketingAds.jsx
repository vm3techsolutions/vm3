'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const baseProductPrice = 2000;
const adPlatformCharge = 2500;
const adSpendMultiplier = 1;

const adPlatforms = ["Google Ads", "Facebook Ads", "Instagram Ads", "LinkedIn Ads"];

const adPlans = [
  { name: "Monthly Plan", duration: "1 Month", multiplier: 1 },
  { name: "Quarterly Plan", duration: "3 Months", multiplier: 3 },
  { name: "Half-Yearly Plan", duration: "6 Months", multiplier: 6 },
  { name: "Yearly Plan", duration: "12 Months", multiplier: 12 }
];

function DigitalAdCard({ plan }) {
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [adSpends, setAdSpends] = useState({
    "Google Ads": 0,
    "Facebook Ads": 0,
    "Instagram Ads": 0,
    "LinkedIn Ads": 0,
  });

  const [monthlyBudget, setMonthlyBudget] = useState(0);
  const router = useRouter();

  const togglePlatform = (platform) => {
    setSelectedPlatforms((prev) => {
      if (prev.includes(platform)) {
        setAdSpends((spends) => ({ ...spends, [platform]: 0 }));
        return prev.filter((p) => p !== platform);
      } else {
        return [...prev, platform];
      }
    });
  };

  const handleSpendChange = (platform, value) => {
    const spend = Number(value);
    if (spend >= 0) {
      setAdSpends((prev) => ({ ...prev, [platform]: spend }));
      if (!selectedPlatforms.includes(platform)) {
        setSelectedPlatforms((prev) => [...prev, platform]);
      }
    }
  };

  const handleMonthlyBudgetChange = (e) => {
    const value = Number(e.target.value);
    if (value >= 0) {
      setMonthlyBudget(value);
    }
  };

  const totalAdSpend = selectedPlatforms.reduce(
    (sum, platform) => sum + (adSpends[platform] || 0),
    0
  );

  const calculatePrice = () =>
    (baseProductPrice +
      selectedPlatforms.length * adPlatformCharge +
      (totalAdSpend + monthlyBudget) * adSpendMultiplier) *
    plan.multiplier;

  const handleGetStarted = () => {
    const data = {
      plan: plan.name,
      duration: plan.duration,
      multiplier: plan.multiplier,
      selectedPlatforms,
      adSpends,
      monthlyBudget,
      totalPrice: calculatePrice(),
    };
    const params = new URLSearchParams({
      data: JSON.stringify(data),
    }).toString();

    router.push(`/payment?${params}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-[#EDBA3C] flex flex-col justify-between min-h-[560px] p-6 transition hover:shadow-xl hover:scale-[1.02] duration-200 relative">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-[#EDBA3C]">{plan.name}</h2>
        <p className="text-sm text-gray-500 mb-4">{plan.duration}</p>

        <div className="mb-6">
          <p className="text-sm font-semibold mb-2 text-gray-800">
            Select Ad Platforms and Enter Monthly Spend:
          </p>
          <div className="flex flex-col gap-6">
            {adPlatforms.map((platform) => {
              const isSelected = selectedPlatforms.includes(platform);
              return (
                <div key={platform} className="flex flex-col gap-2">
                  <label className="flex items-center gap-3 text-sm font-medium cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => togglePlatform(platform)}
                      className="accent-gray-800 w-4 h-4"
                    />
                    <span className="flex-1">{platform}</span>
                  </label>
                  {isSelected && (
                    <input
                      type="number"
                      min={0}
                      max={50000}
                      step={100}
                      value={adSpends[platform]}
                      onChange={(e) => handleSpendChange(platform, e.target.value)}
                      placeholder={`Enter spend for ${platform}`}
                      className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            Enter Your Overall Monthly Budget (₹):
          </label>
          <input
            type="number"
            min={0}
            value={monthlyBudget}
            onChange={handleMonthlyBudgetChange}
            placeholder="Enter your monthly budget"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-800"
          />
        </div>
      </div>

      <div>
        <div className="text-2xl font-bold mb-4 text-[#EDBA3C]">
          Total Price: ₹{calculatePrice()}
        </div>
        <button
          className="mt-4 w-full bg-gray-900 text-white hover:bg-yellow-500 border py-2 rounded-xl transition"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default function DigitalAdsPlans() {
  return (
    <div className="max-w-7xl mx-auto py-14 px-4">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-black drop-shadow">
        Digital Advertising Packages
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {adPlans.map((plan, index) => (
          <DigitalAdCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
}
