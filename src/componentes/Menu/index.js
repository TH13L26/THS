import React, {useState} from 'react';
// import { FiLogOut } from 'react-icons/fi';
import '../Menu/styles.css';
import Logoo from '../Menu/logo.png'

const Headerr = () => {

const [classOn, setClassOn] = useState(false);
      
  return (
    <header>
    <div className="container">
      <img className="logo-cyan" src={Logoo} alt="logo Cyan"/>
      

      <div className = { classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
           <div className="menu-toggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
           </div>

           <nav>
            <ul>
              <li>
                <a href="/">Pra você</a>
              </li>
              <li>
                <a href="/">Empresa</a>
              </li>
              <li>
                <a href="/">A THS</a>
              </li>
              <li>
                <a href="/">Ajuda</a>
              </li>
              <li> 
                <a href="/">Login</a>  
              </li>
              <li>
                {/* <a className={classOn ? 'show' : 'hide'} href="/login">SAIR <FiLogOut className="FiLogOut" /> </a> */}
             
              </li>
            </ul>
          </nav>

          </div>
        </div>

      </header>

      )
    }
    
export default Headerr;
