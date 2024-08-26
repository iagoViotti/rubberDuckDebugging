import './App.css';
import ChatWindow from './Components/ChatWindow';
import BackgroundCanvas from './Components/BackgroundCanvas';
import Mute from './Components/MuteIcon';
import { useEffect, useState } from 'react';
import ExplainerModal from './Components/ExplainerModal';
import QuestionMark from './Components/QuestionMark';
import minimize from './assets/minimize.svg';
import maximize from './assets/maximize.svg';

export default function App() {
  const [explainerModal, setExplainerModal] = useState(false);
  const [minimized, setMinimized] = useState(false);

  window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
      setMinimized(false);
    }
  });

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
        className={`${minimized ? 'minimized-container' : 'container'}`}
      >
        <div
          className='container-header'
        >
          <h4>
            Duck chat
          </h4>
          {
            window.innerWidth < 768 &&
            <img
              src={minimized ? maximize : minimize}
              onClick={() => setMinimized(!minimized)}
            />
          }
        </div>
        <ChatWindow />
      </div>
      <Mute />
      <QuestionMark setExplainerModal={setExplainerModal} />
    </>
  );
}