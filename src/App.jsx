import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
