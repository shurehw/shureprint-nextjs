export default function Hero() {
  return (
    <header className="hero-section">
      <div className="banner">
        <div className="text-block">• Printing Designing Creating •</div>
      </div>

      <div className="marquee">
        <div className="marquee-track is--desk">
          {[...Array(6)].map((_, i) => (
            <img
              key={`desk-${i}`}
              src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/625762e6d10a111af9c654bb_Shureprint.png"
              loading="lazy"
              alt="Shureprint"
              className="marquee-image"
            />
          ))}
        </div>
        <div className="marquee-track">
          {[...Array(3)].map((_, i) => (
            <img
              key={`mobile-${i}`}
              src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/6246165ac21f31848333e767_Shure%20Print.png"
              loading="lazy"
              alt="Shure Print"
              className="marquee-image"
            />
          ))}
        </div>
      </div>

      <div className="div-block-4">
        <img
          src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/62745951c8f8742f2b75ba83_Artboard%20%E2%80%93%2001.png"
          loading="lazy"
          alt=""
          className="image-3"
        />
        <img
          src="https://cdn.prod.website-files.com/622fa56ecc9274a545158f70/6279742fcf35ee7958c5d5a9_Artboard%20%E2%80%93%207.jpg"
          loading="lazy"
          alt=""
          className="image-10"
        />
      </div>
    </header>
  );
}
