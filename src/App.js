import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Board from './components/Board';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Board} />
        {/* Add more routes as needed */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
