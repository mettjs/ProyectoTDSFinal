import useMovies from "@/hooks/queries/useMovies";
import Peliculas from "@/models/Peliculas.model";
import { useRouter } from "next/router";

const Estrenos = () => {

  const { data } = useMovies();
  const { push } = useRouter();


  return <div className="contenedor-padre">

    <div className="genero">
      <h2>Peliculas en estreno</h2>
    </div>
    <hr />


    <div className="container">
      <div className="contenedor-peliculas">
        {
          data !== undefined && data?.length !== 0 && data?.filter(x => x.estreno == "Estrenandose").map(
            (pelicula: Peliculas) => (
              <div onClick={() => push(`/movies/${pelicula.id}`)} className="pelicula" key={pelicula.id}>
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