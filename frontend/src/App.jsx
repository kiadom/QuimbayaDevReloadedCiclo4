//import logo from './logo.svg';
import { ModulesLayout } from './layouts/ModulesLayout';
import { GestionAvances } from './pages/GestionAvances';
import { GestionInscripciones } from './pages/GestionInscripciones';
import { GestionProyectos } from './pages/GestionProyectos';
import { GestionUsuarios } from './pages/GestionUsuarios';

function App() {
  return (
    <div>
      <ModulesLayout>
        <GestionAvances/>
        <GestionInscripciones/>
        <GestionProyectos/>
        <GestionUsuarios/>
      </ModulesLayout>
    </div>
  );
}

export default App;