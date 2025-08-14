import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { HiShoppingCart, HiUserCircle } from "react-icons/hi";
import { FaWhatsapp, FaTiktok, FaInstagram } from "react-icons/fa";
import { useCart } from '../context/CartContext.jsx'
import { usePanel } from '../context/PanelContext';
import CartDropdown from './Carrito.jsx'

function MenuBar() {
  
  const { totalCount } = useCart()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate();
  const { togglePanel, Loggeado, toggleLoginPanel, logout } = usePanel();
  const [contactOpen, setContactOpen] = useState(false);
  const [userMenu, setUserMenuOpen] =useState(false);

  return (
    <>
      <nav className="w-full bg-[#EAB05E] shadow-md px-6 flex items-center justify-between">
      
      <div className="h-full w-35">
        {<img onClick={() => navigate("/")} src="/logo-removebg2.png" className="cursor-pointer"></img>}
      </div>

      <div className="hidden md:flex space-x-8 text-[#493831] text-xl font-medium">
        <a onClick={togglePanel} className="hover:text-[#FDEECD] cursor-pointer">Sobre Nosotros</a>
        <Link to="/productos" className="hover:text-[#FDEECD] cursor-pointer">Nuestros Productos</Link>

        <div
          className="relative"
          onClick={() => setContactOpen(!contactOpen)}
        >
          <button className="hover:text-[#FDEECD]">Contáctanos</button>

          {contactOpen && (
            <div className="absolute top-full mt-2 w-48 z-9999 bg-[#EAB05E] text-[#493831] border-2 border-[#493831] rounded-lg shadow-lg">
              <a
                href="https://wa.me/50433139031"
                target="_blank"
                rel="noopener noreferrer"
                className="block flex px-4 py-2 hover:bg-[#FDEECD]"
              >
                <FaWhatsapp className="mr-2 mt-1"/> 
                WhatsApp
              </a>
              <a
                href="https://www.tiktok.com/@a_chilled_jaaz?_t=ZM-8yrEYLY5zlA&_r=1"
                target="_blank"
                rel="noopener noreferrer"
                className="block flex px-4 py-2 hover:bg-[#FDEECD]"
              >
                <FaTiktok className="mr-2 mt-1"/>
                TikTok
              </a>
              <a
                href="https://www.instagram.com/a.blue.dot_in_the_space?igsh=MXJwNG82cjRlZWRyNQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="block flex px-4 py-2 hover:bg-[#FDEECD]"
              >
                <FaInstagram className="mr-2 mt-1"/>
                Instagram
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="flex space-x-4">
        <button onClick={() => setOpen(!open)} className="text-[#493831] hover:text-[#FDEECD]">
          <HiShoppingCart className="h-10 w-10 mr-3" />
          {totalCount > 0 && (
            <span className="absolute inline-flex top-1 bg-red-500 text-white text-xs w-5 h-5 items-center justify-center rounded-full animate-bounce">
              {totalCount}
            </span>
          )}
        </button>
        
        <div className="relative"
          onClick={() => setUserMenuOpen(!userMenu)}>

          <button className="text-[#493831] hover:text-[#FDEECD]">
            <HiUserCircle className="h-10 w-10" />
          </button>

          {userMenu && (
            <div className="absolute right-0 mt-2 w-55 bg-[#EAB05E] border-2 border-[#493831] rounded-lg shadow-lg flex justify-center">

              {Loggeado ? (
                <button
                  onClick={logout}
                  className="px-4 py-2 my-3 rounded-md text-[#493831] font-semibold bg-red-600 hover:bg-red-400 w-1/3 text-center"
                >
                  Salir
                </button>
              ) : (
                <button
                  onClick={toggleLoginPanel}
                  className="px-4 py-2 my-3 rounded-md text-[#493831] font-semibold bg-blue-600 hover:bg-blue-400 w-1/3 text-center"
                >
                  Login
                </button>
              )}
            </div>
          )}

        </div>

        {open && <CartDropdown />}  

      </div>
    </nav>
    </>
  )
}

export default MenuBar
