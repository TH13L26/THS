
import Style from '../Footer/Footer.module.css'
import logo from '../../imagens/logo.png'
import redes from '../../imagens/redess.png'

function Footer() {
  return (
   <main>    
    <footer>
      <section className={Style.foo}>
        <section className={Style.log_e}>
          <div className={Style.logo}>
            <img src={logo} alt='logo' className={Style.logoo}/>
          </div>

          <div className={Style.textt}>
            <h2>Home</h2>
            <h2>Para você</h2>
            <h2>Empresa</h2>
            <h2>THS</h2>
            <h2>Ajuda</h2>
          </div>

          <div className={Style.atend}>
            <h2>Atendimento</h2>
            <h2>Ouvidoria</h2>
            <h2>Capital: 4000-0000 </h2>
            <h2>Demais localidades: 0800 000 0000</h2>
          </div>

          <div className={Style.redess}>
            <img src={redes} alt='Redes Sociais' />
          </div>
        </section>
        <section className={Style.corp}>
        <p>© 2023 Esse site tem como fim educacional | Desenvolvido por: 
          <a href="https://www.linkedin.com/in/talisson-henrique-santos-37263512b" target="_blank" rel="noreferrer"> Talisson Santos</a>
        </p>
        </section>
      </section>
    </footer>
   </main>
  );
}

export default Footer;
