import { Apresentation } from "./components/Apresentation"
import { Header } from "./components/Header"
import { GlobalStyle } from "./styles/global"

export const App = () => {
  return (
    <div>
      <Header />
        <Apresentation />
      <GlobalStyle />
    </div>
  )
}
