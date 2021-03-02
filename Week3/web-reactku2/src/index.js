import React from 'react';
import ReactDOM from 'react-dom';
import Header from './practice/Header';
import './index.css';
import App from './App';
import Test from './practice/Test'
import Login from './practice/LoginPage'
import reportWebVitals from './reportWebVitals';
import HelloComponent from './practice/HelloComponent';
//import * as serviceWorker from './serviceWorker';


  class StateFullComponent extends React.Component{
    render(){
      return <p>StateFullComponent</p>
    }
  }

ReactDOM.render(
    <Login />,
  document.getElementById('root')
);

//ServiceWorker.unregister();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
