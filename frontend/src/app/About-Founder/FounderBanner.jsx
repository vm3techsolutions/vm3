'use client';
import Link from 'next/link';
import Image from 'next/image';
import PageTitle from '../../components/PageTitle';

export default function HeroSection() {
    const title = "About Founder";
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "About Founder" },
  ];
  const imageUrl = "/assets/BannerBG.jpg";
  return (
   <>
   <PageTitle title={title} breadcrumbs={breadcrumbs} imageUrl={imageUrl} />
   </>
  );
}
