import './style.scss';
import {Fragment} from 'react';
import GridCards from '../GridCards';
import Halloween from '../img/Halloween01.jpg';
import Petinder from '../img/petinder.jpg';
import Alice from '../img/Alice.jpg';

function Projetos(){

const listaProjetos = [
  {
      id: 1,
      imagem:Halloween,
      titulo: "Halloween",
      sobre: "projeto realizado para aula de Front-end 3",
      gitHub: "https://github.com/EstherPimentel/Halloween",
      vercel: "https://halloween-estherpimentel.vercel.app/"
  },
  {
      id: 2,
      imagem:Alice,
      titulo: "Alice in Wonderland",
      sobre: "trabalho realizado como exercício integrador de Front-end 3",
      gitHub: "https://github.com/EstherPimentel/AliceInWonderland",
      vercel:"https://alice-in-wonderland-psi.vercel.app/" //title= "Alice" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
  },
  {
      id: 3,  
      imagem:Petinder,
      titulo: "Petinder",
      sobre: "trabalho realizado em grupo como projeto final da disciplina Front-end 1",
      gitHub: "https://github.com/projetoFinalFrontEnd",
      vercel: "https://projetofinalfrontend.github.io/projetoFinal/" //title= "Halloween02" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
  }
]

  return (
    <section id="projetos">
      <div className="projetos">
        <h2>Projetos</h2>
        <div className="row row-cols-1 row-cols-md-3">
        {listaProjetos.map((idProjeto) => {
            return(
                <Fragment key={idProjeto.id}>
                  <GridCards idProjeto={idProjeto}/>
                </Fragment>
        )})
      }
        </div>
      </div>
    </section>
  )
}

export default Projetos;