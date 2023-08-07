/* eslint-disable react-hooks/exhaustive-deps */
import useCartelera from "@/hooks/queries/useCartelera";
import useMovies from "@/hooks/queries/useMovies";
import useQueryParams from "@/hooks/useQueryParams";
import Cartelera from "@/models/Cartelera.models";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";

const MovieDetail = () => {
  const { push } = useRouter();
  const { data: result } = useCartelera();
  const movieId = useQueryParams("movieId");
  const { data, refetch } = useMovies(movieId);
  console.log(data);

  useEffect(() => {
    refetch();
  }, [movieId]);

  const changeMovie = async (id: number) => {
    push(`${id}`);
    refetch();
  }


  return (
    <>
      {
        data !== undefined && <div className="informacion-general">
          <div className="informacion-hijo">
            <div className="informacion-pelicula">
              <h1>{data?.titulo}</h1><br />
              <h3>Sinopsis:</h3><br />
              <p>{data?.sinopsis}</p><br />
              <h3>Reparto:</h3><br />
              <p>{data?.reparto}</p><br />
              <h3>Genero:</h3><br />
              <p>{data?.genero}</p><br />
              <h3>Duracion:</h3><br />
              <p>{data?.duracion}</p><br />

              <iframe width="560" height="315" src={data?.trailer} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="imgPelicula">
              <div className="comprar" >
                <a><img src={data?.img} alt=""
                  height="550" width="400"></img>
                </a>
                <button id="obtenerTaquilla" className="comprarTaquilla">
                  <a href="/"><h2>Obtener Taquilla</h2></a>
                </button>

              </div>
            </div>
          </div>

        </div>
      }
      {
        result !== undefined && <>
          <h1 className="EnCartelera">En cartelera</h1>
          <div className="peliculas-recomendadas">
            <div className="contenedor-principal">
              <div className="contenedor-carousel">
                <div className="carousel">
                  {

                    result !== undefined && result?.length !== 0 && result?.map(
                      (cartelera: Cartelera) => (
                        <div onClick={() => changeMovie(cartelera.idPelicula)} className="pelicula" key={cartelera.carteleraID}>
                          <img src={cartelera.img} alt="" height="300" width="250"></img>
                          <h1>{cartelera.pelicula}</h1>
                        </div>
                      )
                    )

                  }
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </>
  )
}
export default MovieDetail;
