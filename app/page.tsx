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
      <section className="h-[90vh] flex flex-col justify-center items-center text-center px-6">
        <p className="uppercase tracking-[6px] text-gray-400 mb-4">
          Smart Infrastructure & IT Solutions
        </p>

        <h2 className="text-5xl md:text-7xl font-bold leading-tight max-w-5xl">
          Building Modern Digital &
          Infrastructure Solutions
        </h2>

        <p className="mt-6 text-gray-400 max-w-2xl text-lg">
          Delivering enterprise-grade IT services, warehouse operations,
          cloud solutions, and smart infrastructure systems.
        </p>

        <button className="mt-10 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-300 transition">
          Explore Services
        </button>
      </section>

      {/* Services */}
      <section className="px-8 py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-16 text-center">
            Our Services
          </h3>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
              <h4 className="text-2xl font-semibold mb-4">
                IT Infrastructure
              </h4>
              <p className="text-gray-400">
                Enterprise IT support, end-user computing,
                networking, and smart office infrastructure.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
              <h4 className="text-2xl font-semibold mb-4">
                Cloud Solutions
              </h4>
              <p className="text-gray-400">
                AWS cloud architecture, deployment,
                monitoring, and scalable infrastructure solutions.
              </p>
            </div>

            <div className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800">
              <h4 className="text-2xl font-semibold mb-4">
                Facility Operations
              </h4>
              <p className="text-gray-400">
                Smart warehouse operations, ticketing systems,
                maintenance management, and automation solutions.
              </p>
            </div>

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