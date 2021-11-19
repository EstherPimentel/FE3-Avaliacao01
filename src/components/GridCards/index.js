import './style.scss'

    function GridCards({idProjeto}){

    return(
        <div className="cards">
            <h4 className="titulo">{idProjeto.titulo}</h4>
            <div className= "imagem">{idProjeto.imagem}</div>
            <p className="descricao">{idProjeto.sobre}</p>
            <a className="gitHub" href={idProjeto.gitHub} >GitHub</a>
            <a className="vercel"href={idProjeto.vercel} >Vercel</a>
        </div>
                
    )
}

export default GridCards;