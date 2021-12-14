// Import dependencies
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

import { Provider } from 'react-redux';
import axios from 'axios';
import { createSession } from './actions/queue';
import store from './store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Navigation from './components/navigation/Navigation.jsx';
import HomeContainer from './container/HomeContainer';
import AboutContainer from './container/AboutContainer';
import ContactContainer from './container/ContactContainer';

if (localStorage.session) {
  delete axios.defaults.headers.common.session_id;
  axios.defaults.headers.common.session_id = localStorage.session;
} else {
  delete axios.defaults.headers.common.session_id;
}

const App = () => {
  useEffect(() => {
    // Check if there session
    if (!localStorage.session) {
      // Create a session
      store.dispatch(createSession());
    }
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <div className="main-container">
          <Navigation />
          <Routes>
            <Route exact path="/" element={<HomeContainer />} />
            <Route exact path="/about" element={<AboutContainer />} />
            <Route exact path="/contact" element={<ContactContainer />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
