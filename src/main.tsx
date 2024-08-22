import { createRoot } from 'react-dom/client'
import './index.css'
import { ChatProvider } from './hooks/useChat'
import { AudioProvider } from './hooks/useRubberDuckSound'
import SuspenseWrapper from './Components/Suspense'

createRoot(document.getElementById('root') as HTMLElement)?.render(
  <AudioProvider>
    <ChatProvider>
        <SuspenseWrapper />
    </ChatProvider>
  </AudioProvider>
)