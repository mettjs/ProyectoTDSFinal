import Sala from "@/models/Sala.models";
import BaseCrudService from "../baseCrud.service";

class SalaService extends BaseCrudService<Sala>{
  constructor() {
    super("Peliculas")
  }
}
const salaService = Object.freeze(new SalaService());

export default salaService;