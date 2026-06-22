
import Image from "next/image";

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

          <nav className="flex gap-6">
            <a href="#" className="text-gray-800 font-medium">Home</a>
            <a href="/shop" className="text-gray-800 font-medium">Shop</a>
            <a href="#" className="text-gray-800 font-medium">Gallery</a>
            <a href="#" className="text-gray-800 font-medium">About</a>
            <a href="#" className="text-gray-800 font-medium">Contact</a>
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
                className="border border-green-600 text-gray-800 px-6 py-3 rounded-lg"
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
              <h3 className="font-semibold text-xl mb-2">Mandala Art</h3>
              <p>Intricate handcrafted mandala creations.</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow">
              <h3 className="font-semibold text-xl mb-2">Lippan Art</h3>
              <p>Traditional mirror work for modern homes.</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow">
              <h3 className="font-semibold text-xl mb-2">Paintings</h3>
              <p>Unique artworks for every space.</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center shadow">
              <h3 className="font-semibold text-xl mb-2">Custom Orders</h3>
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
              handcrafted art that transforms everyday spaces into beautiful homes.
            </p>

            <p className="text-lg text-gray-700 mb-4">
              From intricate Mandala artwork to traditional Lippan creations,
              every piece is thoughtfully designed and handcrafted with attention
              to detail and love.
            </p>

            <p className="text-lg text-gray-700">
              Based in Chennai, Nandita creates unique art pieces, custom gifts,
              and home décor that bring warmth, beauty and personality to every space.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
