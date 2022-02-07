import './App.css'
import Layout from './views/Layout/Layout'
import Home from './views/Home/Home'
import { UserProvider } from './context/UserContext'

function App() {
  // inital value should match the data type of end value

  return (
    <UserProvider>
      <Layout>
        <Home />
      </Layout>
    </UserProvider>
  )
}

export default App
