'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const menuItems = [
    {
      title: 'About Us',
      dropdown: [
        { title: 'Our Story', path: '/about/company-profile' },
        { title: 'About Founder', path: '/about/mission' },
      ],
    },
    {
      title: 'Services',
      dropdown: [
        { title: 'UI/UX', path: '/services/ui-ux' },
        {
          title: 'Software Development',
          path: '/services/software-development',
          subDropdown: [
            { title: 'Web Design & Development', path: '/services/software-development/web-apps' },
            { title: 'Quality Assurance & Testing', path: '/services/software-development/mobile-apps' },
          ],
        },
        {
          title: 'Cloud Solutions',
          path: '/services/cloud',
          subDropdown: [
            { title: 'DevOps & CI/CD Pipeline', path: '/services/cloud/devops' },
            { title: 'Hosting (EC2 + VM)', path: '/services/cloud/hosting' },
            { title: 'Serverless Computing S3', path: '/services/cloud/s3' },
          ],
        },
        {
          title: 'Digital Marketing',
          path: '/services/marketing',
          subDropdown: [
            { title: 'Brand Positioning', path: '/services/marketing/seo' },
            { title: 'Online Marketing', path: '/services/marketing/smm' },
            { title: 'Employer Branding', path: '/services/marketing/email' },
          ],
        },
        { title: 'Business Consulting', path: '/services/consulting' },
      ],
    },
    {
      title: 'Products',
      path: '/products',
    },
    {
      title: 'Insights',
           dropdown: [
        { title: 'Blog', path: '/Blogs' },
        { title: 'Event', path: '/Event' },
        { title: 'Case Study', path: '/CaseStudy' },
        { title: 'Gallery', path: '/Gallery' },
      ],
    },
    {
      title: 'Career',
      path: '/career',
    },
    {
      title: 'Contact Us',
      path: '/contact',
    },
  ];

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 ml-4 md:ml-20">
          <img src="/assets/vm3-logo.png" alt="VM3 Logo" className="h-20" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item, idx) => (
            <div key={idx} className="relative group">
              <Link href={item.path || '#'} className="hover:text-yellow-400 transition">
                {item.title}
              </Link>

              {item.dropdown && (
                <div className="absolute top-full left-0 bg-white text-black shadow-lg mt-2 py-2 z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-200 min-w-max">
                  {item.dropdown.map((dropItem, dropIdx) => (
                    <div key={dropIdx} className="relative group/dropdown">
                      <Link
                        href={dropItem.path || '#'}
                        className="px-4 py-2 block hover:bg-yellow-400 whitespace-nowrap"
                      >
                        {dropItem.title}
                      </Link>

                      {/* Show only the hovered subDropdown */}
                      {dropItem.subDropdown && (
                        <div className="absolute top-0 left-full bg-white text-black shadow-lg ml-2 py-2 z-50 opacity-0 group-hover/dropdown:opacity-100 invisible group-hover/dropdown:visible transition-all duration-200 min-w-max">
                          {dropItem.subDropdown.map((subItem, subIdx) => (
                            <Link
                              key={subIdx}
                              href={subItem.path || '#'}
                              className="px-4 py-2 block hover:bg-yellow-400 whitespace-nowrap"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="hidden md:flex flex-col items-start text-right mr-4 md:mr-20">
          <span className="text-yellow-400 text-sm font-medium">Call Anytime</span>
          <a href="tel:+917877554499" className="text-white hover:text-yellow-400 text-sm">
            +91 7877554499
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black text-white px-4 pb-4">
          <nav className="flex flex-col space-y-2">
            {menuItems.map((item, i) => (
              <div key={i}>
                <div
                  className="hover:text-yellow-400 transition cursor-pointer"
                  onClick={() => toggleDropdown(item.title)}
                >
                  <Link href={item.path || '#'}>{item.title}</Link>
                </div>
                {item.dropdown && activeDropdown === item.title && (
                  <div className="pl-4 mt-1">
                    {item.dropdown.map((dropItem, idx) => (
                      <div key={idx}>
                        <div className="py-1">
                          <Link href={dropItem.path || '#'}>{dropItem.title}</Link>
                          {dropItem.subDropdown && (
                            <div className="pl-4">
                              {dropItem.subDropdown.map((sub, j) => (
                                <div key={j} className="py-1">
                                  <Link href={sub.path || '#'}>{sub.title}</Link>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-4 text-sm text-right">
              <span className="text-yellow-400">Call Anytime</span><br />
              <a href="tel:+917877554499" className="hover:text-yellow-400">
                +91 7877554499
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
