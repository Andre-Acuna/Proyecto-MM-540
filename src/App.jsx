import {Routes, Route } from "react-router-dom";
import MenuBar from './Componentes/Menu.jsx'
import Intro from './PaginaPrincipal/Bienvenida.jsx'
import Paquetes from './PaginaPrincipal/Paquetes.jsx'
import ClientesSatisfechos from './PaginaPrincipal/Clientes.jsx'
import ClientesPag from './Paginas/Resenas.jsx'
import ProductosPag from './Paginas/Productos.jsx'
import { PanelProvider } from './context/PanelContext';
import SlideDownPanel from './Componentes/SobreNosotros.jsx';
import PanelLogin from "./Componentes/Login.jsx";


function App() {

  return (
    <>
      <PanelProvider>
        <MenuBar />
        <SlideDownPanel />
        <PanelLogin />
        <Routes>
          <Route path="/" element={
            <>
              <Intro />
              <Paquetes />
              <ClientesSatisfechos />
            </>
          } />
          <Route path="/clientes" element={<ClientesPag />} />
          <Route path="/productos" element={<ProductosPag />} />
        </Routes>
      </PanelProvider>      
    </>
  )
}

export default App
