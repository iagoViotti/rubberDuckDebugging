import LoadingScreen from './LoadingScreen'
import { Suspense, lazy, useEffect, useState } from 'react'

const App = lazy(() => import('../App'))

export default function SuspenseWrapper() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 800); // Mock loading time, adjust as needed

    //instead of putting a timer imma put the button for the user to click qhen read the instructions
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Suspense fallback={<LoadingScreen />}>
      {isLoaded ? <App /> : <LoadingScreen />}
    </Suspense>
  )
}