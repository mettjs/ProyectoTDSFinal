import useMovies from "@/hooks/queries/useMovies";
import Peliculas from "@/models/Peliculas.model";
import { useRouter } from "next/router";

const Romance = () => {

  const { data } = useMovies();
  const { push } = useRouter();


  return <div className="contenedor-padre">

    <div className="genero">
      <h2>Peliculas de Romance</h2>
    </div>

    <div className="container">
      <div className="contenedor-peliculas">
        {
          data !== undefined && data?.length !== 0 && data?.filter(x => x.genero == "Romance").map(
            (pelicula: Peliculas) => (
              <div className="pelicula" key={pelicula.id}>
                <a onClick={() => push(`/movies/${pelicula.id}`)}><img src={pelicula.img} alt="" height="300" width="250"></img></a>
                <div className="titulo-pelicula">{pelicula.titulo}</div>
              </div>
            )
          )
        }
      </div>
    </div>
  </div>
};

export default Romance;