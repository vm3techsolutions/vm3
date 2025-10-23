'use client';
import Link from 'next/link';
import Image from 'next/image';
import PageTitle from '../../components/PageTitle';

export default function HeroSection() {
     const title = "Quality Assurance & Testing";
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Quality Assurance & Testing" },
  ];
  const imageUrl = "/assets/BannerBG.jpg";
  return (
     <>
            <PageTitle title={title} breadcrumbs={breadcrumbs} imageUrl={imageUrl} />
           </>
  );
}
