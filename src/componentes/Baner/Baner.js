
import Style from '../Baner/Baner.module.css'
import Fundo from '../../imagens/fundo.png'
import MOCAA from '../../imagens/homem.png'

function Baner() {
  return (
   <main>
      <section className={Style.imagem}>

        <div className={Style.moca}>
          <img src={MOCAA} alt="moça" className={Style.foto}/>
        </div>

        <div className={Style.text}>
       <h1>TENHA INFINITAS POSSIBILIDADES NA PALMA DA SUA MÃO</h1>
       </div>

       <div className={Style.forms}>
        <h3>Venha ser THS o banco que conbina com a sua rotina!</h3>
        <label for="cpf"><span className={Style.nome}><p>Digite seu CPF</p></span>
        <input type="tel" className={Style.campo}></input>
        </label>
        <button type="submit" className={Style.bto}>Continuar</button>
        
       </div>
      </section>

    
    
   </main>
  );
}

export default Baner;
