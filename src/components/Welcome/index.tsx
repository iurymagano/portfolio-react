import { Container, Content } from "./style";

import perfilImg from '../../assets/profile-neww.png';

export const Welcome = () => {
  return (
    <Container>
      <Content>
        <img src={perfilImg} alt="Foto do Iury" />
        <div className="welcome-text">
          <h1>Seja bem-vindo ao meu portfólio!</h1>
            <span>Desenvolvedor Front-end</span>
        </div>
      </Content>
    </Container>
  )
}