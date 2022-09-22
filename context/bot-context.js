import { createContext, useState } from 'react';

//create context
const BotContext = createContext();

export const BotProvider = ({ children }) => {
  const [settings, setSettings] = useState({
    intent: 'WELCOME',
    chatTitle: 'IT Gra',
    agentId: 'PUSTY KOD',
    lang: 'pl',
    iconUrl: 'https://assets.stickpng.com/images/580b57fbd9996e24bc43be02.png',
    visualsChanged: false,
    ready: false,
  });

  const addCode = (newId) => {
    setSettings((prevState) => {
      return { ...prevState, agentId: newId, ready: true };
    });
  };

  const setReady = () => {
    setSettings((prevState) => {
      return { ...prevState, ready: true };
    });
  };

  return (
    <BotContext.Provider value={{ settings, addCode, setReady }}>
      {children}
    </BotContext.Provider>
  );
};

export default BotContext;
