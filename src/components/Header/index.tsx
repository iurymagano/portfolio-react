import { Container, Content, NavBox } from "./style"

import { FiMenu } from 'react-icons/fi'

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
              <a href="#projetos">Projetos</a>
              <a href="">Conhecimentos</a>
              <a href="">Contato</a>
              <FiMenu className="menu" />
            </nav>
          </div>
        </Content>
      </Container>
    </NavBox>  
	)
}