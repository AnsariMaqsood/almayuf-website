"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  const navItems = [
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "brands", label: "Brands" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) setActive(hash);
    };

    // set initial active based on hash
    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const [brandImages, setBrandImages] = useState<string[]>([]);

  useEffect(() => {
    let mounted = true;
    fetch("/api/brands")
      .then((r) => r.json())
      .then((data) => {
        if (!mounted) return;
        if (data?.images && Array.isArray(data.images) && data.images.length > 0) {
          setBrandImages(data.images);
        }
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  function handleNavClick(id: string, ev?: React.MouseEvent) {
    ev?.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setActive(id);
    setMobileOpen(false);
    // update hash without jumping
    history.replaceState(null, "", `#${id}`);
  }

  return (
    <main className="bg-white text-slate-800">

      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Almayuf Logo"
              width={48}
              height={48}
            />
            <div>
              <h1 className="font-bold text-lg text-[#0F2A5A]">
                ALMAYUF
              </h1>
              <p className="text-xs text-gray-500">Trading & Contracting Est.</p>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-8 font-medium items-center">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className="px-1 pb-1 flex flex-col items-center"
              >
                <span className="transition-colors duration-200">{item.label}</span>
                <span className={`block h-[2px] bg-yellow-400 origin-left transition-transform duration-300 ${active === item.id ? "scale-x-100" : "scale-x-0"}`}></span>
              </a>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            aria-label="Toggle menu"
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen((s) => !s)}
          >
            <span className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${mobileOpen ? "translate-y-1 rotate-45" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-slate-800 transition-all duration-300 ${mobileOpen ? "-translate-y-1 -rotate-45" : ""}`}></span>
          </button>

        </div>

        {/* Mobile nav overlay */}
        <div className={`md:hidden bg-white/95 backdrop-blur-sm w-full absolute top-full left-0 z-40 shadow-md transform transition-all duration-300 ${mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0 pointer-events-none"}`}>
          <div className="flex flex-col px-6 py-4 gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`py-3 flex flex-col items-start gap-1 transition-colors duration-200 ${active === item.id ? "text-yellow-600" : "text-slate-800"}`}
              >
                <span>{item.label}</span>
                <span className={`block h-[2px] bg-yellow-400 origin-left transition-transform duration-300 ${active === item.id ? "scale-x-100" : "scale-x-0"}`}></span>
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-screen pt-16 flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>

        <div className="relative z-10 max-w-4xl px-6 text-white">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Powering Industrial Growth
            <span className="text-yellow-400"> Through Electrical Excellence</span>
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            Industrial Electrical • Automation • Cabling • Commissioning • Sales
          </p>

          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            <a
              href="#services"
              className="bg-yellow-500 px-8 py-4 rounded-full font-semibold"
            >
              Our Services
            </a>

            <a
              href="#contact"
              className="border border-white px-8 py-4 rounded-full"
            >
              Request Quote
            </a>
          </div>
        </div>
      </section>
      <div className="mt-12 flex flex-wrap justify-center gap-12 text-white">
  <div>
    <h3 className="text-3xl font-bold text-yellow-400">100+</h3>
    <p>Projects Completed</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-yellow-400">20+</h3>
    <p>Global Brands</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold text-yellow-400">24/7</h3>
    <p>Technical Support</p>
  </div>
</div>
{/* About Us */}
<section
  id="about"
  className="py-24 px-6 md:px-16 bg-white"
>
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    <div>
      <h2 className="text-5xl font-bold text-slate-900 mb-6">
        About Al Mayuf
      </h2>

      <p className="text-gray-600 leading-8 text-lg mb-6">
        Al Mayuf Trading & Contracting Est. is a Saudi-based company
        specializing in industrial electrical installation,
        machine commissioning, automation systems, power
        distribution, cabling works and maintenance services.
      </p>

      <p className="text-gray-600 leading-8 text-lg">
        We support manufacturing facilities, industrial plants,
        warehouses and commercial projects with reliable electrical
        solutions, skilled manpower and world-class products from
        leading international brands.
      </p>
    </div>

    <div className="grid grid-cols-2 gap-6">
      <div className="bg-slate-50 p-6 rounded-2xl shadow-sm">
        <h3 className="text-4xl font-bold text-yellow-500">100+</h3>
        <p className="mt-2">Projects Delivered</p>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl shadow-sm">
        <h3 className="text-4xl font-bold text-yellow-500">20+</h3>
        <p className="mt-2">Global Brands</p>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl shadow-sm">
        <h3 className="text-4xl font-bold text-yellow-500">24/7</h3>
        <p className="mt-2">Technical Support</p>
      </div>

      <div className="bg-slate-50 p-6 rounded-2xl shadow-sm">
        <h3 className="text-4xl font-bold text-yellow-500">KSA</h3>
        <p className="mt-2">Service Coverage</p>
      </div>
    </div>

  </div>
</section>
{/* Services */}
<section
  id="services"
  className="py-24 px-6 md:px-16 bg-slate-50"
>
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-slate-900">
        Our Services
      </h2>
      <p className="text-gray-600 mt-4">
        Industrial Electrical, Automation & Contracting Solutions
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-white p-8 rounded-3xl shadow-sm">
        <h3 className="text-2xl font-bold mb-4">
          Industrial Electrical
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li>Power Distribution (LV/MV)</li>
          <li>Transformer Installation</li>
          <li>MDB / SMDB / DB Panels</li>
          <li>Cable Tray Systems</li>
          <li>Generator & UPS Setup</li>
          <li>Earthing & Lightning Protection</li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm">
        <h3 className="text-2xl font-bold mb-4">
          Machine Installation
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li>Machine Installation</li>
          <li>Commissioning</li>
          <li>Load Testing</li>
          <li>Production Line Setup</li>
          <li>Electrical Integration</li>
          <li>Startup Support</li>
        </ul>
      </div>

      <div className="bg-white p-8 rounded-3xl shadow-sm">
        <h3 className="text-2xl font-bold mb-4">
          Automation & Controls
        </h3>
        <ul className="space-y-2 text-gray-600">
          <li>Control Panel Wiring</li>
          <li>MCC Installation</li>
          <li>VFD Configuration</li>
          <li>Instrumentation Wiring</li>
          <li>Testing & Calibration</li>
          <li>System Validation</li>
        </ul>
      </div>

    </div>

  </div>
</section>
{/* Brands Section */}
<section id="brands" className="py-12 md:py-24 bg-white">
  <div className="max-w-5xl mx-auto px-6">

    <div className="text-center mb-8 md:mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-[#0d2f6f] mb-4">
        Brands We Deal In
      </h2>

      <p className="text-lg md:text-xl text-gray-600">
        Trusted Global Industrial & Automation Partners
      </p>
    </div>

    <div className="bg-gray-50 rounded-2xl shadow-lg p-6 md:p-10 border border-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
          {/* Replace these entries with actual brand file names in `/public/brands/` */}
          {(brandImages.length ? brandImages : Array.from({ length: 5 }).map(() => "/brands/brand.png")).map((src, i) => (
            <div key={i} className="bg-white p-4 rounded-xl flex items-center justify-center border shadow-sm">
              <img src={src} alt={`brand-${i}`} className="max-h-20 md:max-h-28 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>

  </div>
</section>
{/* Projects */}
<section
  id="projects"
  className="py-24 px-6 md:px-16 bg-slate-50"
>
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-[#0F2A5A]">
        Our Projects
      </h2>

      <p className="text-gray-600 mt-4">
        Industrial Electrical & Automation Projects Across Saudi Arabia
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      <img
        src="/project1.jpg"
        alt="Project 1"
        className="rounded-2xl shadow-lg hover:scale-105 transition"
      />

      <img
        src="/project2.jpg"
        alt="Project 2"
        className="rounded-2xl shadow-lg hover:scale-105 transition"
      />

      <img
        src="/project3.jpg"
        alt="Project 3"
        className="rounded-2xl shadow-lg hover:scale-105 transition"
      />

      <img
        src="/project4.jpg"
        alt="Project 4"
        className="rounded-2xl shadow-lg hover:scale-105 transition"
      />

      <img
        src="/project5.jpg"
        alt="Project 5"
        className="rounded-2xl shadow-lg hover:scale-105 transition"
      />

    </div>

  </div>
</section>
{/* Contact */}
<section
  id="contact"
  className="py-24 px-6 md:px-16 bg-[#0F2A5A] text-white"
>
  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold">
        Contact Us
      </h2>

      <p className="mt-4 text-gray-300">
        Let's discuss your next industrial electrical project
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-12">

      <div>
        <h3 className="text-3xl font-semibold mb-6">
          Get In Touch
        </h3>

        <div className="space-y-4 text-lg">

          <p>
            📞 +966 569 053 122
          </p>

          <p>
            ✉️ ansari.ali@almayuf.com
          </p>

          <p>
            💬 WhatsApp Available
          </p>

        </div>

        <a
          href="https://wa.me/966569053122"
          target="_blank"
          className="inline-block mt-8 bg-yellow-500 text-black px-8 py-4 rounded-full font-semibold"
        >
          Chat on WhatsApp
        </a>
      </div>

      <div className="bg-white rounded-3xl p-8 text-black">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-4 rounded-xl mb-4"
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full border p-4 rounded-xl mb-4"
        />

        <textarea
          rows={5}
          placeholder="Tell us about your requirement"
          className="w-full border p-4 rounded-xl mb-4"
        />

        <button
          className="bg-[#0F2A5A] text-white px-8 py-4 rounded-xl w-full"
        >
          Submit Inquiry
        </button>

      </div>

    </div>

  </div>
</section>
<footer className="bg-black text-white py-8 text-center">
  <p>
    © 2026 Almayuf Trading & Contracting Est.
  </p>

  <p className="text-gray-400 mt-2">
    Industrial Electrical • Automation • Cabling Solutions
  </p>
</footer>
<a
 href="https://wa.me/966569053122"
 target="_blank"
 className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-xl z-50"
>
 WhatsApp
</a>
    </main>
  );
}