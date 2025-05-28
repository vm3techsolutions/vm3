'use client';

import React from 'react';

const seoPlans = [
	{
		name: 'Basic SEO',
		features: [
			'500 Target Keywords',
			'On & Off-Page SEO',
			'Meta Tag Setup',
			'Google Search Console Setup',
			'1 Report/month',
			'50 keyword researchs',
			'Technical Audit',
			'1 Competitor Analysis',
			'Local SEO',
		],
		basePrice: 10000,
	},
	{
		name: 'Advanced SEO',
		features: [
			'2000 Keywords',
			'Comprehensive SEO Strategy',
			'Content Marketing',
			'Local + Technical SEO',
			'2 Progress Reports',
			'100 keyword researchs',
			'5 Competitor Analysis',
			'Social Media Integration',
			'Monthly Performance Review',
			'Backlink Building',
			'Technical SEO Fixes',
			'Content Optimization',
			'GMB Management',
			'Blog Optimization',
			'Landing Page Optimization',
		],
		basePrice: 15000,
	},
];

export default function SEOCards() {
	return (
		<div className="relative w-full py-12 px-4 text-white">
			{/* Background Image */}

			{/* Content */}
			<div className="relative z-10 max-w-6xl mx-auto">
				<h1 className="text-4xl font-extrabold text-center mb-12 text-black drop-shadow">
					SEO Packages
				</h1>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
					{seoPlans.map((plan, planIndex) => (
						<div
							key={planIndex}
							className="text-black shadow-md rounded-2xl p-6 border border-[#EDBA3C] transition hover:shadow-xl hover:scale-[1.02] duration-200 relative"
						>
							<h2 className="text-2xl font-bold mb-1 text-[#EDBA3C]">
								{plan.name}
							</h2>
							<ul className="mb-4 space-y-1 text-gray-900 text-sm">
								{plan.features.map((feature, i) => (
									<li key={i}>✔ {feature}</li>
								))}
							</ul>
							<div className="text-lg font-semibold mb-6 text-[#EDBA3C]">
								₹{plan.basePrice.toLocaleString()}/month
							</div>
							<button className="mt-4 w-full py-2 rounded-xl font-semibold hover:opacity-90 transition bg-black hover:bg-[#EDBA3C] text-white">
								Select Plan
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}