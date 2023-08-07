import Image from "next/image";
import twitter from '@/imgs/icons/Logo_of_Twitter.svg.png'
import facebook from '@/imgs/icons/facebook.png'
import instagram from '@/imgs/icons/instagram.png'


const Footer = () => {
  return <footer>
    <div className="footer-central">
      <div className="footer-links">
        <a href="/">Términos de uso</a><br />
        <a href="/">Política de privacidad</a>
        <a href="/">Políticas de calificación</a>
        <a href="/">Derechos reservados para WKMCinemas 2023.</a>
      </div>
    </div>
    <div className="footer-right">
      <a rel="noopener" aria-label="Find us on Instagram" href="https://www.instagram.com/micha3lol/" target="_blank"><Image alt="" src={instagram} /></a>
      <a rel="noopener" aria-label="Find us on Facebook" href="https://www.faceit.com/en/players/mett_-" target="_blank"><Image alt="" src={facebook} /></a>
      <a rel="noopener" aria-label="Find us on Twitter" href="https://twitter.com/mettcs" target="_blank"><Image alt="" src={twitter} /></a>
    </div>
  </footer>
}
export default Footer;