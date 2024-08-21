import { createContext, useContext, useState } from "react";
import { MessageObj } from "../interfaces/MessageObj";
import { AnimationAction } from "three";

const ChatContext = createContext<{
  messages: MessageObj[];
  addMessage: (message: Omit<MessageObj, 'id'>) => void;
  quack: (length: number) => void;
  quackAnimation: (actions: { [key: string]: AnimationAction | null }, names: string[]) => void;
} | undefined>(undefined);


export const useChat = () => {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
};

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<MessageObj[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const quackAnimation = (actions: { [key: string]: AnimationAction | null }, names: string[]) => {
    const action = actions[names[0]];
    if (action) {
      action.repetitions = 0;
      action.clampWhenFinished = true;
      action.play();
      action.reset();
    }
  };

  const addMessage = (message: Omit<MessageObj, 'id'>) => {
    setMessages((prevMessages) => {
      const newMessage = { ...message, id: currentIndex };
      setCurrentIndex(currentIndex + 1);
      return [...prevMessages, newMessage];
    });
  };

  const quack = (length: number) => {
    let quack = '';
    if (length > 50) {
      let quacks = Math.floor(Math.random() * 5) + 1;
      for (let i = 0; i < quacks; i++) {
        quack += 'quack! ';
      }
    } else {
      quack = 'quack!';
    }
    addMessage({
      text: quack,
      time: new Date().toLocaleTimeString(),
      sender: 'duck',
    });
  }

  return (
    <ChatContext.Provider value={{ messages, addMessage, quack, quackAnimation }}>
      {children}
    </ChatContext.Provider>
  );
};