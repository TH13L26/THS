
import Style from '../Servicos/Servicos.module.css'
import carrao from '../../imagens/carrao.png'
import estudar from '../../imagens/escola.png'
import financiar from '../../imagens/casa.png'
import pix from '../../imagens/Pix.png'
import pag from '../../imagens/pagameto.png'
import emp from '../../imagens/dinheiro.png'
 

function Servicos() {
  return (
   <main>
       <h1 className={Style.hh1}>Serviços</h1> 
       <p>Conheça nossos serviços</p>
        <div className={Style.angry_grid}>
            <div className={Style.item_0}>
                <img src={carrao} alt='carro' className={Style.carr}/>
                <h2>Tributos</h2>
            </div>
            <div className={Style.item_1}>
            <img src={estudar} alt='boina' className={Style.estu}/>
                <h2>Creditos Estudantil</h2>
            </div>
            <div className={Style.item_2}>
            <img src={financiar} alt='boina' className={Style.fina}/>
                <h2>Financiamento</h2>
            </div>
            <div className={Style.item_3}>
            <img src={pix} alt='boina' className={Style.pi}/>
                <h2>Pix</h2>
            </div>
            <div className={Style.item_4}>
            <img src={pag} alt='boina' className={Style.paga}/>
                <h2>Pagamentos</h2>
            </div>
            <div className={Style.item_5}>
            <img src={emp} alt='dinheiro' className={Style.empr}/>
                <h2>Emprestimos</h2>
            </div>
        </div>    
   </main>
  );
}

export default Servicos;
