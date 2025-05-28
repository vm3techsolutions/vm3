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
      monthlyBudget * adSpendMultiplier) *
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

    router.push(`/Payment?${params}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md border border-[#EDBA3C] flex flex-col justify-between p-6 min-h-[560px] transition hover:shadow-xl hover:scale-[1.02] duration-200 relative">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-[#EDBA3C]">{plan.name}</h2>
        <p className="text-sm text-gray-600 mb-4">{plan.duration}</p>

        <div className="mb-6">
          <p className="text-sm font-semibold mb-2 text-gray-800">
            Select Ad Platforms and Monthly Spend:
          </p>
          <div className="flex flex-col gap-6">
            {adPlatforms.map((platform) => {
              const isSelected = selectedPlatforms.includes(platform);
              return (
                <div key={platform} className="flex flex-col gap-1">
                  <label className="flex items-center gap-3 text-sm font-medium text-gray-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => togglePlatform(platform)}
                      className="accent-[#EDBA3C] w-4 h-4"
                    />
                    <span className="flex-1">{platform}</span>
                    <span className="w-28 text-right font-mono text-[#EDBA3C]">
                      ₹{adSpends[platform]}
                    </span>
                  </label>
                  <input
                    type="range"
                    min={0}
                    max={50000}
                    step={500}
                    value={adSpends[platform]}
                    onChange={(e) => handleSpendChange(platform, e.target.value)}
                    disabled={!isSelected}
                    className={`w-full ${
                      isSelected
                        ? "accent-[#EDBA3C] cursor-pointer"
                        : "cursor-not-allowed opacity-60"
                    }`}
                  />
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
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#EDBA3C] text-gray-900"
          />
        </div>
      </div>

      <div>
        <div className="text-2xl font-bold mb-4 text-[#EDBA3C]">
          Total Price: ₹{calculatePrice()}
        </div>
        <button
          className="w-full bg-[#EDBA3C] text-[#593249] py-3 rounded-xl font-bold text-lg transition hover:bg-[#593249] hover:text-[#EDBA3C] border"
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
      <h1 className="text-4xl font-extrabold text-center mb-12 text-[#EDBA3C] drop-shadow">
        Digital Advertising Packages
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {adPlans.map((plan, index) => (
          <DigitalAdCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
}
