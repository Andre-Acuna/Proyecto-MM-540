import { usePanel } from '../context/PanelContext';

const SlideDownPanel = () => {
    const { isOpen, closePanel } = usePanel();
    
    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-30"
                    onClick={closePanel}
                />
            )}

            <div
                className={`fixed top-0 left-1/2 transform -translate-x-1/2 ${isOpen ? 'translate-y-[40vh]' : '-translate-y-full'
                    } w-11/12 max-w-2xl bg-[#EAB05E] shadow-xl rounded-xl z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]`}
            >
                <div className="p-4 flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl text-[#493831] font-bold mb-4">¿Quiénes Somos?</h2>
                    <p className="text-lg text-[#493831]">Mystery Scoop es una tendencia que ha ganado popularidad en TikTok como una forma interactiva
                        y emocionante de adquirir productos sorpresa. Consiste en que vendedores ofrecen paquetes de artículos variados, que los compradores 
                        adquieren sin saber exactamente qué artículos recibirán, donde la cantidad de scoops o cucharadas y la oportunidad de recibir mejores artículos
                        se determina en función del paquete que se compra. Este concepto combina la emoción del azar con el atractivo visual de los videos de
                        empaquetado, lo que ha captado la atención de muchos usuarios en la plataforma.
                    </p>

                    <button
                        onClick={closePanel}
                        className="mt-5 px-6 py-3 bg-[#D24858] text-[#493831] rounded-lg font-semibold hover:bg-[#EA8676] transition"
                    >
                        Cerrar
                    </button>

                </div>
            </div>
        </>
    );
};

export default SlideDownPanel