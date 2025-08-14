import { clientes } from '../data/clientes'

export default function ClientesPag() {
  return (
    <div className='bg-[#FDEECD]'>
      <section className="p-8 max-w-6xl mx-auto bg-[#FDEECD]">
        <h2 className="text-4xl font-bold text-center text-[#493831] mb-10">Reseñas de Nuestros Clientes</h2>

        <div className="space-y-6 bg-[#FDEECD]">
          {clientes.map((cliente, index) => (
            <div
              key={cliente.id}
              className={`flex flex-col sm:flex-row items-center bg-[#EAB05E] rounded-xl shadow-md overflow-hidden border-2 border-[#493831] transition transform hover:-translate-y-1 hover:shadow-lg
                ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
            >
            
              <img
                src={cliente.img}
                alt={cliente.nombre}
                className="w-full sm:w-48 h-48 object-cover"
              />

              <div className="p-6 flex-1">
                <h3 className="text-xl text-[#493831] font-semibold mb-2">{cliente.nombre}</h3>
                <p className="text-[#493831] italic">"{cliente.review}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}