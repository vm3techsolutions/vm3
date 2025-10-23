'use client';
import Image from 'next/image';
import Link from 'next/link';
import PageTitle from '../../components/PageTitle';

export default function HeroSection() {

        const title = "Serverless Computing";
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Serverless Computing" },
  ];
  const imageUrl = "/assets/BannerBG.jpg";

  return (
        <>
             <PageTitle title={title} breadcrumbs={breadcrumbs} imageUrl={imageUrl} />
            </>
  );
}
