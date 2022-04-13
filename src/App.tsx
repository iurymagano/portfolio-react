import { Header } from "./components/Header";
import { Welcome } from "./components/Welcome";
import { About } from "./components/About";

import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <div>
      <Header />
        <Welcome />
        <About />
      <GlobalStyle />
    </div>
  )
}
