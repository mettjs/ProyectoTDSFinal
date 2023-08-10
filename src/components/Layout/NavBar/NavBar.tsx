/* eslint-disable @next/next/no-html-link-for-pages */
const NavBar = () => {

  return <header>
    <div className="LogoContainer">
      <h2 className="Logo"><a href="/" className="contenedor">WKMCinemas</a></h2>

    </div>

    <div className="NAVContainer">
      <nav>
        <a href="/" className=""><strong>Inicio</strong></a>
        <a href="/movies" className=""><strong>Cartelera</strong></a>
        <div className="dropdown">
          <a href="/" className="" id="Generos"><strong>Generos</strong></a>
          <div className="dropdown-content">
            <a href="/Romance" className="">Romance</a><br />
            <a href="/accion" className=""><strong>Accion</strong></a><br />
            <a href="/Sci-Fi" className="">Sci-Fi</a><br />
            <a href="/Terror" className="">Terror</a><br />
          </div>
        </div>
        <a href="/estrenos" className="" id="Estrenos"><strong>Estrenos</strong></a>
        <a href="/Proximamente" className="" id="Proximamente"><strong>Proximamente</strong></a>
      </nav>
    </div>
  </header>
}
export default NavBar;