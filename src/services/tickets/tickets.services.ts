import Tickets from "@/models/Tickets.models";
import BaseCrudService from "../baseCrud.service";

class TicketsService extends BaseCrudService<Tickets>{
  constructor() {
    super("Tickets")
  }
}
const ticketsService = Object.freeze(new TicketsService());

export default ticketsService;