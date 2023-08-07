import useMovies from "@/hooks/queries/useMovies";
import Peliculas from "@/models/Peliculas.model";

const Estrenos = () => {

  const { data } = useMovies();


  return <div className="contenedor-padre">

    <div className="genero">
      <h2>ESTRENO</h2>
    </div>

    <div className="container">
      <div className="contenedor-peliculas">
        {
          data !== undefined && data?.length !== 0 && data?.filter(x => x.estreno == "Estrenandose").map(
            (pelicula: Peliculas) => (
              <div className="pelicula" key={pelicula.id}>
                <a href="#"><img src={pelicula.img} alt="" height="300" width="250"></img></a>
                <div className="titulo-pelicula">{pelicula.titulo}</div>
              </div>
            )
          )
        }
      </div>
    </div>
  </div>
};

export default Estrenos;