import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    const isMobile = window.innerWidth <= 768
    if (isMobile) {
      navigate('/dashboard')
    } else {
      navigate('/landing')
    }
  }, [navigate])

  return null
}

export default App