import Peliculas from "@/models/Peliculas.model";
import movieService from "@/services/peliculas/peliculas.service";
import { useMutation } from "@tanstack/react-query";

const useCreateMovie = () => {
  const mutation = useMutation({
    mutationFn: (movie: Peliculas) => movieService.create(movie),
  });

  return mutation;
};

export default useCreateMovie;
