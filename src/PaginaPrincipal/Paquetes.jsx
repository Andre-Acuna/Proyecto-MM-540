import { useCart } from '../context/CartContext.jsx'
import { usePanel } from '../context/PanelContext.jsx'
import toast from 'react-hot-toast'

function Paquetes() {

    const { addToCart } = useCart()
    const { Loggeado } = usePanel()

  const paquetes = [
    {
      nombre: 'Paquete Esencial',
      descripcion: 'Dos artículos de Tier B, y dos artículos de Tier A',
      precio: 'L 350'
    },
    {
      nombre: 'Paquete Deluxe',
      descripcion: 'Dos artículos de Tier B, dos artículos de Tier A, y dos artículos de Tier S',
      precio: 'L 500'
    },
    {
      nombre: 'Paquete Premium',
      descripcion: 'Cuatro artículos de Tier B, y cuatro artículos de Tier S',
      precio: 'L 700'
    },
  ]

  const handleAdd = (nombre) => {
    addToCart(nombre)
    toast.success(`${nombre} agregado al carrito 🛒`)
  }

  const Advertencia = () => {
    toast.error("Debe Iniciar Sesion")
  }

  return (
    <section className="py-6 px-6 bg-[#FDEECD]">
      <h2 className="text-3xl font-bold text-center text-[#493831] mb-8">Paquetes Disponibles</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {paquetes.map((paquete, index) => (
          <div key={index} className="bg-[#EAB05E] rounded-xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <div>
              <h3 className="text-2xl font-semibold text-[#493831] mb-2">{paquete.nombre}</h3>
              <p className="text-[#493831] text-lg">{paquete.descripcion}</p>
            </div>
            <h3 className="text-3xl font-semibold text-[#493831] text-center mb-2">{paquete.precio}</h3>
            <button onClick={Loggeado ? () => handleAdd(paquete.nombre) : () => Advertencia()}
            disabled={!Loggeado}
            className={`mt-6 px-4 py-2 rounded-lg font-semibold ${
            Loggeado  
              ? 'bg-[#D24858] text-[#493831] hover:bg-[#EA8676] cursor-pointer'
              : 'bg-gray-400 text-gray-600 cursor-not-allowed'
          } transition-colors`}
            >
              Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Paquetes