import Clientes from "@/models/Clientes.models";
import BaseCrudService from "../baseCrud.service";

class ClientesService extends BaseCrudService<Clientes>{
  constructor() {
    super("Clientes")
  }
}
const clientesService = Object.freeze(new ClientesService());

export default clientesService;