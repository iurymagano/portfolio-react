import { Container, Content } from "./style"

export const Header = () => {
	return (
		<Container>
			<Content>
				<div className="logo">IuryCode <strong>( )</strong></div>
				<div>
					<nav>
						<a href="">Home</a>
						<a href="">Sobre</a>
						<a href="">Projetos</a>
						<a href="">Conhecimentos</a>
					</nav>
				</div>
			</Content>
		</Container>
	)
}