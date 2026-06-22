import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F5]">
      <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Image
            src="/images/logo.png"
            alt="Meraki by Nandita"
            width={180}
            height={180}
          />

          <nav className="text-gray-800 font-medium">
            <a href="#" className="text-gray-800 font-medium">Home</a>
            <a href="#" className="text-gray-800 font-medium">Shop</a>
            <a href="#" className="text-gray-800 font-medium">Gallery</a>
            <a href="#" className="text-gray-800 font-medium">About</a>
            <a href="#" className="text-gray-800 font-medium">Contact</a>
          </nav>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-6xl font-bold mb-6 text-gray-900">
          Handmade Art That Tells A Story
        </h2>

        <p className="text-xl max-w-3xl mb-10 text-gray-700">
          Discover handcrafted Mandala Art, Lippan Art,
          Paintings and Home Décor lovingly created by
          Meraki by Nandita and shipped worldwide.
        </p>

        <div className="flex gap-4">
          <button className="bg-pink-500 text-white px-6 py-3 rounded-lg">
            Shop Collection
          </button>

          <button className="border border-green-600 px-6 py-3 rounded-lg">
            Custom Order
          </button>
        </div>
      </section>
    </main>
  )
}
