import useCafeteria from "@/hooks/queries/useCafeteria"
import Cafeteria from "@/models/Cafeteria.models"

const Combos = () => {
  const { data } = useCafeteria();

  return (
    <div className="container-fluid pattern">
      <div className="">
        <div className="container w-75 bg-black rounded">
          <h1 className="text-center my-4 text-danger p-5">WKMCINEMAS COMBOS</h1>
        </div>
        {

          data !== undefined && data?.length !== 0 && data?.map(
            (cafeteria: Cafeteria) => (
              <div key={cafeteria.iDCombo} className="container d-flex flex-column bg-dark rounded my-5 mb-5 text-danger">
                <div className="bg-dark mt-2 rounded pb-3">
                  <h1 className="text-center my-3">{cafeteria.nombre}</h1>
                  <hr className="text-white" />
                </div>
                <div className="d-flex rounded pb-3">
                  <div className="mx-5 w-25">
                    <img className="w-100 rounded" src={cafeteria.img} alt="" />
                    <h5 className="w-100 my-2 text-center">
                      {cafeteria.contenido}
                    </h5>
                  </div>
                  <div className="w-75  d-flex flex-column p-5">
                    <h4 className="mt-5">
                      {cafeteria.descripcion}
                    </h4>
                    <div className="btnGroup mx-auto mt-5  d-flex flex-column container">
                      <div className="input-group">
                        <input type="number" min="0" max="10" className="form-control" placeholder="Cantidad" aria-label="Recipient's username with two button addons" />
                        <a href="/movies" className="link"><button className="btn btn-outline-danger" type="button">Atras</button></a>
                        <a href="/payment" className="link"><button className="btn btn-outline-success" type="button">Comprar</button></a>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default Combos