'use client';
import Link from "next/link";

const Products = () => {
  return (
    <section
      className="bg-cover bg-center py-16 px-4"
      style={{ backgroundImage: "url('/assets/Verticle.jpg')" }} // same bg as verticals
    >
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-[#FEC63F] font-semibold text-xl">OUR SERVICES</h3>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-4 text-white py-5">
          Choose What You Need Most
        </h1>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 px-5 ">
          {/* Social Media Marketing */}
          <div className="bg-black/40 bg-opacity-30 rounded-xl p-6 text-left transition hover:shadow-xl hover:scale-[1.02] duration-200 relative">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">
              Social Media Marketing
            </h2>
            <p className="text-white mb-6">
              Customize your platforms and post frequency to boost your online presence.
            </p>
            <Link
              href="/SocialMediaPlans"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white hover:text-black font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-blue-400/40 transition duration-300"
            >
              View Plan
            </Link>
          </div>

          {/* Website Development */}
          <div className="bg-black/40 bg-opacity-30 rounded-xl p-6 text-left transition hover:shadow-xl hover:scale-[1.02] duration-200 relative">
            <h2 className="text-2xl font-bold mb-4 text-green-400">
              Website Development
            </h2>
            <p className="text-white mb-6">
              Choose between our Starter or Business plan for your website needs.
            </p>
            <Link
              href="/WebsitePlans"
              className="inline-block bg-green-500 hover:bg-green-600 text-white hover:text-black font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-green-400/40 transition duration-300"
            >
              View Plan
            </Link>
          </div>

          {/* SEO Plans */}
          <div className="bg-black/40 bg-opacity-30 rounded-xl p-6 text-left transition hover:shadow-xl hover:scale-[1.02] duration-200 relative">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">SEO</h2>
            <p className="text-white mb-6">
              Choose between our Starter or Business plan for your website needs.
            </p>
            <Link
              href="/SeoPlans"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white hover:text-black font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-yellow-400/40 transition duration-300"
            >
              View Plan
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
