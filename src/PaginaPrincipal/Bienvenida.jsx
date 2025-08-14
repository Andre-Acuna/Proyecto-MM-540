import { useEffect, useState } from 'react'

function Intro() {
  const [mostrarLogo, setMostrarLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarLogo(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className='px-50 py-15 bg-[#FDEECD]'>

        <div className="relative w-full h-[400px] bg-[#FDEECD] flex items-center justify-center overflow-hidden">
          {mostrarLogo ? (
            <img
              src="/logo-removebg2.png"
              alt="Logo Tienda"
              className="w-auto h-auto animate-fadeIn"
            />
          ) : (
            <video
              src="/video/armado2.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover animate-fadeIn"
            />
          )}
        </div>

      </div>
    </>
  )
}

export default Intro