import { createContext, useState, useContext } from 'react';

const PanelContext = createContext();

export const PanelProvider = ({ children }) => {
  const [Loggeado, setIsLoggeado] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [loginPanelOpen, setloginPanelOpen] = useState(false);

  const togglePanel = () => setIsOpen(!isOpen);
  const closePanel = () => setIsOpen(false);

  const toggleLoginPanel = () => {
    setloginPanelOpen(!loginPanelOpen);
  };

  const login = () => {
    setIsLoggeado(true);
    setloginPanelOpen(false);
  };

  const logout = () => {
    setIsLoggeado(false);
  };

  return (
    <PanelContext.Provider value={{ 
      isOpen,
      Loggeado, 
      loginPanelOpen,
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