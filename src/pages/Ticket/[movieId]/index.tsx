import useQueryParams from "@/hooks/useQueryParams";
import useMovies from "@/hooks/queries/useMovies";
import { useRouter } from "next/router";


const Ticket = () => {
  const movieId = useQueryParams("movieId");
  const { data } = useMovies(movieId);
  const { push } = useRouter();



  return (<>
    {
      data !== undefined && <div className="pattern">
        <div className="container w-75 bg-black rounded">
          <h1 className="text-center my-4 text-danger p-5">WKMCINEMAS TICKETS</h1>
        </div>
        <div className="pb-3 w-75 bg-dark d-flex justify-content-around container rounded pt-3">
          <div className="w-50 p-3 mt-5 bg-black px-5">
            <img className="w-75" src={data?.img} alt="" />
          </div>
          <div className="text-danger w-50 text-center mt-5 bg-black px-5 mt-2 pt-3">
            <h1>
              {data?.titulo}
            </h1>
            <h5 className="mt-5">Selccione un horario</h5>
            <div className="mx-auto d-flex justify-content-center bg-black">
              <button className="btn btn-outline-danger mx-2">8:30 PM</button>
              <button className="btn btn-outline-danger mx-2">8:30 AM</button>
            </div>
            <a href="/combos" className="link"><button className="w-50 btn btn-danger mt-5">Agrega un combo</button></a>
            <div className="my-5 pt-5 w-100">
              <a href="/movies" className="link"><button className="btn btn-outline-danger mx-4">Atrás</button></a>
              <a href="/payment" className="link"><button className="btn btn-outline-success mx-4">Comprar</button></a>
            </div>
          </div>
        </div>
      </div>
    }
  </>)
}

export default Ticket