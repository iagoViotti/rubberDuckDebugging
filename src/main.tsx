import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ChatProvider } from './hooks/useChat'
import { AudioProvider } from './hooks/useRubberDuckSound'

createRoot(document.getElementById('root') as HTMLElement)?.render(
  <AudioProvider>
    <ChatProvider>
      <App />
    </ChatProvider>
  </AudioProvider>
)