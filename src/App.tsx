import { Route, Routes } from 'react-router-dom'
import './App.css'
import Root from './pages/Root'
import DashBoard from './pages/DashBoard'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Root />}/>
      <Route path='/main' element={<DashBoard />}/>
    </Routes>
  )
}

export default App
