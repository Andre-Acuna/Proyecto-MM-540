const productos = [
  { id: 1, nombre: "Lapices", tier: "Tier B", img: "/productos/lapices-tier1.jpg" },
  { id: 2, nombre: "Maquillaje", tier: "Tier B", img: "/productos/maquillaje-tier1.jpeg" },
  { id: 3, nombre: "Bote de Snoopy", tier: "Tier A", img: "/productos/bote-tier2.jpg" },
  { id: 4, nombre: "Calcetines", tier: "Tier A", img: "/productos/calcetines-tier2.jpg" },
  { id: 5, nombre: "Cartera", tier: "Tier S", img: "/productos/cartera-kuromi.jpg" },
  { id: 6, nombre: "Peluche", tier: "Tier S", img: "/productos/peluche-stitch.jpg" },
];

const filtrarPorTier = (tier) => productos.filter((p) => p.tier === tier);

const ProductosPag = () => {
  const tiers = ["Tier B", "Tier A", "Tier S"];

  return (
    <div className="p-6 bg-[#FDEECD] space-y-10">
      {tiers.map((tier) => (
        <div key={tier}>
          <h2 className="text-2xl text-[#493831] font-bold mb-4">{tier}</h2>
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
            {filtrarPorTier(tier).map((producto) => (
              <div
                key={producto.id}
                className="min-w-[200px] bg-[#EAB05E] mx-3 rounded-2xl shadow-md flex-shrink-0 hover:scale-110 transition"
              >
                <img
                  src={producto.img}
                  alt={producto.nombre}
                  className="w-full h-40 object-cover rounded-t-2xl"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-[#493831]">{producto.nombre}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductosPag;