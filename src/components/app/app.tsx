import Card from "components/card/card";
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "themes/default_theme";
import * as S from "./app.style";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <S.GlobalStyle />

      <S.Container>
        <Card />
      </S.Container>
    </ThemeProvider>
  )
}

export default App;
