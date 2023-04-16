import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Profil from './pages/Profil';


function App() {
  return (     
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/profil" element={<Profil />} />
        </Routes>
  );
}

export default App;
