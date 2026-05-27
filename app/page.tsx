export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-wide">
          ALMAYUF
        </h1>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Projects</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
<section
  className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/hero.jpeg')",
  }}
>
  <div className="max-w-5xl px-6">
    <p className="uppercase tracking-[6px] text-gray-300 mb-6">
      Smart Infrastructure & IT Solutions
    </p>

    <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
      Building Modern Digital &
      <br />
      Infrastructure Solutions
    </h1>

    <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
      Delivering enterprise-grade IT services, warehouse operations,
      cloud solutions, and smart infrastructure systems.
    </p>

    <div className="flex gap-4 justify-center">
      <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-300 transition">
        Explore Services
      </button>

      <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
        Contact Us
      </button>
    </div>
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-10 text-center text-gray-500">
        © 2026 ALMAYUF. All rights reserved.
      </footer>
    </main>
  );
}