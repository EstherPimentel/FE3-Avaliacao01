/* eslint-disable jsx-a11y/anchor-is-valid */
import "../Header/style.scss"
import icone from '../img/pomoDeOuro.gif'
const Header = () => {

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-light bg-light"aria-label="Third navbar example">
        <div className="container-fluid">
          <img className="navbar-brand" src={icone} alt="pomoDeOuro"></img>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarsExample03">
            <ul className="navbar-nav mb-0 mb-sm-0">
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