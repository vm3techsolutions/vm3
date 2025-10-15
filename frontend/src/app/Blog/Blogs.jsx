
"use client";
import Image from "next/image";
import Link from "next/link";
// import blogs from "/data/blogGrid.json";
import blogs from '../../../public/data/blogGrid.json'

export default function BlogGrid() {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-4 sm:px-10 md:px-20 py-10">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg overflow-hidden shadow-md relative group"
          >
            {/* blog Image */}
            <div className="overflow-hidden relative">
              <Image
                src={`/${blog.image}`}
                alt={blog.post_title}
                width={500}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {/* Date badge */}
              <div className="absolute top-3 left-3 bg-yellow-500 text-white px-3 py-1 rounded-md text-center">
                <div className="text-lg font-bold">{blog.date_day}</div>
                <div className="text-xs">{blog.date_month}</div>
              </div>
            </div>

            {/* blog Content */}
            <div className="p-4 border-l-4 border-orange-500">
              <h2 className="text-xl font-bold text-black mb-2 line-clamp-2">
                {blog.post_title}
              </h2>
              {blog.standard_post_description && (
                <p className="text-gray-700 text-md mb-4 line-clamp-2">
                  {blog.standard_post_description}
                </p>
              )}
              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                <span>By {blog.post_author}</span>
                <span>{blog.comment_number} Comments</span>
              </div>

           <Link href={`/Blog/${blog.slug || blog.id}`}>
                <button className="bg-[#FEC63F] hover:bg-yellow-600 hover:text-white text-black font-bold px-5 text-md py-2 rounded-md w-fit transition border-l-4 border-yellow-600">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
