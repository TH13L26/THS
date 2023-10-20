
import './App.css';
import Academica from './componentes/Academica/Academica';
import Baner from './componentes/Baner/Baner';
import Cine from './componentes/Cine/Cine';
import Contratacao from './componentes/Contratacao/Contratacao';
import Footer from './componentes/Footer/Footer';
import Headerr from './componentes/Menu';
import Servicos from './componentes/Servicos/Servicos';




function App() {
  return (
   <div>
      <Headerr />
      <Baner />
      <Servicos />
      <Academica />
      <Contratacao />
      <Cine />
      <Footer />      
      
   </div>
  );
}

export default App;
