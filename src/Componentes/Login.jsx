import { useState } from 'react';
import { usePanel } from '../context/PanelContext';

const PanelLogin = () => {
  const { loginPanelOpen, login, toggleLoginPanel, loginError } = usePanel();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  }

  return (
    <>
      {loginPanelOpen && (
        <div 
          className="fixed inset-0 bg-opacity-40 backdrop-blur-sm z-30"
          onClick={toggleLoginPanel}
        />
      )}

      <div
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 ${
          loginPanelOpen ? 'translate-y-[30vh]' : '-translate-y-full'
        } w-11/12 max-w-md bg-[#EAB05E] shadow-xl rounded-lg z-40 transition-all duration-500 ease-out`}
      >
        <div className="p-6 flex flex-col items-center">
          <h2 className="text-2xl text-[#493831] font-bold mb-4">Iniciar Sesión</h2>
          
          <div className="w-full space-y-4">
            <input 
              type="text" 
              placeholder="Usuario" 
              value = {username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 bg-[#FDEECD] border rounded"
            />
            <input 
              type="password" 
              placeholder="Contraseña" 
              value = {password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-[#FDEECD] border rounded"
            />
            <button
              onClick={handleSubmit}
              className="w-full py-2 bg-[#D24858] text-[#493831] font-semibold rounded hover:bg-[#EA8676]"
            >
              Entrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelLogin