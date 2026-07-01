import AnnouncementBar from "@/components/layout/announcement-bar";
import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import Navbar from "@/components/layout/Navbar";
import FeaturedCollections from "@/components/home/FeaturedCollections";
import WhyChooseMeraki from "@/components/home/WhyChooseMeraki";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F5]">
      <AnnouncementBar />
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Handmade Mandala, Lippan & Acrylic Painting
              <br />
              For Beautiful Homes
            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-9 max-w-xl">
              Discover handcrafted Mandala Art, Lippan Art and Canvas Paintings
              designed to bring warmth, elegance and personality to your home.
              Based in Chennai, Meraki by Nandita creates custom wall décor,
              personalized artwork and handmade gifts that are crafted with care
              and delivered across India.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/shop"
                className="bg-pink-500 hover:bg-pink-600 hover:scale-105 transition duration-300 text-white px-6 py-3 rounded-lg"
              >
                Explore Collection
              </a>

              <a
                href="https://wa.me/918007801123"
                target="_blank"
                className="border border-green-600 hover:bg-green-50 hover:scale-105 transition duration-300 text-gray-600 px-6 py-3 rounded-lg"
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
              src="/images/mandala/Black-Balcony.jpg"
              alt="Handmade Mandala and Lippan wall art by Meraki by Nandita"
              width={600}
              height={600}
              className="rounded-3xl shadow-2xl hover:scale-[1.02] transition-all duration-500"
            />
          </div>
          <div className="-mt-6"></div>
        </div>
      </section>

      <FeaturedCollections />
      <WhyChooseMeraki />

      {/* Meet the Artist */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/images/nandita.jpg"
              alt="Nandita, founder and artist of Meraki by Nandita in Chennai"
              width={500}
              height={600}
              className="rounded-3xl shadow-2xl object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Meet the Artist Behind Meraki
            </h2>

            <h3 className="text-3xl font-bold text-gray-900">
              Hi, I'm Nandita 👋
            </h3>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Meraki was born from my love for creating art that transforms
              ordinary walls into meaningful spaces. Every Mandala, Lippan and
              Canvas artwork is handcrafted patiently, bringing warmth, elegance
              and personality into every home.
            </p>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              Based in Chennai, I also create personalised artwork for homes,
              offices and gifting. Every piece is made with care, creativity and
              attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="bg-[#FFF9F5] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
            Handmade Mandala Art, Lippan Art & Custom Wall Décor
          </h2>

          <div className="space-y-6 text-lg leading-8 text-gray-700">
            <p>
              Welcome to <strong>Meraki by Nandita</strong>, where every artwork
              is handcrafted with creativity, patience and attention to detail.
              We specialise in handmade <strong>Mandala Art</strong>,
              <strong> Lippan Art</strong> and
              <strong> Canvas Paintings</strong> that transform ordinary walls
              into beautiful spaces full of warmth and personality.
            </p>

            <p>
              Based in <strong>Chennai</strong>, we create unique wall décor for
              homes, offices and gifting. Whether you're decorating your living
              room, bedroom, entrance, pooja room or workspace, our handcrafted
              artwork is designed to reflect your personal style while adding
              elegance to your interiors.
            </p>

            <p>
              Every piece is carefully made by Nandita using quality materials
              and traditional techniques with a modern artistic touch. We also
              offer personalised and custom-made artwork tailored to your
              preferred size, colours and design, making every creation truly
              one of a kind.
            </p>

            <p>
              We proudly deliver our handmade artwork across India and are
              passionate about helping customers discover meaningful home décor
              and thoughtful handmade gifts for housewarmings, weddings,
              birthdays, anniversaries and corporate gifting.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Do you create custom artwork?
              </h3>
              <p className="mt-2 text-gray-700 leading-7">
                Yes. Every artwork can be customised based on your preferred
                size, colours, design and décor style. We love creating unique
                pieces that perfectly match your space.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Do you ship across India?
              </h3>
              <p className="mt-2 text-gray-700 leading-7">
                Yes. We carefully package every handmade artwork and offer Pan
                India shipping so your order reaches you safely.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                How long does it take to complete a custom order?
              </h3>
              <p className="mt-2 text-gray-700 leading-7">
                Depending on the size and complexity of the artwork, custom
                orders generally take between 7 and 21 days to complete.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                What types of artwork do you create?
              </h3>
              <p className="mt-2 text-gray-700 leading-7">
                We specialise in Mandala Art, Lippan Art, Canvas Paintings and
                personalised wall décor for homes, offices and gifting.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                How can I place an order?
              </h3>
              <p className="mt-2 text-gray-700 leading-7">
                You can browse our collection on the website or contact us
                directly through WhatsApp or Instagram for personalised
                assistance and custom artwork requests.
              </p>
            </div>
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

      <footer className="bg-[#1E2433] text-white mt-24">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <h3 className="text-2xl font-bold">Meraki by Nandita</h3>

              <p className="mt-5 text-gray-300 leading-7">
                Handcrafted Mandala Art, Lippan Art and Canvas Paintings created
                with love in Chennai. Bringing warmth, elegance and personality
                to every home.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-5">Quick Links</h4>

              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/shop">Shop</a>
                </li>
                <li>
                  <a href="/collections">Collections</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-lg mb-5">Contact</h4>

              <div className="space-y-3 text-gray-300">
                <p>📍 Chennai, India</p>

                <p>
                  📱
                  <a
                    href="https://wa.me/918007801123"
                    target="_blank"
                    className="hover:text-pink-400"
                  >
                    WhatsApp
                  </a>
                </p>

                <p>
                  <a
                    href="mailto:nandita296@gmail.com"
                    className="hover:text-pink-400"
                  >
                    ✉ Reach me on Email
                  </a>
                </p>
              </div>
            </div>

            {/* Follow */}
            <div>
              <h4 className="font-semibold text-lg mb-5">Follow Us</h4>

              <div className="flex gap-4">
                <a
                  href="https://instagram.com/meraki_nandita_"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition duration-300 hover:scale-110 hover:bg-pink-500 transition"
                >
                  <FaInstagram size={22} />
                </a>

                <a
                  href="https://wa.me/918007801123"
                  target="_blank"
                  className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center transition duration-300 hover:scale-110 hover:bg-green-500 transition"
                >
                  <FaWhatsapp size={22} />
                </a>
              </div>
            </div>
          </div>

          <hr className="my-10 border-gray-700" />

          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© 2026 Meraki by Nandita. All rights reserved.</p>

            <p className="mt-4 md:mt-0">
              Crafted with ❤️ by Nandita in Chennai
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
