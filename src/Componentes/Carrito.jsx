import { useCart } from '../context/CartContext'
import { HiMinusCircle, HiPlusCircle, HiTrash  } from 'react-icons/hi'

function CartDropdown() {
  const { cartItems, increment, decrement, removeFromCart } = useCart()

  return (
    <div className="absolute right-0 top-12 w-72 mr-3 bg-[#FDEECD] border-2 border-[#493831] rounded-lg shadow-lg p-4 z-9999">
      {cartItems.length === 0 ? (
        <p className="text-[#493831] text-lg">Tu carrito está vacío</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.nombre} className="flex items-center justify-between gap-2">
              <div>
                <p className="text-lg font-semibold text-[#493831]">{item.nombre}</p>
                <p className="text-base text-[#493831]">Cantidad: {item.cantidad}</p>
              </div>
              <div className="flex items-center gap-1">
                <button onClick={() => decrement(item.nombre)}>
                  <HiMinusCircle className="h-5 w-5 text-[#EAB05E] hover:text-yellow-700" />
                </button>
                <button onClick={() => increment(item.nombre)}>
                  <HiPlusCircle className="h-5 w-5 text-[#EAB05E] hover:text-yellow-700" />
                </button>
                <button onClick={() => removeFromCart(item.nombre)}>
                  <HiTrash className="h-5 w-5 text-[#D24858] hover:text-[#EA8676]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CartDropdown
