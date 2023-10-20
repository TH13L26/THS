
import Style from '../Contratacao/Contratacao.module.css'
import bank from   '../../imagens/banco.png'
import car from   '../../imagens/carro.png'
import din from   '../../imagens/dinheiro.png'

function Contratacao() {
  return (
   <main>
    <section className={Style.contrato}>
        <div className={Style.contra}>
            <p className={Style.p}>Fácil contratação!</p>
            <h2>Vagas exclusivas pra você conquistar mais.</h2>
            <h4>O Empréstimo com Garantia da THS é a melhor escolha para tirar os planos do papel.</h4>
            <button type="submit" className={Style.btoo}>QUERO SIMULAR</button>
            <p className={Style.pp}>*Sujeito à analise de crédito e condiçoes do produto.</p>
        </div>

        <div className={Style.cont1}>
            <img src={bank} alt="Banco" className={Style.imagem}/>
            <p className={Style.bancoo}>Aprovação de crédito online, fácil e rápido</p>
            <p className={Style.bancooo}>Faça tudo queprecisa sem sair de casa.</p>
            <button type="submit" className={Style.btooo}>SIMULAR</button>
        </div>   

        <div className={Style.cont2}>
        <img src={car} alt="Banco" className={Style.imagem}/>
            <p className={Style.bancoo}>Empréstimo de até 100% do valor do veículo</p>
            <p className={Style.bancooo}>Mais dinheiro para utilizar como quiser.</p>
            <button type="submit" className={Style.btoooo}>SIMULAR</button>
        </div>  

        <div className={Style.cont3}>
        <img src={din} alt="Banco" className={Style.imagem}/>
            <p className={Style.bancoo}>As menores taxas</p>
            <p className={Style.bancooo}>Contrate com taxas a partir de 1,39% ao mês.</p>
            <button type="submit" className={Style.btooooo}>SIMULAR</button>
        </div>       
        
    </section>
    
   </main>
  );
}

export default Contratacao;
