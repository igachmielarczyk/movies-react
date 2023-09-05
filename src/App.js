import { Route, Routes } from 'react-router-dom';

// Adding Components & Pages
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Account from './pages/Account';
import Search from './pages/Search';
import InfoMovie from './pages/InfoMovie';
import ProtectedRoute from './components/ProtectedRoute';

import {AuthContextProvider} from './context/AuthContext';

// Adding Styles
import './styles/app.scss';

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      < Routes>
        < Route path='/movies-react' element={<Home />} />
        < Route path='/login' element={<Login />} />
        < Route path='/signup' element={<Signup />} />
        < Route path='/search' element={<Search />} />
        < Route path='/movie/:id' element={<InfoMovie/>} />
        < Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute> } />
      </Routes>
    </AuthContextProvider>
    </>
  );
}

export default App;
