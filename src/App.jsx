import { ContextProvider } from './context/Contexto.jsx'
import {TodoApp} from './pages/TodoApp.jsx' 

function App() {
  return (
    <>
      <ContextProvider>
        <TodoApp />
      </ContextProvider>
    </>
  )
}

export default App
