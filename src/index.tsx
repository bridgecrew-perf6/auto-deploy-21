import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';


try {
  const renderApp = () => {
    ReactDOM.render(
      document.getElementById('root'),
    );
  };
  renderApp();
} catch (e) {
  console.log('e');
}
