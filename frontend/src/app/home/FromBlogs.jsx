'use client';
import Image from "next/image";
import Link from "next/link";

const blogs = [
  {
    id: 1,
    title: 'Elevate Your Brand with VM3: Unveiling Comprehensive...',
    desc: 'Elevate Your Brand with VM3: Unveiling Comprehensive Brand Positioning...',
    image: '/assets/b1.jpeg',
    link: '/blog/brand-vm3',
  },
  {
    id: 2,
    title: 'Unleashing the Power of AI and Marketing...',
    desc: 'Mastering the Art of Creating an Effective E-Commerce Website...',
    image: '/assets/b2.jpeg',
    link: '/blog/ai-marketing',
  },
  {
    id: 3,
    title: 'Mastering the Art of Creating an Effective...',
    desc: 'Mastering the Art of Creating an Effective E-Commerce Website...',
    image: '/assets/b3.jpeg',
    link: '/blog/art-of-ecommerce',
  },
  {
    id: 4,
    title: '5 Benefits of Having a Digital Marketing...',
    desc: '5 Benefits of Having a Digital Marketing Strategy for...',
    image: '/assets/b4.jpeg',
    link: '/blog/digital-marketing-benefits',
  },
  {
    id: 5,
    title: 'Crafting an Effective Brand Strategy: Your Pathway...',
    desc: 'Crafting an Effective Brand Strategy: Your Pathway to Success...',
    image: '/assets/b5.jpeg',
    link: '/blog/brand-strategy',
  },
  {
    id: 6,
    title: 'Unlocking the Power of Landing Pages: A...',
    desc: 'Unlocking the Power of Landing Pages: A Comprehensive Guide...',
    image: '/assets/b6.jpeg',
    link: '/blog/landing-pages',
  },
];

export default function BlogGrid() {
  return (
    <section className="bg-[#222429] py-12 px-6  ">
        <h3 className="text-[#FEC63F] font-semibold text-xl text-center">FROM THE BLOG</h3>
        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-10 my-4 text-center text-white">
        Checkout Latest News Updates & <br />
        Articles
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 px-4 sm:px-10 md:px-20 py-10">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="bg-white rounded-lg overflow-hidden shadow-md relative group"
        >
          <div className="overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={100}
              className="w-full h-24 object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          <div className="p-4 border-l-4 border-orange-500">
            <h2 className="text-xl font-bold text-black mb-2 line-clamp-2">
              {blog.title}
            </h2>
            <p className="text-gray-700 text-md mb-4 line-clamp-2">
              {blog.desc}
            </p>
            <Link href={blog.link}>
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
