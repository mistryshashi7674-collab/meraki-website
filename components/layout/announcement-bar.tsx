export default function AnnouncementBar() {
  return (
    <div className="bg-[#1F2937] text-white text-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-8 py-2 px-4 text-center">
        <span>✨ Handmade in Chennai</span>

        <span className="hidden md:inline">•</span>

        <span>🎨 Custom Orders Available</span>

        <span className="hidden md:inline">•</span>

        <span>🚚 Pan India Shipping</span>
      </div>
    </div>
  );
}