import { Provider } from "react-redux";
import "./index.css";
import { LoginPage } from "./pages/Login/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./store";
import { ThemeProvider, createTheme } from "@material-ui/core";
import RequireAuth from "@auth-kit/react-router/RequireAuth";
import AuthOutlet from "@auth-kit/react-router/AuthOutlet";
import { useEffect } from "react";
import { EventsPage } from "./pages/Events/EventsPage";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333333",
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router basename="/app">
          <Routes>
            <Route
              path="/eventos"
              element={
                  <EventsPage />
              }
            />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
