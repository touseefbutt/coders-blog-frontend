import {Routes, Route} from 'react-router-dom'
import '../src/css/main.css'
import Home from "./components/Home"
import Login from './components/auth/login';
import Register from './components/auth/register';

function App() {
  return (
    <div >
      <Routes> 
        <Route path='/' element={ <Home /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/register' element={ <Register /> }/>
      </Routes>
    </div>
  );
}

export default App;
