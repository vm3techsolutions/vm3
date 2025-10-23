'use client';
import Image from 'next/image';
import Link from 'next/link';
// import PageTitle from "@/components/PageTitle";
import PageTitle from '../../components/PageTitle';

export default function HeroSection() {

  const title = "Our Story";
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Our Story" },
  ];
  const imageUrl = "/assets/BannerBG.jpg";
  return (
    <>
    <PageTitle title={title} breadcrumbs={breadcrumbs} imageUrl={imageUrl} />
  
    </>
  );
}
