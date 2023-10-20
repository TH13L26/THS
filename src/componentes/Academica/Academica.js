
import Style from '../Academica/Academica.module.css'

import quadrao from '../../imagens/quadro.png'
import carta from '../../imagens/cartao.png'


function Academica() {
  return (
   <main>
    <section className={Style.tudo}>
        <div className={Style.menina}>
            <img src={quadrao} alt='Preguica' className={Style.quadro} />
        </div>
        
        <div className={Style.cel}>
           <p className={Style.sub}>Sobre a THS</p>
           <h2>Mais que um banco, um parceiro para construir o futuro</h2>
           <p className={Style.subb}>Fundada em 2023, a THS atua com uma fintech. Evoluímos para a mais completa plataforma financeiras. Estamos estabelecidos e de acordo com todas as regras e normas do Banco Central do Brasil. Com transações seguras e ágeis, ofertamos serviços de qualidade para impulsionar resultados e desburocratizar o seu processo administrativo.</p>
           <button type="submit" className={Style.bto}>Saiba mais</button>
        </div>
    </section>
   </main>
  );
}

export default Academica;
