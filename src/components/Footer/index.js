import './style.scss';
import icone from '../img/caracol.png'

const Footer = () => {
  

  return (
<section id= "footer">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-4 my-6 border-top">
    <div class="col-md-4 d-flex align-items-center">
        <img className="icone" src={icone} alt="" width="50" height="50"></img>
    </div>
    <div className= "col-md-4 justify-content-center list-unstyled d-flex">
      <span class="text-muted">© 2021 Company</span>
    </div>

    <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
      <a class="text-muted" href="https://www.linkedin.com/in/esther-maria-pimentel-porto-4b351a74/"><li class="devicon-linkedin-plain colored"><svg width="50" height="50"></svg></li></a>

      <a class="text-muted" href="https://github.com/EstherPimentel/"><li class="devicon-github-original colored"><svg width="50" height="50"></svg></li></a>

      <a class="text-muted" href="https://www.facebook.com/stherpimentel/"><li class="devicon-facebook-plain colored"><svg width="50" height="50"></svg></li></a>
    </ul>

  </footer>
</section>

  )
}

export default Footer;
