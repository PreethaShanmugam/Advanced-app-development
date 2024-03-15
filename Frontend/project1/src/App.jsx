import Signin from './Components/Signin'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar'
import Signup from './Components/Signup'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Signin/>} />
          <Route path="/Signin" element={<Signup/>} />
        </Routes>
        </Router>
    </>
  )
}

export default App
