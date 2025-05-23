'use client';

import Image from "next/image";
import Link from 'next/link';
 

export default function DureghiSection() {
  return (
    <div className="w-full px-5 sm:px-16 py-12 bg-white ">
      {/* First Row: Title, Description, Button */}
      <div className="space-y-4 ">
        <h1 className="text-5xl font-bold">Dureghi</h1>
        <p className="text-xl">
          'Dureghi'- 'दुरेघी' is a digital platform for Marathi and English literature (short stories,
          blog-series and poems). It also has a section for a book review with a focus on Marathi
          book reviews along with English books. There's just nothing more relaxing than cozying up
          with stories, blogs and poems on your tablet, cell phone or e-reader. On ‘Dureghi’,
          featured writer: Amrapali Mahajan and guest writers have come out with interesting short
          stories, blog series and new reads to love. Readers can have access to an endless stream of
          Marathi and English literature to read and enjoy ‘Dureghi’ for free.
        </p>
        <p className="text-xl">
          Sit back and get ready to enter another life for a while. When you're done, make sure that
          you pass this experience to your near and dear ones.
        </p>
        <p className="text-xl">
          The Book Reviews section of 'Dureghi' not only recommends good reads but also gives the
          reader to add their opinions about books. We aspire to be one of the prominent players to
          promote Marathi literature. Our vision is to form an active club for book lovers, who can
          meet online and share their love for reading.
        </p>
        <Link href="https://dureghi.com/">
          <button className="bg-[#FEC63F]  text-black font-bold px-5 text-xl py-3 rounded-md w-fit transition border-l-14 border-yellow-600">
          Visit duregi.com
          </button>
        </Link>
      </div>

      {/* Second Row: Image */}
      <div className="mt-10 w-full">
        <Image
          src="/assets/dureghi.jpg"
          width={400}
          height={400}
          alt="Bookshelf"
          className="w-full h-auto object-cover"
          priority
        />
      </div>
    </div>
  );
}
