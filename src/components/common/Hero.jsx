export default function Hero() {
  return (
    <section className="bg-background dark:bg-darkBg py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        
        {/* Text */}
        <div>
          <h1 className="text-primary dark:text-darkText mb-4">
            Shop Everything You Need in One Place
          </h1>

          <p className="text-muted mb-6">
            Discover quality products at the best prices. Fast delivery across Nigeria.
          </p>

          <button className="bg-accent text-white px-6 py-3 rounded-xl hover:opacity-90 transition">
            Start Shopping
          </button>
        </div>

        {/* Image Placeholder */}
       <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-md flex items-center justify-center">
            {/* The Image Layer (Change opacity-50 to whatever level you want) */}
            <div className="absolute inset-0 bg-[url('.././src/assets/18c1270c05243d892bfe6641147454cb.jpg')] bg-cover bg-center opacity-80">
                <div className="absolute z-10 inset-0 bg-black opacity-50"></div>
            </div>

            <span className="relative z-10 text-primary text-white text-shadow-mist-950 font-bold text-2xl drop-shadow-md">
                Hero Image
            </span>
        </div>

        




      </div>
    </section>
  );
}