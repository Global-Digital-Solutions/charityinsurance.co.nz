'use client';
import Link from 'next/link';
import { useState } from 'react';

const navLinks = [
  { label: 'Coverage Types', href: '/coverage/' },
  { label: 'Organisation Types', href: '/organisations/' },
  { label: 'Compare', href: '/compare/' },
  { label: 'Resources', href: '/blog/' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-emerald-100 shadow-sm h-16 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">
        <Link href="/" className="flex items-center gap-0 font-extrabold text-xl leading-tight">
          <span className="text-slate-900">Charity</span><span className="text-emerald-600">Insurance</span><span className="text-slate-400 font-semibold text-base">.co.nz</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-700">
          {navLinks.map(l => (
            <Link key={l.href} href={l.href} className="hover:text-emerald-600 transition">{l.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contact/" className="hidden sm:inline-flex px-4 py-2 bg-emerald-600 text-white text-sm font-bold rounded-lg hover:bg-emerald-700 transition shadow-sm">
            Get a Quote
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded text-slate-600 hover:text-emerald-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-slate-200 shadow-lg md:hidden z-50">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-2 px-3 rounded text-slate-700 font-semibold hover:bg-emerald-50 hover:text-emerald-700 transition">
                {l.label}
              </Link>
            ))}
            <Link href="/about/" onClick={() => setOpen(false)} className="block py-2 px-3 rounded text-slate-500 font-medium hover:bg-emerald-50 hover:text-emerald-700 transition text-sm">
              About Us
            </Link>
            <Link href="/contact/" onClick={() => setOpen(false)} className="block mt-2 py-2.5 px-3 bg-emerald-600 text-white font-bold rounded-lg text-center hover:bg-emerald-700 transition">
              Get a Quote →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
