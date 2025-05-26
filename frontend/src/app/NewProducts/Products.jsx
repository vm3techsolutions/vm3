import Link from "next/link";

const Products = () => {
  return (
    <div className="py-24 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white p-6">
      

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Social Media Marketing */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">
            Social Media Marketing
          </h2>
          <p className="text-gray-300 mb-6">
            Customize your platforms and post frequency to boost your online
            presence.
          </p>
          <Link
            href="/SocialMediaPlans"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-blue-400/40 transition duration-300"
          >
            View Plan
          </Link>
        </div>

        {/* Website Development */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-4 text-green-400">
            Website Development
          </h2>
          <p className="text-gray-300 mb-6">
            Choose between our Starter or Business plan for your website needs.
          </p>
          <Link
            href="/WebsitePlans"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-green-400/40 transition duration-300"
          >
            View Plan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Products;
