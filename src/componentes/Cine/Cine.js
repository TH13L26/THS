
import Style from '../Cine/Cine.module.css'
import Cinema from '../../imagens/cine.jpg'


function Cine() {
  return (
   <main>
    <img src={Cinema} alt="Baner Cinema" className={Style.cinemao}/>
    
   </main>
  );
}

export default Cine;
