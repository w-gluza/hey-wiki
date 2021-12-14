// Import dependencies
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './main.scss';

import { Provider } from 'react-redux';
import axios from 'axios';
import { createSession } from './actions/queue';
import store from './store';
import illustration from './assets/chat-illustration.svg';

import ChatbotContainer from './container/ChatbotContainer.jsx';
import Navigation from './components/navigation/Navigation.jsx';
import Modal from './components/modal/Modal.jsx';
import ToggleContent from './components/modal/ToggleContent.jsx';

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
      <div className="main-container">
        <Navigation />
        <div className="home-container">
          <section className="intro">
            <h1>Hello,</h1>
            <p className="subheading">
              WIKI is here to help you with editing and contributing to
              Wikipedia. Click below to start a chat!
            </p>
            <ToggleContent
              toggle={(show) => (
                <button className="btn-primary" onClick={show}>
                  Let's chat
                </button>
              )}
              content={(hide) => (
                <Modal>
                  <ChatbotContainer hide={hide} />
                </Modal>
              )}
            />
          </section>
          <section className="illustration-container">
            <img
              className="illustration"
              src={illustration}
              alt="chatting people"
            />
          </section>
        </div>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
