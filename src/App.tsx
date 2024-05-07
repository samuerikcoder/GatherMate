import { Provider } from "react-redux";
import "./index.css";
import { LoginPage } from "./pages/Login/LoginPage";
import store from "./store";
import { ThemeProvider, createTheme } from "@material-ui/core";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333333",
    },
    /* secondary: {
      main: green[500],
    }, */
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <LoginPage />

      </ThemeProvider>
    </Provider>
  )
}

export default App
