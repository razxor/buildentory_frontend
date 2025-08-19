export default function Hero() {
  return (
    <section className="relative bg-gray-100 h-[400px] flex flex-col justify-center items-center text-center">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg"
          alt="House"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 text-white">
        <h1 className="text-4xl font-bold mb-4">Agents. Tours. Loans. Homes.</h1>
        <div className="flex max-w-lg mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <input
            type="text"
            placeholder="Enter an address, neighborhood, city, or ZIP code"
            className="flex-1 px-4 py-3 text-black outline-none"
          />
          <button className="bg-blue-600 px-6 text-white font-semibold">
            🔍
          </button>
        </div>
      </div>
    </section>
  );
}
