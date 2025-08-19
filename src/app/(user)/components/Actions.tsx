const actions = [
  { title: "Buy a home", desc: "A real estate agent can provide you...", btn: "Find a local agent" },
  { title: "Rent a home", desc: "We’re creating a seamless online experience...", btn: "Find rentals" },
  { title: "Sell a home", desc: "No matter what path you take...", btn: "See your options" },
];

export default function Actions() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
      {actions.map((a, i) => (
        <div key={i} className="p-6 bg-white rounded-lg shadow-md text-center">
          <h3 className="text-lg font-semibold mb-2">{a.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{a.desc}</p>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium">
            {a.btn}
          </button>
        </div>
      ))}
    </section>
  );
}
