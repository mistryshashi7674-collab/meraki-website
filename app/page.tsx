import AnnouncementBar from "@/components/layout/announcement-bar";
import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F5]">
      <AnnouncementBar />
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center rounded-full bg-amber-100 text-amber-800 px-4 py-2 text-sm font-medium mb-6">
              🌿 Handcrafted in Chennai
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Transform Empty Walls
              <br />
              Into Beautiful Stories
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-9 max-w-xl">
              Discover handcrafted Mandala, Lippan and Canvas Art designed to
              bring warmth, elegance and personality into your home. Every piece
              is thoughtfully created by Nandita with love and attention to
              detail.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/shop"
                className="bg-pink-500 text-white px-6 py-3 rounded-lg"
              >
                Explore Collection
              </a>

              <a
                href="https://wa.me/918007801123"
                target="_blank"
                className="border border-green-600 hover:bg-stone-100 transition text-gray-600 px-6 py-3 rounded-lg"
              >
                Request Custom Artwork
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-sm font-medium text-gray-600">
              <div>✔ Handmade by Nandita</div>

              <div>✔ Pan India Shipping</div>

              <div>✔ Custom Orders Welcome</div>
            </div>
          </div>

          <div>
            <Image
              src="/images/hero-art.jpg"
              alt="Featured Artwork"
              width={600}
              height={600}
              className="rounded-3xl shadow-2xl hover:scale-[1.02] transition duration-500"
            />
          </div>
          <div className="-mt-6"></div>
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
              <p className="text-sm text-gray-700">
                Personalized art made just for you.
              </p>
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

          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/meraki_nandita_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-pink-600"
            >
              <FaInstagram size={24} />
              Follow @meraki_nandita_
            </a>
          </div>
        </div>
      </section>

      <a
        href="https://www.instagram.com/meraki_nandita_/"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 bg-pink-500 text-white p-4 rounded-full shadow-lg z-50"
      >
        <FaInstagram size={32} />
      </a>

      <a
        href="https://wa.me/918007801123"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl z-50"
      >
        <FaWhatsapp size={36} />
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
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white flex items-center gap-2"
                >
                  <FaInstagram size={20} />
                  Instagram
                </a>

                <a
                  href="https://wa.me/918007801123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white flex items-center gap-2"
                >
                  <FaWhatsapp size={20} />
                  WhatsApp
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
