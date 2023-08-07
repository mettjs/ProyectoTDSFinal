import { GetAll, GetById } from "@/common/interfaces/queries";
import Peliculas from "@/models/Peliculas.model";
import movieService from "@/services/peliculas/peliculas.service";
import { useQuery } from "@tanstack/react-query";

function useMovies(id: string): GetById<Peliculas>;
function useMovies(): GetAll<Peliculas>;

function useMovies(id?: string) {
  const queryKey = ["Movies"];

  if (id) {
    queryKey.push(id);
  }

  const response = useQuery<Peliculas[] | Peliculas>(
    queryKey,
    {
      queryFn: id
        ? () => movieService.getById(`${id}`)
        : () => movieService.getAll(),
      refetchOnWindowFocus: false

    }
  );

  return response;
};

export default useMovies;
