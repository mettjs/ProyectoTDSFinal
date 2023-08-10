import { GetAll, GetById } from "@/common/interfaces/queries";
import Cafeteria from "@/models/Cafeteria.models";
import cafeteriaService from "@/services/cafeteria/cafeteria.services";
import { useQuery } from "@tanstack/react-query";

function useCafeteria(id: string): GetById<Cafeteria>;
function useCafeteria(): GetAll<Cafeteria>;

function useCafeteria(id?: string) {
  const queryKey = ["Cafeteria"];

  if (id) {
    queryKey.push(id);
  }

  const response = useQuery<Cafeteria[] | Cafeteria>(
    queryKey,
    {
      queryFn: id
        ? () => cafeteriaService.getById(`${id}`)
        : () => cafeteriaService.getAll(),
      refetchOnWindowFocus: false

    }
  );

  return response;
};

export default useCafeteria;