import Tickets from "@/models/Tickets.models";
import ticketsService from "@/services/tickets/tickets.services";
import { useMutation } from "@tanstack/react-query";

const useCreateTicket = () => {
  const mutation = useMutation({
    mutationFn: (ticket: Tickets) => ticketsService.create(ticket),
  });

  return mutation;
};

export default useCreateTicket;