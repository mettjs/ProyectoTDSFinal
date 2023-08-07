
const NavBar = () => {
  return <header>
    <div className="LogoContainer">
      <h2 className="Logo"><a href="/" className="contenedor">WKMCinemas</a></h2>

    </div>

    <div className="NAVContainer">
      <nav>
        <a href="/" className="activo" id="index"><strong>Inicio</strong></a>
        <a href="/movies" className="" id="Cartelera"><strong>Cartelera</strong></a>
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
        <a href="/proximamente" className="" id="Proximamente"><strong>Proximamente</strong></a>
        <a href="/" className="" id="Combos"><strong>Combos</strong></a>
      </nav>
    </div>
  </header>
}
export default NavBar;