
import { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Projetos from './components/Projetos';
import './App.scss';


export default class App extends Component {
  
  render() {
    return (
      <div className= "App">
        <Header />
        <main>
          <Banner/>
          <Projetos/>
        </main>
        <Footer />
      </div>
    );
  }
}