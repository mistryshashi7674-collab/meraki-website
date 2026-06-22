import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F5]">
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Image
            src="/images/logo.png"
            alt="Meraki by Nandita"
            width={120}
            height={120}
          />

          <nav className="flex gap-6 items-center">
            <a href="#" className="text-gray-800 font-medium">
              Home
            </a>
            <a href="/shop" className="text-gray-800 font-medium">
              Shop
            </a>
            <a href="#" className="text-gray-800 font-medium">
              Gallery
            </a>
            <a href="#" className="text-gray-800 font-medium">
              About
            </a>
            <a href="#" className="text-gray-800 font-medium">
              Contact
            </a>

            <a
              href="https://www.instagram.com/meraki_nandita_/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-500 text-white px-4 py-2 rounded-lg"
            >
              Instagram
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl font-bold mb-6 text-gray-900">
              Handcrafted Art That Brings Your Walls To Life
            </h1>

            <p className="text-xl mb-10 text-gray-700">
              Discover unique Mandala Art, Lippan Art and custom creations
              handcrafted by Nandita. Every piece is designed to add warmth,
              beauty and personality to your home.
            </p>

            <div className="flex gap-4">
              <a
                href="/shop"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg"
              >
                Shop Collection
              </a>

              <a
                href="https://wa.me/918007801123"
                target="_blank"
                className="border border-green-600 text-gray-600 px-6 py-3 rounded-lg"
              >
                Custom Order
              </a>
            </div>
          </div>

          <div>
            <Image
              src="/images/hero-art.jpg"
              alt="Featured Artwork"
              width={600}
              height={600}
              className="rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <h3 className="font-semibold text-lg text-slate-900">
              Handmade With Love
            </h3>

            <h3 className="font-semibold text-lg text-slate-900">
              Custom Orders Available
            </h3>

            <h3 className="font-semibold text-lg text-slate-900">
              Secure Payments
            </h3>

            <h3 className="font-semibold text-lg text-slate-900">
              Across India Shipping
            </h3>
          </div>
        </div>
      </section>

      {/* Collections */}
      <section className="bg-[#FFF9F5] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">
            Our Collections
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl text-center shadow">
              <h3 className="font-semibold text-xl mb-2 text-slate-900">
                Mandala Art
              </h3>
              <p className="text-sm text-gray-700">
                Intricate handcrafted mandala creations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow">
              <h3 className="font-semibold text-xl mb-2 text-slate-900">
                Lippan Art
              </h3>
              <p className="text-sm text-gray-700">
                Traditional mirror work for modern homes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow">
              <h3 className="font-semibold text-xl mb-2 text-slate-900">
                Paintings
              </h3>
              <p className="text-sm text-gray-700">
                Unique artworks for every space.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow">
              <h3 className="font-semibold text-xl mb-2 text-slate-900">
                Custom Orders
              </h3>
              <p>Personalized art made just for you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Artist */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/nandita.jpg"
              alt="Nandita"
              width={500}
              height={600}
              className="rounded-2xl shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Meet The Artist
            </h2>

            <p className="text-lg text-gray-700 mb-4">
              Meraki by Nandita was born from a passion for creating meaningful,
              handcrafted art that transforms everyday spaces into beautiful
              homes.
            </p>

            <p className="text-lg text-gray-700 mb-4">
              From intricate Mandala artwork to traditional Lippan creations,
              every piece is thoughtfully designed and handcrafted with
              attention to detail and love.
            </p>

            <p className="text-lg text-gray-700">
              Based in Chennai, Nandita creates unique art pieces, custom gifts,
              and home décor that bring warmth, beauty and personality to every
              space.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF9F5] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Follow Our Creative Journey
          </h2>

          <p className="text-lg text-gray-700 mb-8">
            Explore our latest Mandala Art, Lippan Art and custom creations on
            Instagram.
          </p>

          <a
            href="https://www.instagram.com/meraki_nandita_/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 text-white px-8 py-4 rounded-lg text-lg"
          >
            Follow @meraki_nandita_
          </a>
        </div>
      </section>

      <a
        href="https://wa.me/918007801123"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-lg hover:shadow-xl z-50"
      >
        WhatsApp
      </a>

      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-2xl font-bold mb-4">Meraki by Nandita</h3>

              <p className="text-gray-300">
                Handcrafted Mandala Art, Lippan Art, Paintings and Custom Home
                Décor.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>

              <div className="flex flex-col gap-2">
                <a href="/" className="text-gray-300 hover:text-white">
                  Home
                </a>

                <a href="/shop" className="text-gray-300 hover:text-white">
                  Shop
                </a>

                <a href="#" className="text-gray-300 hover:text-white">
                  Gallery
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Connect With Us</h4>

              <div className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/meraki_nandita_/"
                  target="_blank"
                  className="text-gray-300 hover:text-white"
                >
                  Instagram
                </a>

                <a
                  href="https://wa.me/918007801123"
                  target="_blank"
                  className="text-gray-300 hover:text-white"
                >
                  <FaWhatsapp size={32} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-700 mt-8 pt-6 text-center text-gray-400">
            © 2026 Meraki by Nandita. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
