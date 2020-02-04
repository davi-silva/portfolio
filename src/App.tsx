import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/UI/Navbar'
import Footer from './components/UI/Footer'

import Homepage from './pages/Homepage/Homepage'

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
