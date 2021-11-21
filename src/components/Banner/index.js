import './style.scss';
import foto from '../img/eu.jpg'

const Banner = () => {

  return (
    <section id="banner">
    <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-5">
                  <img className="img-fluid rounded float-start" src={foto} alt=""width="500" height="auto" ></img>
                </div>
                <div className="col-md-6">
                  <div className="card-body">
                    <h1 className="card-title">Sobre mim:</h1>
                    <h3 className="card-text">Neuro-psico-bibliotecária aprendendo a programar. Nas horas vagas gosto de ler e sou fã de Harry Potter desde quando ele e eu tínhamos 11 anos.</h3>
                    <div className="container">
                      <h4>
                        Skills:
                      </h4>
                    <div className="row row-cols-auto" width="100">
                        <i className="devicon-figma-plain colored"></i>
                        <i className="devicon-html5-plain-wordmark colored"></i>
                        <i className="devicon-css3-plain-wordmark colored"></i>
                        <i className="devicon-sass-original colored"></i>
                        <i className="devicon-javascript-plain colored"></i>
                        <i className="devicon-react-original-wordmark colored"></i>
                        <i className="devicon-bootstrap-plain-wordmark colored"></i>
                        <i className="devicon-vscode-plain-wordmark colored"></i>
                        <i className="devicon-git-plain-wordmark colored"></i>
                        <i className="devicon-github-original-wordmark colored"></i>
                        <i className="devicon-java-plain-wordmark colored"></i>
                        <i className="devicon-spring-plain-wordmark colored"></i>
                        <i className="devicon-intellij-plain colored"></i>
                        <i className="devicon-mysql-plain-wordmark colored"></i>    
                        <i className="devicon-docker-plain-wordmark colored"></i>    
                    </div>
                    </div>
                  </div>
                </div>
              </div>
      </div>
  </section>
  )
}

export default Banner;