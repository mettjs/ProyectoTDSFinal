import Cartelera from "@/models/Cartelera.models";
import BaseCrudService from "../baseCrud.service";

class CarteleraService extends BaseCrudService<Cartelera>{
  constructor() {
    super("Cartelera")
  }
}
const carteleraService = Object.freeze(new CarteleraService());

export default carteleraService;