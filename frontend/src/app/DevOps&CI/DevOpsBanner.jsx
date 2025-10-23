'use client';
import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '../../components/PageTitle';

export default function HeroSection() {
      const title = "DevOps & CI/CD Pipeline";
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "DevOps & CI/CD Pipeline" },
  ];
  const imageUrl = "/assets/BannerBG.jpg";
  return (
     <>
         <PageTitle title={title} breadcrumbs={breadcrumbs} imageUrl={imageUrl} />
        </>
  );
}
