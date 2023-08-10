import useCartelera from "@/hooks/queries/useCartelera";
import Cartelera from "@/models/Cartelera.models";
import { useRouter } from "next/router";

const Cartelera = () => {
  const { data } = useCartelera();
  const { push } = useRouter();

  return (
    <>
      <div className="seleccionFecha">
        <p><strong>PIANTINI</strong></p>
        <p><strong>Agosto</strong></p>
        <select title="fechas" name="fechas" id="">
          <option value="">07/08/2023</option>
          <option value="">08/08/2023</option>
          <option value="">09/08/2023</option>
        </select>
      </div>
      <div className="contenedor-cartelera">
        <div className="carteleras">

          {
            data !== undefined && data?.length !== 0 && data?.map(
              (cartelera: Cartelera) => (
                <div className="cartelera" key={cartelera.idPelicula}>
                  <div className="resumen-pelicula">
                    <div className="movie-container">
                      <div className="pelicula">
                        <img onClick={() => push(`/movies/${cartelera.idPelicula}`)} src={`${cartelera.img}`} alt="" height="300px" width="250px"></img>
                      </div>

                      <div className="detallesPeliculas">
                        <div className="informacion">
                          <h2>{cartelera.pelicula}</h2>
                          <p>{cartelera.sinopsis}</p>

                        </div>

                        <div className="contenedor-informacion">
                          <div className="informacion">
                            <h3>Genero</h3>
                            <p>{cartelera.genero}</p>
                          </div>

                          <div className="informacion">
                            <h3>Estreno</h3>
                            <p>{cartelera.estreno}</p>
                          </div>

                          <div className="informacion">
                            <h3>Sucursal</h3>
                            <p>Piantini</p>
                          </div>
                        </div>
                      </div>

                      <div className="contenedor-horas">
                        <h3>Horarios:</h3>
                        <div className="horarios">
                          <div className="horas">
                            <a href="">
                              <p><strong>7:00 AM</strong></p>
                            </a>
                          </div>
                          <div className="horas">
                            <a href="">
                              <p><strong>9:00 AM</strong></p>
                            </a>
                          </div>
                          <div className="horas">
                            <a href="">
                              <p><strong>11:00 AM</strong></p>
                            </a>
                          </div>

                        </div>

                        <div className="obtenerTaquilla">
                          <button onClick={() => push(`/Ticket/${cartelera.idPelicula}`)} className="comprarTaquilla">
                            <h2>Obtener Taquilla</h2>
                          </button>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>
              )
            )
          }

        </div>
      </div>
    </>
  )
}
export default Cartelera;