const Payment = () => {

  return (<div className="pattern">
    <div className="container w-75 bg-black rounded">
      <h1 className="text-center my-4 text-danger p-5">WKMCINEMAS PAY</h1>
    </div>
    <div className="container w-75 text-center bg-dark my-5 text-danger rounded py-5">
      <div className="bg-dark">
        <div className="d-flex p-5 pb-5 justify-content-around">
          <div className="container-fluid bg-black py-5 rounded">
            <h1 className="pb-5">Datos de la tarjeta</h1>
            <div>
              <h4>Aceptamos todas las tarjetas</h4>
              <img className="w-50 mb-5" src="https://images.ctfassets.net/gc4s9mi2asix/27iheywutAjlzI1CWL3srg/faf536e2fabecb072ef5864bc3a0950b/Accepted-Cards-US.png" alt="" />
              <div className="d-flex flex-column w-50 mx-auto">
                <label htmlFor="" className="text-start h3 pt-2">Numero de tarjeta:</label>
                <input type="number" placeholder="1234-5678-8765-4321" />
                <label htmlFor="a" className="text-start h3 pt-3">Fecha de expiración:</label>
                <input type="month" id="a" />
                <label htmlFor="" className="text-start h3 pt-3">Código de seguridad:</label>
                <input type="number" min="0" max="999" placeholder="000" />
              </div>
            </div>
          </div>
          <div className="container-fluid bg-black py-5 rounded">
            <h1 className="pb-5">Datos de la orden</h1>
            <div className="d-flex flex-column w-75 mx-auto pt-3">
              <label htmlFor="" className="text-start h3 pt-5 mt-5" >Numero de orden:</label>
              <input type="number" placeholder="0000-0000" />
              <label htmlFor="string" className="text-start h3 pt-3">Monto a pagar:</label>
              <input type="number" placeholder="$0.00" />
              <label htmlFor="string" className="text-start h3 pt-3">ITBIS:</label>
              <input type="number" placeholder="$0.00" />
            </div>
          </div>
        </div>
        <div className="my-4 container d-flex justify-content-around">
          <a href="/movies" className="link w-25"><button className="btn btn-danger w-100">Cancelar</button></a>
          <a href="/" className="link w-25"><button className="btn btn-success w-100">Pagar</button></a>

        </div>
      </div>
      <div>

      </div>
    </div>
  </div>
  )
}

export default Payment;