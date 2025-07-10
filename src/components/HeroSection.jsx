export default function HeroSection() {
  return (
    <section className="relative h-[60vh] md:h-[90vh] w-full overflow-hidden flex items-center justify-center text-center">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50 z-0"
        src="https://files.catbox.moe/ry9mkd.mp4"
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={(e) => {
          e.target.playbackRate = 0.75;
        }}
      />
      <div className="absolute inset-0 bg-[#e7b2c6]/40  z-10" />
      <div className="relative z-20 px-2 md:px-4">
        <h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold drop-shadow-md"
          style={{ WebkitTextStroke: "1px white", color: "#c3547d" }}
        >
          Get Nailed by Aish
        </h1>
        <p className="text-base md:text-lg mt-5 text-white drop-shadow-sm">
          Classy. Cute. Custom.
        </p>
      </div>
    </section>
  );
}
