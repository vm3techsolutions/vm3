'use client';
import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '../../components/PageTitle';

export default function HeroSection() {
  
        const title = "Employer Branding";
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Employer Branding" },
  ];
  const imageUrl = "/assets/BannerBG.jpg";
  return (
        <>
                <PageTitle title={title} breadcrumbs={breadcrumbs} imageUrl={imageUrl} />
               </>
  );
}
