import { Container, Content } from "./style"

import CalculadoraImcImg from '../../assets/calculadora-imc.png';
import DtmoneyImg from '../../assets/dtmoney.png';
import NftsImg from '../../assets/nfts.png';



export const Projetos = () => {
  return (
    <Container>
      <Content id="projetos">
        <h1 className="titulo_projetos">Projetos</h1>
        <div className="content-cards">
          <div className="card">
            <div className="white"></div>
              <div className="container-card">
              <img src={DtmoneyImg} alt="Imagem do projeto de controle de financia" />
              <div className="text">
                <h1>dt money</h1>
                <p>Projeto desenvolvido no curso da rocketseat ultilizando React.js, lidando com hooks.</p>
                <div className="tecnologias">
                  <span>React</span>
                  <span>Style Components</span>
                  <span>Typescript</span>
                </div>
                <div className="buttons">
                  <a href="https://github.com/iurymagano/idmoney" target="_blank" >Github</a>
                  <a href="https://idmoney.vercel.app/" target="_blank" >Acesso</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="white"></div>
              <div className="container-card">
              <img src={CalculadoraImcImg} alt="Imagem da pagina da Calculadora" />
              <div className="text">
                <h1>Calculadora IMC</h1>
                <p>Desenvolvido com JavaScript, ultilizando um calculo de (peso e altura). Conforme o resultado aparece o GRAU.</p>
                <div className="tecnologias">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JAVASCRIPT</span>
                </div>
                <div className="buttons">
                  <a href="https://github.com/iurymagano/finance" target="_blank" >Github</a>
                  <a href="https://friendly-fermat-2bb07e.netlify.app/" target="_blank" >Acesso</a>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="white"></div>
              <div className="container-card">
              <img src={NftsImg} alt="Imagem do projeto NFTS" />
              <div className="text">
                <h1>Rocket NFTS</h1>
                <p>Esse proojeto foi um desafio da rocketseat, seguindo o layout disponibilidado no figma.</p>
                <div className="tecnologias">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JAVASCRIPT</span>
                </div>
                <div className="buttons">
                  <a href="https://github.com/iurymagano/rocket-nftz" target="_blank" >Github</a>
                  <a href="https://rocketngts.netlify.app/" target="_blank" >Acesso</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="white"></div>
              <div className="container-card">
              <img src={CalculadoraImcImg} alt="Imagem da pagina da Calculadora" />
              <div className="text">
                <h1>Starbucks</h1>
                <p>Esse projeto foi um desafio da rocketseat, seguindo o layout disponibilidado no figma.</p>
                <div className="tecnologias">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JAVASCRIPT</span>
                </div>
                <div className="buttons">
                  <a href="https://github.com/iurymagano/project-starbucks" target="_blank" >Github</a>
                  <a href="https://awesome-shockley-41682c.netlify.app/" target="_blank" >Acesso</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="white"></div>
              <div className="container-card">
              <img src={CalculadoraImcImg} alt="Imagem da pagina da Calculadora" />
              <div className="text">
                <h1>Loja de pizza</h1>
                <p>Projeto desenvolvido junto ao curso b7web. Aprimorando meus conhecimentos com JavaScript.</p>
                <div className="tecnologias">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JAVASCRIPT</span>
                </div>
                <div className="buttons">
                  <a href="https://github.com/iurymagano/store-loja" target="_blank" >Github</a>
                  <a href="https://suspicious-bhabha-9c6fbe.netlify.app/" target="_blank" >Acesso</a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="white"></div>
              <div className="container-card">
              <img src={CalculadoraImcImg} alt="Imagem da pagina da Calculadora" />
              <div className="text">
                <h1>Sidebar</h1>
                <p>Desenvolvido com JavaScript, ultilizando um calculo de (peso e altura). Conforme o resultado aparece o GRAU.</p>
                <div className="tecnologias">
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JAVASCRIPT</span>
                </div>
                <div className="buttons">
                  <a href="https://github.com/iurymagano/finance" target="_blank" >Github</a>
                  <a href="https://friendly-fermat-2bb07e.netlify.app/" target="_blank" >Acesso</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Content>
    </Container>
  )
}