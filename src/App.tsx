import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Activities } from './pages/Activities';
import { ActivityDetail } from './pages/ActivityDetail';
import { Asociacion } from './pages/Asociacion';
import { LosGauchos } from './pages/LosGauchos';
import { Socios } from './pages/Socios';
import { Donaciones } from './pages/Donaciones';
import { Abogado } from './pages/Abogado';
import { Sponsors } from './pages/Sponsors';
import { Contacto } from './pages/Contacto';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="actividades" element={<Activities />} />
          <Route path="actividades/:slug" element={<ActivityDetail />} />
          <Route path="asociacion" element={<Asociacion />} />
          <Route path="los-gauchos" element={<LosGauchos />} />
          <Route path="socios" element={<Socios />} />
          <Route path="donaciones" element={<Donaciones />} />
          <Route path="abogado" element={<Abogado />} />
          <Route path="sponsors" element={<Sponsors />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
