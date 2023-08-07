import Cafeteria from "@/models/Cafeteria.models";
import BaseCrudService from "../baseCrud.service";

class CafeteriaService extends BaseCrudService<Cafeteria>{
  constructor() {
    super("Cafeteria")
  }
}
const cafeteriaService = Object.freeze(new CafeteriaService());

export default cafeteriaService;