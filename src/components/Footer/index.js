import './style.scss';

const Footer = ({ portfolio, fundoEscuro }) => {
  const generateDateString = () => {
    const creationYear = '2021';
    const currentYear = `${new Date().getFullYear()}`;
    return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
  }

  return (
    <footer id="footer" className={`d-flex flex-wrap justify-content-center align-items-center py-3 border-top text`}>
      <h3>{portfolio} Todos os direitos reservados. &copy;Copyright {generateDateString()}</h3>
    </footer>
  )
}

export default Footer;