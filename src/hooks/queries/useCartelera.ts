import { GetAll, GetById } from "@/common/interfaces/queries";
import Cartelera from "@/models/Cartelera.models";
import carteleraService from "@/services/cartelera/cartelera.services";
import { useQuery } from "@tanstack/react-query";

function useCartelera(id: string): GetById<Cartelera>;
function useCartelera(): GetAll<Cartelera>;

function useCartelera(id?: string) {
  const queryKey = ["Cartelera"];

  if (id) {
    queryKey.push(id);
  }

  const response = useQuery<Cartelera[] | Cartelera>(
    queryKey,
    {
      queryFn: id
        ? () => carteleraService.getById(`${id}`)
        : () => carteleraService.getAll(),
      refetchOnWindowFocus: false

    }
  );

  return response;
};

export default useCartelera;