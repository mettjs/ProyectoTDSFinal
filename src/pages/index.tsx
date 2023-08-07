import useMovies from "@/hooks/queries/useMovies";
import Peliculas from "@/models/Peliculas.model";
import { useRouter } from "next/router";

export default function Home() {
  const { data } = useMovies();
  const { push } = useRouter();


  return <>
    <div className="destacada">
      <div className="contenedor">
        <h2>Pelicula destacada de hoy</h2>
        <h3 className="titulo">Interestellar</h3>
        <p className="descripcion">
          Narra las aventuras de un grupo de exploradores que hacen uso de un agujero de gusano recientemente
          descubierto para superar las limitaciones de los viajes espaciales tripulados y vencer las inmensas distancias
          que tiene un viaje interestelar.
        </p>
        <p className="descripcion">
          Michael Ramirez - `Interstellar es una gran pelicula 10/10`
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/UoSSbmD9vqc" title="YouTube video player"
          frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
      </div>
    </div>

    <div className="contenedor">
      <h1 className="todas">Todas las peliculas</h1>
      <div className="contenedor2">
        <div className="contenedor-peliculas">
          <div className="peliculas">
            {

              data !== undefined && data?.length !== 0 && data?.map(
                (pelicula: Peliculas) => (
                  <div onClick={() => push(`/movies/${pelicula.id}`)} className="pelicula" key={pelicula.id}>
                    <img src={pelicula.img} alt="" height="300" width="250"></img>
                    <h1>{pelicula.titulo}</h1>
                  </div>
                )
              )

            }
          </div>
        </div>
      </div>
    </div>
  </>
};