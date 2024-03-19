import Signin from './Components/Signin'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './Components/Signup'
import Home from './Components/Home';
import User from './Components/User';
import Application from './Components/Application';
import Documents from './Components/Documents';
import Profile from './Components/Profile';
import Userdash from './Components/Userdash';
import Loanuser from './Components/Loansuser';
import Loancalculator from './Components/Loancalculator';
import Admindash from './Components/Admindash';
import Loansadmin from './Components/Loansadmin';
import Bankadmin from './Components/Bankadmin';
import Userslist from './Components/Userslist';

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Signin" element={<Signin/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/documents" element={<Documents/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/application" element={<Application/>} />
          <Route path="/userdash" element={<Userdash/>} />
          <Route path="/loansuser" element={<Loanuser/>} />
          <Route path="/loancalculator" element={<Loancalculator/>} />
          <Route path="/admindash" element={<Admindash/>} />
          <Route path="/loansadmin" element={<Loansadmin/>} />
          <Route path="/banksadmin" element={<Bankadmin/>} />
          <Route path="/users" element={<Userslist/>} />
        </Routes>
        </Router>
    </>
  )
}

export default App
