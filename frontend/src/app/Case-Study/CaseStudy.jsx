
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import caseStudies from "../../../public/data/caseStudyGrid.json";

export default function CaseStudy() {
  return (
    <section className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
            }}
            className="bg-white rounded-lg shadow p-4"
          >
            <div className="flex justify-center">
              {item.image && (
                <Image
                  src={`/${item.image}`}
                  alt={item.title}
                  width={600}
                  height={250}
                  className="rounded-md mb-4"
                />
              )}
            </div>
            <h3 className="text-xl text-center font-semibold mb-2 pt-6">
              {item.title}
            </h3>
            {item.objective && (
              <p className="text-gray-600 mb-4 font-normal">
                {Array.isArray(item.objective)
                  ? item.objective[0]
                  : item.objective}
              </p>
            )}
            <Link href={`/Case-Study/${item.id}`}>
              <button className="bg-[#FEC63F] hover:bg-yellow-600 hover:text-white text-black font-bold px-5 text-md py-2 rounded-md w-fit transition border-l-4 border-yellow-600">
                Learn more
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
