import Peliculas from "@/models/Peliculas.model";
import BaseCrudService from "../baseCrud.service";

class MovieService extends BaseCrudService<Peliculas>{
  constructor() {
    super("Peliculas")
  }
}
const movieService = Object.freeze(new MovieService());

export default movieService;