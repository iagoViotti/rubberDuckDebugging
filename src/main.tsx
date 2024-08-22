import { createRoot } from 'react-dom/client'
import { ChatProvider } from './hooks/useChat'
import { AudioProvider } from './hooks/useRubberDuckSound'
import App from './App'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement)?.render(
  <AudioProvider>
    <ChatProvider>
      <App />
    </ChatProvider>
  </AudioProvider>
)