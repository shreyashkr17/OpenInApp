// import logo from './logo.svg';
import './App.css';
import Signin from './Pages/Signin.jsx';
import {Route, Routes} from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/Protected';

function App() {
  return (
    <div>
      <AuthContextProvider>
      <Routes>
        <Route path='/' element=
        {
        // <Protected>
          <Dashboard/>
        // </Protected>
        }
      />
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
