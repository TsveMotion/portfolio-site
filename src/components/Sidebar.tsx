"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
  { icon: '💼', label: 'Experience', href: '/experience', number: '1' },
  { icon: '🚀', label: 'Projects', href: '/projects', number: '2' },
  { icon: '🛠️', label: 'Services', href: '/services', number: '3' },
  { icon: 'ℹ️', label: 'About', href: '/about', number: '4' },
  { icon: '✉️', label: 'Contact', href: '/contact', number: '5' },
];

const socialItems = [
  { icon: '🔗', label: 'LinkedIn', href: 'https://linkedin.com', number: '↗' },
  { icon: '💻', label: 'GitHub', href: 'https://github.com', number: '↗' },
  { icon: '📸', label: 'Instagram', href: 'https://instagram.com', number: '↗' },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const hamburger = document.getElementById('hamburger');
      if (
        sidebar &&
        hamburger &&
        !sidebar.contains(event.target as Node) &&
        !hamburger.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key;
      const navItem = navItems.find(item => item.number === key);
      if (navItem) {
        router.push(navItem.href);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyPress);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [router]);

  return (
    <>
      <button
        id="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-[#111111] hover:bg-[#222222] transition-colors"
      >
        <div className="space-y-2">
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
        </div>
      </button>

      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        id="sidebar"
        className={`fixed left-0 top-0 h-screen w-64 bg-[#111111] text-white p-6 flex flex-col transform transition-transform lg:translate-x-0 z-40 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-8">
          <h2 className="font-semibold text-xl">Kristiyan Tsvetanov</h2>
          <p className="text-sm text-gray-400">Full-Stack Developer</p>
        </div>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`flex items-center justify-between p-3 rounded-lg transition-colors group
                ${pathname === item.href ? 'bg-white/20' : 'hover:bg-white/10'}`}
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <span className={`transition-colors
                  ${pathname === item.href ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                  {item.label}
                </span>
              </div>
              <span className="text-sm text-gray-500 bg-white/10 px-2 py-1 rounded">{item.number}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-8">
          <h3 className="text-gray-400 text-sm font-medium mb-4 px-3">Connect</h3>
          <nav className="space-y-2">
            {socialItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg hover:bg-white/10 transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-gray-300 group-hover:text-white transition-colors">
                    {item.label}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{item.number}</span>
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}
