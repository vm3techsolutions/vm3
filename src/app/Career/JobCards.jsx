// components/JobCards.jsx
import { FaTag, FaClock } from "react-icons/fa";
import Link from "next/link";

const jobs = [
  {
    title: "Sales Manager",
    category: "on-site",
    titleLink: "/careers/sales-manager",
    categoryLink: "/careers/category/on-site",
  },
  {
    title: "Shopify Developer",
    category: "on-site",
    titleLink: "/careers/shopify-developer",
    categoryLink: "/careers/category/on-site",
  },
  {
    title: "UI/UX Designer",
    category: "on-site",
    titleLink: "/careers/ui-ux-designer",
    categoryLink: "/careers/category/on-site",
  },
  {
    title: "Back Office Executive",
    category: "on-site",
    titleLink: "/careers/back-office-executive",
    categoryLink: "/careers/category/on-site",
  },
  {
    title: "HR Intern",
    category: "on-site",
    titleLink: "/careers/hr-intern",
    categoryLink: "/careers/category/on-site",
  },
  {
    title: "Web Developer",
    category: "on-site",
    titleLink: "/careers/web-developer",
    categoryLink: "/careers/category/on-site",
  },
  {
    title: "Content Writer",
    category: "on-site",
    titleLink: "/careers/content-writer",
    categoryLink: "/careers/category/on-site",
  },
  {
    title: "Tele Caller",
    category: "on-site",
    titleLink: "/careers/tele-caller",
    categoryLink: "/careers/category/on-site",
  },
  {
    title: "Business Development Manager",
    category: "on-site",
    titleLink: "/careers/business-development-manager",
    categoryLink: "/careers/category/on-site",
  },
  {
    title: "Video Editor",
    category: "on-site",
    titleLink: "/careers/video-editor",
    categoryLink: "/careers/category/on-site",
  },
  {
    title: "Brand Manager",
    category: "on-site",
    titleLink: "/careers/brand-manager",
    categoryLink: "/careers/category/on-site",
  },
  {
    title: "Sr. Software Engineer",
    category: "on-site",
    titleLink: "/careers/sr-software-engineer",
    categoryLink: "/careers/category/on-site",
  },
  {
    title: "Creative Graphics Designer",
    category: "on-site",
    titleLink: "/careers/creative-graphics-designer",
    categoryLink: "/careers/category/on-site",
  },
  {
    title: "Business Development Executive",
    category: "hybrid",
    titleLink: "/careers/business-development-executive",
    categoryLink: "/careers/category/hybrid",
  },
];

const JobCards = () => {
  return (
    <section className="bg-white pb-16 sm:px-20 px-8 py-10 mb-">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="p-6 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
          >
            {/* Category Link */}
            <Link
              href={job.categoryLink}
              className="text-gray-500 text-lg mb-2 inline-block hover:text-yellow-400 transition-colors duration-300"
            >
              {job.category.charAt(0).toUpperCase() + job.category.slice(1)}
            </Link>

            {/* Title Link */}
            <h3 className="font-semibold text-xl mb-4">
              <Link
                href={job.titleLink}
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                {job.title}
              </Link>
            </h3>

            <div className="flex items-center text-gray-500 text-sm gap-2 mb-2">
              <FaTag className="text-gray-400" />
              <span>Job</span>
            </div>

            <div className="flex items-center text-gray-500 text-sm gap-2">
              <FaClock className="text-gray-400" />
              <span>2 years ago</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JobCards;
