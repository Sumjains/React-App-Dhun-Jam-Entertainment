import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import LoginPage from "./screens/LoginPage";
import { CssBaseline } from "@mui/material";
import theme from "./Theme";
import AdminDashboard from "./screens/AdminDashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Router>
          <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/dashboard/:id" component={AdminDashboard} />
          </Switch>
        </Router>
        
      </ThemeProvider>
    </>
  );
};
