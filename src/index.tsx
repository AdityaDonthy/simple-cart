import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return <div>I was created by the browser, not the server!</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));