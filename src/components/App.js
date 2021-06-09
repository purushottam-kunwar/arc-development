import React from 'react';
import Header from '../components/ui/Header';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import theme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Home</div>}></Route>
          <Route
            exact
            path="/services"
            component={() => <div>Services</div>}
          ></Route>
          <Route
            exact
            path="/customsoftware"
            component={() => <div>Custom Software</div>}
          ></Route>
          <Route
            exact
            path="/mobileapp"
            component={() => <div>Mobile App</div>}
          ></Route>
          <Route
            exact
            path="/websites"
            component={() => <div>Website</div>}
          ></Route>
          <Route
            exact
            path="/revolution"
            component={() => <div>Revolution</div>}
          ></Route>
          <Route
            exact
            path="/about"
            component={() => <div>About Us</div>}
          ></Route>
          <Route
            exact
            path="/contact"
            component={() => <div>Contact</div>}
          ></Route>
          <Route
            exact
            path="/estimate"
            component={() => <div>Free Estimate</div>}
          ></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
