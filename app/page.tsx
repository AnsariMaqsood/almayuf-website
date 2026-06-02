import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white text-slate-800">

      {/* Navbar */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Almayuf Logo"
              width={55}
              height={55}
            />
            <div>
              <h1 className="font-bold text-xl text-[#0F2A5A]">
                ALMAYUF
              </h1>
              <p className="text-xs text-gray-500">
                Trading & Contracting Est.
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 font-medium">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#brands">Brands</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/hero.jpeg')",
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
<section id="brands" className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-[#0d2f6f] mb-4">
        Brands We Deal In
      </h2>

      <p className="text-xl text-gray-600">
        Trusted Global Industrial & Automation Partners
      </p>
    </div>

<div className="bg-gradient-to-b from-white to-gray-50 rounded-3xl shadow-2xl p-10 border">
  <img
    src="/brands/brand.png"
    alt="Brands We Deal In"
    className="w-full mx-auto"
  />
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
            📞 +966 54 706 2959
          </p>

          <p>
            ✉️ ansari.ali@almayuf.com
          </p>

          <p>
            💬 WhatsApp Available
          </p>

        </div>

        <a
          href="https://wa.me/966547062959"
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
 href="https://wa.me/966547062959"
 target="_blank"
 className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-xl z-50"
>
 WhatsApp
</a>
    </main>
  );
}