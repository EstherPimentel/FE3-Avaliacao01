
import { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Projetos from './components/Projetos';
import GridCards from './components/GridCards';
import foto from './components/img/eu.jpg';
import './App.scss';

export default class App extends Component {
  
  render() {
    return (
      <div className= "App">
      <Header />
      <main>
          <Banner>
            <h2>Perfil</h2>
            <img src={foto} alt=""></img>
            <p>
              Sou uma neuro-psico-bibliotecária muito interessada em Front-end e UX/UI. No tempo livre gosto de ler suspense policial e sou fã de Harry Potter desde quando Harry e eu tínhamos 11 anos.
            </p>
          </Banner>
          <Projetos/>
          <GridCards/>
        </main>
        <Footer redesContato={this.redesContato} />
      </div>
    );
  }
}