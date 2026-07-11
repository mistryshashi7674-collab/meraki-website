


import FeaturedCollections from "@/components/home/FeaturedCollections";
import WhyChooseMeraki from "@/components/home/WhyChooseMeraki";
import Hero from "@/components/home/Hero";
import MeetArtist from "@/components/home/MeetArtist";
import SEOContent from "@/components/home/SEOContent";
import SocialSection from "@/components/home/SocialSection";
import FAQ from "@/components/home/FAQ";
import FAQSchema from "@/components/seo/FaqSchema";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF9F5]">

      <FAQSchema />
      <Hero />
      <FeaturedCollections />
      <WhyChooseMeraki />
      <MeetArtist />
      <SEOContent />
      <FAQ />
      <SocialSection />
      
    </main>
  );
}
