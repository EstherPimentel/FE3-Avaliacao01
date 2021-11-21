import './style.scss'


    function GridCards({idProjeto}){

    return(
        
        <div className="container-fluid">
            <div className="cards">
                <h3 className="card-title">{idProjeto.titulo}</h3>
                <img className="img-fluid-card-img-top" src={idProjeto.imagem} alt=""width="480" height="auto" ></img>
                <h5 className="card-text">{idProjeto.sobre}</h5>
                <a className="navbar-brand" href={idProjeto.gitHub}><button type="button" class="btn btn-warning">GitHub</button></a>

                <a className="navbar-brand"href={idProjeto.vercel}><button type="button" class="btn btn-danger">Vercel</button></a>

                
            </div>
        </div>
        
              
    )
}

export default GridCards;