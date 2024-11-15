import { Route, Routes } from 'react-router-dom'
import './App.css'
import Root from './pages/Root'
import Main from './pages/Main'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Root />}/>
      <Route path='/' element={<Main />}/>
    </Routes>
  )
}

export default App
