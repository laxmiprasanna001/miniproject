import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Header/Navbar';
function App() {
  return (
    <>
      <Navbar/>
      <Outlet/>
      {/* <footer>footer</footer> */}
    </>
  )
}

export default App
