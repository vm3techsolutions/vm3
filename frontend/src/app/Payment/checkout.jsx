'use client';

import React, { useState } from 'react';

export default function PaymentPage() {
  const selectedPlan = {
    name: 'Business Plan',
    basePrice: 2999,
    addons: [
      { name: 'SEO (10 Keywords)', price: 1500 },
      { name: 'Google My Business', price: 799 },
    ],
    selectedAddons: ['SEO (10 Keywords)'],
    duration: '1 Month', // or '3 Months', '6 Months', '12 Months'
  };

  const totalPrice =
    selectedPlan.basePrice +
    selectedPlan.addons
      .filter((a) => selectedPlan.selectedAddons.includes(a.name))
      .reduce((sum, a) => sum + a.price, 0);

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    gstin: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });

  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setAccepted(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      Object.entries(form).some(
        ([key, val]) => key !== 'gstin' && !val
      )
    ) {
      setError('Please fill all required fields.');
      return;
    }
    if (!accepted) {
      setError('You must accept the Terms & Conditions and Privacy Policy.');
      return;
    }

    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plan: selectedPlan.name,
          basePrice: selectedPlan.basePrice,
          selectedAddons: selectedPlan.selectedAddons,
          totalPrice,
          userInfo: {
            fullName: form.fullName,
            email: form.email,
            phone: form.phone,
            address: form.address,
            gstin: form.gstin,
          },
          paymentDetails: {
            cardNumber: form.cardNumber,
            expiry: form.expiry,
            cvv: form.cvv,
          },
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccessMsg('Payment successful! Thank you.');
        setForm({
          fullName: '',
          email: '',
          phone: '',
          address: '',
          gstin: '',
          cardNumber: '',
          expiry: '',
          cvv: '',
        });
        setAccepted(false);
      } else {
        setError(data.message || 'Payment failed.');
      }
    } catch (err) {
      setError('Payment error: ' + err.message);
    }
    setLoading(false);
  };

  // Show note for recurring plans (duration not "1 Month")
  const isRecurring =
    selectedPlan.duration &&
    selectedPlan.duration !== '1 Month';

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-0 w-full">
      <div className="w-full max-w-[1600px] bg-white rounded-none shadow-lg flex flex-col md:flex-row overflow-hidden border-2 border-[#EDBA3C]">
        {/* Form Section */}
        <div className="w-full md:w-2/3 p-12">
          <h1 className="text-4xl font-extrabold text-[#593249] mb-6 tracking-tight">Complete Your Payment</h1>
          {isRecurring && (
            <div className="mb-4 p-3 bg-yellow-50 border-l-4 border-[#EDBA3C] text-yellow-800 rounded">
              <strong>Note:</strong> For recurring packages, your card details will be securely saved for future monthly transactions.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-1 text-[#593249]">Full Name<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  className="w-full border border-[#EDBA3C] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#EDBA3C] bg-[#fdf8f6] text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-[#593249]">Email<span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border border-[#EDBA3C] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#EDBA3C] bg-[#fdf8f6] text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-[#593249]">Phone Number<span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border border-[#EDBA3C] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#EDBA3C] bg-[#fdf8f6] text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-[#593249]">Address<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="w-full border border-[#EDBA3C] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#EDBA3C] bg-[#fdf8f6] text-gray-900"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1 text-[#593249]">GSTIN Number (optional)</label>
                <input
                  type="text"
                  name="gstin"
                  value={form.gstin}
                  onChange={handleChange}
                  className="w-full border border-[#EDBA3C] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#EDBA3C] bg-[#fdf8f6] text-gray-900"
                  placeholder="Enter GSTIN if applicable"
                />
              </div>
            </div>

            <hr className="my-4 border-[#EDBA3C]" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-1 text-[#593249]">Card Number<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="cardNumber"
                  maxLength={16}
                  value={form.cardNumber}
                  onChange={handleChange}
                  className="w-full border border-[#EDBA3C] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#EDBA3C] bg-[#fdf8f6] text-gray-900"
                  required
                />
              </div>
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block font-semibold mb-1 text-[#593249]">Expiry (MM/YY)<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="expiry"
                    maxLength={5}
                    placeholder="MM/YY"
                    value={form.expiry}
                    onChange={handleChange}
                    className="w-full border border-[#EDBA3C] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#EDBA3C] bg-[#fdf8f6] text-gray-900"
                    required
                  />
                </div>
                <div className="w-1/2">
                  <label className="block font-semibold mb-1 text-[#593249]">CVV<span className="text-red-500">*</span></label>
                  <input
                    type="password"
                    name="cvv"
                    maxLength={3}
                    value={form.cvv}
                    onChange={handleChange}
                    className="w-full border border-[#EDBA3C] rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#EDBA3C] bg-[#fdf8f6] text-gray-900"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="accept"
                checked={accepted}
                onChange={handleCheckbox}
                className="mr-2 accent-[#593249]"
                required
              />
              <label htmlFor="accept" className="text-sm text-gray-700">
                I accept the{' '}
                <a href="/Conditions" target="_blank" className="underline text-[#593249]">Terms & Conditions</a> and{' '}
                <a href="/Policy" target="_blank" className="underline text-[#593249]">Privacy Policy</a>
                <span className="text-red-500">*</span>
              </label>
            </div>

            {error && <p className="text-red-600 font-medium">{error}</p>}
            {successMsg && <p className="text-green-600 font-medium">{successMsg}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#EDBA3C] text-[#593249] py-3 rounded-lg font-semibold hover:bg-[#593249] hover:text-[#EDBA3C] transition"
            >
              {loading ? 'Processing...' : `Pay ₹${totalPrice}`}
            </button>
          </form>
        </div>

        {/* Sidebar Section */}
        <div className="w-full md:w-1/3 bg-[#fdf8f6] border-l-2 border-[#EDBA3C] p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#593249]">Your Plan Summary</h2>
            <p className="text-[#593249] font-semibold mb-1">{selectedPlan.name}</p>
            <p className="text-sm text-gray-500 mb-4">Base Price: <span className="text-[#EDBA3C] font-semibold">₹{selectedPlan.basePrice}</span></p>

            <p className="text-[#593249] font-semibold mb-2">Add-ons:</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
              {selectedPlan.selectedAddons.length > 0 ? (
                selectedPlan.selectedAddons.map((addon, i) => {
                  const price = selectedPlan.addons.find((a) => a.name === addon)?.price || 0;
                  return (
                    <li key={i}>
                      {addon} <span className="text-[#EDBA3C]">(+₹{price})</span>
                    </li>
                  );
                })
              ) : (
                <li>No add-ons selected</li>
              )}
            </ul>
          </div>

          <div className="mt-6">
            <hr className="mb-4 border-[#EDBA3C]" />
            <p className="text-[#593249] text-lg font-semibold">
              Total: <span className="text-[#EDBA3C] font-bold">₹{totalPrice}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
