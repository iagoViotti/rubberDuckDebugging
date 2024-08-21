// src/App.tsx
import './App.css';
import ChatWindow from './Components/ChatWindow';
import BackgroundCanvas from './Components/BackgroundCanvas';
import Mute from './Components/MuteIcon';

export default function App() {
  return (
    <>
      <BackgroundCanvas />
      <div
        id='App'
        className="container"
      >
        <ChatWindow />
      </div>
      <Mute />
    </>
  );
}