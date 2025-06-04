'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

export default function PaymentPage() {

  const searchParams = useSearchParams();
  const [planDetails, setPlanDetails] = useState(null);
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

  useEffect(() => {
    if (searchParams) {
      const plan = searchParams.get('plan');
      const duration = searchParams.get('duration');
      const multiplier = Number(searchParams.get('multiplier'));
      const platforms = searchParams.get('platforms')?.split(',') || [];
      const posts = Number(searchParams.get('posts') || 0);
      const blogs = Number(searchParams.get('blogs') || 0);
      const caseStudies = Number(searchParams.get('caseStudies') || 0);
      const videoReels = Number(searchParams.get('videoReels') || 0);
      const jobPosts = Number(searchParams.get('jobPosts') || 0);
      const total = Number(searchParams.get('total') || 0);
      const baseProductPrice = Number(searchParams.get('baseProductPrice') || 0);
      const serviceName = searchParams.get('serviceName') || 'plan';

      setPlanDetails({
        plan,
        duration,
        multiplier,
        platforms,
        posts,
        blogs,
        caseStudies,
        videoReels,
        jobPosts,
        total,
        baseProductPrice,
        serviceName,
      });
    }
  }, [searchParams]);



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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    setAccepted(e.target.checked);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (
  //     Object.entries(form).some(
  //       ([key, val]) => key !== 'gstin' && !val
  //     )
  //   ) {
  //     setError('Please fill all required fields.');
  //     return;
  //   }
  //   if (!accepted) {
  //     setError('You must accept the Terms & Conditions and Privacy Policy.');
  //     return;
  //   }

  //   setLoading(true);
  //   setError('');
  
  //   setLoading(false);
  // };

 
// const createDynamicPlan = async () => {
//   try {
//     // Format date as YYYYMMDD-HHmmss for uniqueness and readability
//     const now = new Date();
//     const pad = (n) => n.toString().padStart(2, '0');
//     const formattedDate = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;

//     const response = await axios.post(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/create-plan`, {
//       name: `${planDetails.serviceName}-${formattedDate}`,
//       amount: planDetails.total,
//       period: 'monthly',
//       interval: 1
//     });

//     const data = response?.data;

//     if (data?.success && data?.plan?.id) {
//       console.log('Created plan:', data.plan.id);
//       return data.plan.id;
//     } else {
//       console.error('Failed to create plan:', data?.error || 'Unknown error');
//       return null;
//     }
//   } catch (error) {
//     console.error('API error:', error?.response?.data || error.message);
//     return null;
//   }
// };


// const createDynamicPlan = async () => {
//   try {
//     const now = new Date();
//     const pad = (n) => n.toString().padStart(2, '0');
//     const formattedDate = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;

//     // Step 1: Create Plan
//     const planResponse = await axios.post(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/create-plan`, {
//       name: `${planDetails.serviceName}-${formattedDate}`,
//       amount: planDetails.total,
//       period: 'monthly',
//       interval: 1
//     });

//     const data = planResponse?.data;

//     if (!data?.success || !data?.plan?.id) {
//       console.error('Failed to create plan:', data?.error || 'Unknown error');
//       return;
//     }

//     const planId = data.plan.id;
//     console.log('Created plan:', planId);

//     // Step 2: Create Subscription
//     const subscriptionResponse = await axios.post(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/create-subscription`, {
//       plan_id: planId,
//       customer_notify: 1 ,// Optional: Razorpay sends email notification
//       total_count: 1 * (planDetails.multiplier), // Total billing cycles; change as per your needs
//       customer: {
//         name: form.fullName,
//         email: form.email,
//         contact: form.phone,
//         address: {
//           line1: form.address,
//           gstin: form.gstin || undefined, // Include GSTIN if provided
//         },
//       },
//     });

//     const subscriptionData = subscriptionResponse?.data;

//     if (subscriptionData?.success) {
//       console.log('Subscription created:', subscriptionData.subscription.id);
//       return subscriptionData.subscription;
//     } else {
//       console.error('Failed to create subscription:', subscriptionData?.error || 'Unknown error');
//       return null;
//     }

//   } catch (error) {
//     console.error('API error:', error?.response?.data || error.message);
//     return null;
//   }
// };

const createDynamicPlan = async () => {
  try {
    const now = new Date();
    const pad = (n) => n.toString().padStart(2, '0');
    const formattedDate = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;

    // Step 1: Create Plan
    const planResponse = await axios.post(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/create-plan`, {
      name: `${planDetails.serviceName}-${formattedDate}`,
      amount: planDetails.total,
      period: 'monthly',
      interval: 1
    });

    const data = planResponse?.data;

    if (!data?.success || !data?.plan?.id) {
      console.error('Failed to create plan:', data?.error || 'Unknown error');
      return;
    }

    const planId = data.plan.id;
    console.log('Created plan:', planId);

    // Step 2: Create Subscription with customer details
    const subscriptionResponse = await axios.post(`${process.env.NEXT_PUBLIC_BACK_END_URL}/api/create-subscription`, {
      plan_id: planId,
      customer_notify: 1,
      total_count: planDetails.multiplier,
      customer: {
        name: form.fullName,
        email: form.email,
        contact: form.phone,
        notes: {
          address: form.address,
          gstin: form.gstin || '',
        },
      },
    });

    const subscriptionData = subscriptionResponse?.data;

    if (subscriptionData?.success && subscriptionData?.subscription?.short_url) {
      console.log('Subscription created:', subscriptionData.subscription.id);
      return subscriptionData.subscription;
    } else {
      console.error('Failed to create subscription:', subscriptionData?.error || 'Unknown error');
      return null;
    }

  } catch (error) {
    console.error('API error:', error?.response?.data || error.message);
    setError('Error creating subscription. Please try again.');
    return null;
  }
};



 const handleSubmit = async (e) => {
    e.preventDefault();

    if (!accepted) {
      setError('You must accept the Terms & Conditions and Privacy Policy.');
      return;
    }

    setLoading(true);
    setError('');

    const subscription = await createDynamicPlan();

    if (subscription?.short_url) {
      // Redirect to Razorpay hosted payment page
      window.location.href = subscription.short_url;
    } else {
      setError('Failed to initiate payment. Please try again.');
    }

    setLoading(false);
  };


console.log(planDetails, 'planDetails in checkout page');

 

// Show note for recurring plans (duration not "1 Month")
  const isRecurring =
    selectedPlan.duration &&
    selectedPlan.duration !== '1 Month';

  if (!planDetails) return <div>Loading checkout details...</div>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Checkout for {planDetails.plan}</h1>

      {/* <div className="border p-4 rounded mb-6">
        <p><strong>Duration:</strong> {planDetails.duration}</p>
        <p><strong>Selected Platforms:</strong> {planDetails.platforms.join(', ')}</p>
        <p><strong>Posts:</strong> {planDetails.posts}</p>
        <p><strong>Blogs:</strong> {planDetails.blogs}</p>
        <p><strong>Case Studies:</strong> {planDetails.caseStudies}</p>
        <p><strong>Video Reels:</strong> {planDetails.videoReels}</p>
        <p><strong>Job Posts:</strong> {planDetails.jobPosts}</p>
        <p><strong>Base Product Price:</strong> ₹{planDetails.baseProductPrice.toFixed(0)}</p>
        <p className="font-bold text-lg mt-2 text-green-700">Total Price: ₹{planDetails.total.toFixed(0)}</p>
      </div> */}

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
                // onClick={createDynamicPlan}
                type="submit"
                disabled={loading}
                className="w-full bg-[#EDBA3C] text-[#593249] py-3 rounded-lg font-semibold hover:bg-[#593249] hover:text-[#EDBA3C] transition"
              >
                {loading ? 'Processing...' : `Pay ₹${planDetails.total.toFixed(0)}`}
              </button>
            </form>
          </div>

          {/* Sidebar Section */}
          {/* <div className="w-full md:w-1/3 bg-[#fdf8f6] border-l-2 border-[#EDBA3C] p-12 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#593249]">Your Plan Summary</h2>
            <p className="text-[#593249] font-semibold mb-1">{selectedPlan.name}</p>
            <p className="text-sm text-gray-500 mb-4">Base Price: <span className="text-[#EDBA3C] font-semibold">₹{planDetails.baseProductPrice}</span></p>

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
              Total: <span className="text-[#EDBA3C] font-bold">₹{planDetails.total}</span>
            </p>
          </div>
        </div> */}
          <div className="w-full md:w-1/3 bg-[#fdf8f6] border-l-2 border-[#EDBA3C] p-12 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[#593249]">Your Plan Summary</h2>
              <p className="text-[#593249] font-semibold mb-1">{planDetails.plan}</p>
              <p className="text-sm text-gray-500 mb-2">
                Duration: <span className="text-[#EDBA3C] font-semibold">{planDetails.duration}</span>
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Base Price: <span className="text-[#EDBA3C] font-semibold">₹{planDetails.baseProductPrice.toFixed(0)}</span>
              </p>


              <p className="text-[#593249] font-semibold mb-2">Add-ons:</p>
              <ul className="list-disc list-inside text-sm text-gray-700 mb-4">
                {/* {selectedPlan.selectedAddons.length > 0 ? (
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
  )} */}

                {/* Extra planDetails content as add-on items */}
                {planDetails && (
                  <>
                    <p className="text-sm text-gray-500 mb-2">
                      Selected Platforms:{" "}
                      <span className="text-[#EDBA3C] font-semibold">
                        {planDetails.platforms.length ? planDetails.platforms.join(", ") : "None"}
                      </span>
                    </p>
                    {planDetails.posts > 0 && (
                      <p className="text-sm text-gray-500 mb-1">Posts: {planDetails.posts}</p>
                    )}
                    {planDetails.blogs > 0 && (
                      <p className="text-sm text-gray-500 mb-1">Blogs: {planDetails.blogs}</p>
                    )}
                    {planDetails.caseStudies > 0 && (
                      <p className="text-sm text-gray-500 mb-1">Case Studies: {planDetails.caseStudies}</p>
                    )}
                    {planDetails.videoReels > 0 && (
                      <p className="text-sm text-gray-500 mb-1">Video Reels: {planDetails.videoReels}</p>
                    )}
                    {planDetails.jobPosts > 0 && (
                      <p className="text-sm text-gray-500 mb-1">Job Posts: {planDetails.jobPosts}</p>
                    )}

                  </>
                )}
              </ul>

            </div>

            <div className="mt-6">
              <hr className="mb-4 border-[#EDBA3C]" />
              <p className="text-[#593249] text-lg font-semibold">
                Total:{" "}
                <span className="text-[#EDBA3C] font-bold">
                  ₹{planDetails?.total?.toFixed(0) || totalPrice}
                </span>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
}
