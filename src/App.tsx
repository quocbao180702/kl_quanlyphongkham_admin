
import { Outlet } from 'react-router-dom'
import Header from './components/header'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from './provider/AuthContextProvider'

function App() {
  const { checkAuth } = useContext(AuthContext)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const authenticate = async () => {
      await checkAuth()
      setLoading(false);
    }
    authenticate()
  }, [checkAuth])

  if (loading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App
