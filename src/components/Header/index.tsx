import { Container, Content, NavBox } from "./style"

export const Header = () => {
	return (
		<NavBox>
      <Container>
        <Content>
          <div className="logo">IuryCode <strong>( )</strong></div>
          <div>
            <nav>
              <a href="">Home</a>
              <a href="#about">Sobre</a>
              <a href="">Projetos</a>
              <a href="">Conhecimentos</a>
              <a href="">Contato</a>
            </nav>
          </div>
        </Content>
      </Container>
    </NavBox>  
	)
}