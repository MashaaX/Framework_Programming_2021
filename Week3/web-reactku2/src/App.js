import React, { Component } from 'react';
import Header from './practice/Header';
import Footer from './practice/Footer';
import List from './practice/List'; class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Component dari Class App</h1>
        <List />
        <Footer judul='Halaman Footer' nama='Rian Herlangga' />
      </div>
    );
  }
} export default App;
