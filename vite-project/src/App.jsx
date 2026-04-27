import { Dashboard } from './components/dashboard'
import { ContextProvider } from './contexts/dashboardContext'
import './App.css'

function App() {


  return (
    <>
     <ContextProvider>
        <Dashboard/>
     </ContextProvider>
    </>
  )
}

export default App
