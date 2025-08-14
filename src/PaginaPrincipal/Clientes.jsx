import { clientes } from '../data/clientes'
import { useNavigate } from "react-router-dom";

const ClientesSatisfechos = () => {
  const navigate = useNavigate();

  return (
    <section className="py-12 bg-[#FDEECD]">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4 text-[#493831]">
          Clientes Satisfechos
        </h2>
        <p className="text-[#493831] text-lg mb-8">
          Nos enorgullece compartir las experiencias y momentos felices de quienes han confiado en nosotros.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {clientes.map((cliente) => (
            <div
              key={cliente.id}
              className="relative group w-full h-64 overflow-hidden rounded-xl shadow-lg cursor-pointer"
            >
   
              <img
                src={cliente.img}
                alt={`Cliente ${cliente.id}`}
                className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-[#493831] text-white text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-lg italic">"{cliente.review}"</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/clientes")}
          className="mt-5 px-6 py-3 bg-[#D24858] text-[#493831] rounded-lg font-semibold hover:bg-[#EA8676] cursor-pointer transition"
        >
          Ver Más
        </button>
      </div>
    </section>
  );
};

export default ClientesSatisfechos;