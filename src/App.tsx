import { Header } from "./components/Header";
import { Welcome } from "./components/Welcome";
import { About } from "./components/About";

import { GlobalStyle } from "./styles/global";
import { Projetos } from "./components/Projetos";



export const App = () => {

  return (
    <div>
      <Header />
        <Welcome />
        <About />
        <Projetos />
      <GlobalStyle />
    </div>
  )
}
