import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('Welcome Anosh Darson', () => {
const div = document.createElement('div');
ReactDOM.render(<App />, div);
ReactDOM.unmountComponentAtNode(div);
});
