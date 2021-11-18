/* eslint-disable jsx-a11y/anchor-is-valid */
import "../Header/style.scss"
import icone from '../img/pomoDeOuro.gif'
const Header = () => {

  return (
    <header className="perfil">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <img className="icone" src={icone} alt="pomoDeOuro"></img>
          <div className="collapse navbar-collapse justify-content-end" id="navbarsText">
            <ul className="navbar-nav mb-2 mb-sm-0">
              <li className="nav-item">
                <a className="nav-link" href="#banner">Perfil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projetos">Projetos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer">Contatos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;