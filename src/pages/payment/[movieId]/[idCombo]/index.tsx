import useCreateTicket from "@/hooks/mutations/tickets/useCreateTicket";
import useCafeteria from "@/hooks/queries/useCafeteria";
import useMovies from "@/hooks/queries/useMovies";
import useAlert from "@/hooks/useAlert";
import useQueryParams from "@/hooks/useQueryParams";
import Tickets from "@/models/Tickets.models";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";


const PaymentCombo = () => {
  const movieId = useQueryParams("movieId");
  const idCombo = useQueryParams("idCombo")
  const { data: result } = useCafeteria(idCombo)
  const { data } = useMovies(movieId);
  const { push } = useRouter();
  const { success } = useAlert();
  let total = Number(result?.precio) + 400;
  let ITBIS = Math.round(total - (total / 1.18));
  const createTicket = useCreateTicket();

  const Guardar = async (value: Partial<Tickets>) => {
    value.pelicula = data?.titulo
    value.peliculaID = data?.id
    value.comboID = Number(idCombo)
    value.total = total
    await createTicket.mutateAsync(value as Tickets).then(() => success(undefined, "Ticket creado exitosamente").then(() => push(`/`)));

  }

  return (<div className="pattern">
    <div className="container w-75 bg-black rounded">
      <h1 className="text-center my-4 text-danger p-5">WKMCINEMAS PAY</h1>
    </div>
    <div className="container w-75 text-center bg-dark my-5 text-danger rounded py-5">
      <div className="bg-dark">
        <div className="d-flex p-5 pb-5 justify-content-around">
          <div className="container-fluid bg-black py-5 rounded">
            <div>
              <Formik
                initialValues={{
                  pelicula: data?.titulo!,
                  nombre: '',
                  correo: '',
                  fecha: (new Date).toLocaleString(),
                  total: total,
                  comboID: Number(idCombo),
                  peliculaID: Number(movieId)
                }}
                onSubmit={async (value: Partial<Tickets>) => {
                  await Guardar(value)
                }}
                validateOnChange={false}
                validateOnBlur={false}
              >
                {({ handleSubmit }) => (
                  <Form className='form' id='ticket-form' onSubmit={handleSubmit}>
                    <h1 className="pb-5">Datos de la tarjeta</h1>
                    <h4>Aceptamos todas las tarjetas</h4>
                    <img className="w-50 mb-5" src="https://images.ctfassets.net/gc4s9mi2asix/27iheywutAjlzI1CWL3srg/faf536e2fabecb072ef5864bc3a0950b/Accepted-Cards-US.png" alt="" />

                    <div className='d-flex flex-column w-50 mx-auto'>
                      <label htmlFor="" className="text-start h3 pt-2 mx-3">Numero de tarjeta:</label>
                      <Field className='ticket-name-input' type='text' placeholder='Número de tarjeta' name='tarjeta' id='tarjeta' />
                    </div>
                    <div className='input-container'>
                      <label htmlFor="" className="text-start h3 pt-2">Fecha de expiración:</label>
                      <Field className='ticket-name-input pl-5' type='month' placeholder='Fecha de expiración' name='name' id='ticket-name' />
                    </div>
                    <div className='input-container'>
                      <label htmlFor="" className="text-start h3 pt-2">Código de seguridad:</label>
                      <Field className='ticket-name-input' type='text' name='seguridad' id='seguridad' min="1" max="999" placeholder="000" />
                    </div>
                    <div className="container-fluid bg-black py-5 rounded">

                      <h1 className="pb-5">Datos de la orden</h1>

                      <div className='input-container'>
                        <label htmlFor="" className="text-start h3 pt-3" >Correo electronico:</label>

                        <Field className='ticket-email-input' type='text' placeholder="example@example.com" name='correo' id='ticket-email' />
                      </div>
                      <div className='input-container'>
                        <label htmlFor="" className="text-start h3 pt-3" >Titular de la Tarjeta:</label>

                        <Field placeholder="Nombre Apellido" className='ticket-name-input' type='text' name='nombre' id='ticket-name' />
                      </div>
                      <div className='input-container'>
                        <label htmlFor="string" className="text-start h3 pt-3">Monto a pagar:</label>

                        <Field readOnly className='ticket-total-input' type='number' placeholder={total.toString()} name='total' id='ticket-total' />
                      </div>
                      <div className='input-container'>
                        <label htmlFor="string" className="text-start h3 pt-3">ITBIS:</label>

                        <Field readOnly className='ticket-name-input' type='number' placeholder={ITBIS.toString()} name='name' id='ticket-name' />
                      </div>
                    </div>

                  </Form>
                )}
              </Formik>

            </div>
          </div>
        </div>
        <div className="my-4 container d-flex justify-content-around submit">
          <input
            className="btn btn-danger w-25"
            type={"submit"}
            form="ticket-form"
            value={"Cancelar"}
            onClick={() => push(`/movies`)}
          />
          <input
            className="btn btn-success w-25"
            type={"submit"}
            form="ticket-form"
            value={"Pagar"}
          />
        </div>
      </div>
    </div>
  </div >
  )
}

export default PaymentCombo;