import { createContext, useState, useContext } from 'react';
import toast from 'react-hot-toast'

const PanelContext = createContext();

export const PanelProvider = ({ children }) => {

  const credenciales = {
    user: 'jaaz',
    pass: '123456'
  };

  const [Loggeado, setIsLoggeado] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loginPanelOpen, setloginPanelOpen] = useState(false);
  const [loginError, setLoginError] = useState('');

  const togglePanel = () => setIsOpen(!isOpen);
  const closePanel = () => setIsOpen(false);

  const toggleLoginPanel = () => {
    setloginPanelOpen(!loginPanelOpen);
  };

  const login = (user, pass) => {
    if (user === credenciales.user &&
      pass === credenciales.pass) {
        setIsLoggeado(true);
        setloginPanelOpen(false);
        setLoginError('');
        return true;
      } else {
        setLoginError('Usuario o contraseña incorrectos');
        toast.error(loginError);
        return false;
      }
  };

  const logout = () => {
    setIsLoggeado(false);
  };

  return (
    <PanelContext.Provider value={{ 
      isOpen,
      Loggeado, 
      loginPanelOpen,
      loginError,
      togglePanel, 
      closePanel,
      toggleLoginPanel,
      login,
      logout
       }}>
      {children}
    </PanelContext.Provider>
  );
};

export const usePanel = () => useContext(PanelContext);