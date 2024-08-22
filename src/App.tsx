import './App.css';
import ChatWindow from './Components/ChatWindow';
import BackgroundCanvas from './Components/BackgroundCanvas';
import Mute from './Components/MuteIcon';
import { useEffect, useState } from 'react';
import ExplainerModal from './Components/ExplainerModal';
import QuestionMark from './Components/QuestionMark';

export default function App() {
  const [explainerModal, setExplainerModal] = useState(false);

  useEffect(() => {
    const localStorageCheck = localStorage.getItem('rubberDuckChatVisit');
    if (!localStorageCheck) {
      setExplainerModal(true);
      localStorage.setItem('rubberDuckChatVisit', 'true');
    }
  }, []);

  return (
    <>
      {
        explainerModal
        &&
        <ExplainerModal setExplainerModal={setExplainerModal} />
      }
      <BackgroundCanvas />
      <div
        id='App'
        className="container"
      >
        <ChatWindow />
      </div>
      <Mute />
      <QuestionMark setExplainerModal={setExplainerModal} />
    </>
  );
}